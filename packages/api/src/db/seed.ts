import { categories } from '@/data/category'
import { departments } from '@/data/department'
import { queryClient } from '@/db'
import { createCategories, removeAllCategories } from '@/db/query/category'
import { createCourses, removeAllCourses } from '@/db/query/course'
import { createDepartments, removeAllDepartments } from '@/db/query/department'
import { FetchCoursesOptions, fetchParsedCourses } from '@/script/crawl'

const seed = async () => {
  await removeAllCourses()
  await removeAllDepartments()
  await removeAllCategories()

  await createDepartments(departments)
  await createCategories(categories)

  const options = [
    { year: 2024, semester: 'spring' },
    { year: 2024, semester: 'summer' },
    { year: 2024, semester: 'fall' },
  ] as const satisfies FetchCoursesOptions[]

  for (const option of options) {
    const courses = await fetchParsedCourses(option)

    if (!courses) {
      console.log('Failed to fetch courses with options: ', option)
      continue
    }

    // Batch queries to avoid maximum call stack size exceeded error
    const batchSize = 1000
    for (let i = 0; i < courses.length; i += batchSize) {
      await createCourses(courses.slice(i, i + batchSize))
    }
  }

  await queryClient.end()
}
seed()
