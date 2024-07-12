import { db } from '@/db'
import { category } from '@/db/schema/category'

type NewCategory = typeof category.$inferInsert

export const createCategories = async (newCategories: NewCategory[]) =>
  db.insert(category).values(newCategories)

export const removeAllCategories = async () => db.delete(category)
