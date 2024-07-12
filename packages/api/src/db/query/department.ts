import { db } from '@/db'
import { department } from '@/db/schema/department'

type NewDepartment = typeof department.$inferInsert

export const createDepartments = async (newDepartments: NewDepartment[]) =>
  db.insert(department).values(newDepartments)

export const removeAllDepartments = async () => db.delete(department)
