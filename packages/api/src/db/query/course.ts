import { db } from '@/db'
import { course } from '@/db/schema/course'

type NewCourse = typeof course.$inferInsert
type CourseSelect = typeof course.$inferSelect

export const createCourses = async (newCourses: NewCourse[]) =>
  db.insert(course).values(newCourses)

export const getCoursesByYearAndSemester = (
  year: number,
  semester: CourseSelect['semester'],
) =>
  db.query.course.findMany({
    with: {
      category: true,
      department: true,
    },
    where: (category, { eq, and }) =>
      and(eq(category.year, year), eq(category.semester, semester)),
  })

export const removeAllCourses = async () => db.delete(course)
