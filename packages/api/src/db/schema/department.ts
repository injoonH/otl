import { pgTable, smallint, varchar } from 'drizzle-orm/pg-core'

export const department = pgTable('otl_department', {
  id: smallint('id').primaryKey(),
  nameKo: varchar('name_ko', { length: 255 }).notNull(),
  nameEn: varchar('name_en', { length: 255 }).notNull(),
})
