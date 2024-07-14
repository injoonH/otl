import { createInsertSchema } from 'drizzle-zod'
import fs from 'fs'
import { stringify } from 'qs'
import xlsx from 'xlsx'
import { z } from 'zod'

import { type CategoryNameKo, categoryKoreanNameIdMap } from '@/data/category'
import { departments as departmentsData } from '@/data/department'
import { course } from '@/db/schema/course'

const Semester = {
  spring: 1,
  summer: 2,
  fall: 3,
  winter: 4,
} as const
type SemesterKey = keyof typeof Semester

const koreanSemesterMap = {
  봄학기: 'spring',
  여름학기: 'summer',
  가을학기: 'fall',
  겨울학기: 'winter',
} as const

const koreanCourseSchema = z
  .object({
    'KAIST 전체 개설 과목조회': z.coerce.number(),
    __EMPTY: z.enum(['봄학기', '여름학기', '가을학기', '겨울학기']),
    __EMPTY_2: z.string(),
    __EMPTY_5: z.string(),
    __EMPTY_6: z.string(),
    __EMPTY_7: z.string(),
    __EMPTY_8: z.string(),
    __EMPTY_9: z.enum(['Y', 'N']),
    __EMPTY_10: z.coerce.number(),
    __EMPTY_11: z.string(),
    __EMPTY_12: z.string(),
    __EMPTY_15: z.coerce.number(),
    __EMPTY_16: z.coerce.number(),
    __EMPTY_18: z.string().nullable().default(null),
    __EMPTY_20: z.string().default(''),
    __EMPTY_21: z.number(),
    __EMPTY_23: z.string(),
  })
  .transform((data) => ({
    year: data['KAIST 전체 개설 과목조회'],
    semester: koreanSemesterMap[data.__EMPTY],
    categoryId: categoryKoreanNameIdMap.get(data.__EMPTY_2 as CategoryNameKo),
    code: data.__EMPTY_5,
    no: data.__EMPTY_6,
    class: data.__EMPTY_7.trim() || null,
    title: data.__EMPTY_8,
    hasSyllabus: data.__EMPTY_9 === 'Y',
    au: data.__EMPTY_10,
    credit: parseInt(data.__EMPTY_11.split(':')[2]),
    professor: data.__EMPTY_12,
    capacity: data.__EMPTY_15,
    audience: data.__EMPTY_16,
    place: data.__EMPTY_18,
    note: data.__EMPTY_20.trim() || null,
    departmentId: data.__EMPTY_21,
    deliveryMode: data.__EMPTY_23,
  }))

export type FetchCoursesOptions = {
  year: number | number[]
  semester: SemesterKey | SemesterKey[]
  departments?: number[]
  english?: boolean
}
const fetchCourses = async ({
  year,
  semester,
  departments,
  english,
}: FetchCoursesOptions) => {
  const res1 = await fetch('https://cais.kaist.ac.kr?menu=totalOpeningCourse')
  const cookie = res1.headers.get('Set-Cookie')?.split(';')[0]
  if (!cookie) return { ok: false, errorCode: 'NO_COOKIE' } as const

  if (!english)
    // Fetch again to retrieve the response in Korean
    await fetch('https://cais.kaist.ac.kr?menu=totalOpeningCourse&lang=KOR', {
      headers: { Cookie: cookie },
    })

  const res2 = await fetch('https://cais.kaist.ac.kr/totalOpeningCourse', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      Referer: 'https://cais.kaist.ac.kr/totalOpeningCourse',
      Cookie: cookie,
    },
    body: stringify({
      processType: 'excel',
      hid_sel_year: Array.isArray(year) ? year.join(',') : year,
      hid_sel_term: Array.isArray(semester)
        ? semester.map((el) => Semester[el]).join(',')
        : Semester[semester],
      hid_dept_id:
        departments?.join(',') ?? departmentsData.map((dp) => dp.id).join(','),
      hid_subject_id: '%',
      sel_course: '%',
    }),
  })
  if (res2.headers.get('Content-Type') !== 'application/ms-excel')
    return { ok: false, errorCode: 'NO_EXCEL' } as const

  const buffer = await res2.arrayBuffer()
  return { ok: true, data: buffer } as const
}

const convertToJson = <T>(buffer: ArrayBuffer) => {
  const workbook = xlsx.read(buffer, { type: 'buffer' })
  const sheetName = workbook.SheetNames[0]
  const sheet = workbook.Sheets[sheetName]
  return xlsx.utils.sheet_to_json<T>(sheet)
}

export const fetchParsedCourses = async (options: FetchCoursesOptions) => {
  const buffer = await fetchCourses(options)
  if (!buffer.ok) {
    console.error(buffer.errorCode)
    return
  }

  const json = convertToJson(buffer.data)
  json.shift()

  const parsed = koreanCourseSchema
    .array()
    .pipe(createInsertSchema(course).array())
    .parse(json)
  return parsed
}

const main = async () => {
  const year = 2024
  const semester: SemesterKey = 'fall'

  const buffer = await fetchCourses({ year, semester })
  if (buffer.ok) {
    const json = convertToJson(buffer.data)

    // fs.writeFileSync(
    //   `courses-${year}-${semester}.xlsx`,
    //   Buffer.from(buffer.data),
    // )
    fs.writeFileSync(
      `courses-${year}-${semester}.json`,
      JSON.stringify(json, null, 2),
    )

    json.shift()
    const parsed = koreanCourseSchema
      .array()
      .pipe(createInsertSchema(course).array())
      .parse(json)
    fs.writeFileSync(
      `parsed-${year}-${semester}.json`,
      JSON.stringify(parsed, null, 2),
    )
  }
}
main()
