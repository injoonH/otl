import { db } from '@/db'
import { course } from '@/db/schema/course'

type NewCourse = typeof course.$inferInsert

export const createCourses = async (newCourses: NewCourse[]) =>
  db.insert(course).values(newCourses)

export const removeAllCourses = async () => db.delete(course)
