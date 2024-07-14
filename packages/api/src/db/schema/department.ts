import { relations } from 'drizzle-orm'
import { pgTable, smallint, varchar } from 'drizzle-orm/pg-core'

import { course } from './course'

export const department = pgTable('otl_department', {
  id: smallint('id').primaryKey(),
  nameKo: varchar('name_ko', { length: 255 }).notNull(),
  nameEn: varchar('name_en', { length: 255 }).notNull(),
})
export const departmentRelations = relations(department, ({ many }) => ({
  courses: many(course),
}))
