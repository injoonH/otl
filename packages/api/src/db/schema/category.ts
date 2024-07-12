import { pgTable, smallint, varchar } from 'drizzle-orm/pg-core'

export const category = pgTable('otl_category', {
  id: smallint('id').primaryKey(),
  nameKo: varchar('name_ko', { length: 128 }).notNull(),
  nameEn: varchar('name_en', { length: 128 }).notNull(),
})
