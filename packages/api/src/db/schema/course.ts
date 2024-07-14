import { relations } from 'drizzle-orm'
import {
  boolean,
  index,
  pgEnum,
  pgTable,
  serial,
  smallint,
  varchar,
} from 'drizzle-orm/pg-core'

import { category } from './category'
import { department } from './department'

export const semesterEnum = pgEnum('semester', [
  'spring',
  'summer',
  'fall',
  'winter',
])

export const course = pgTable(
  'otl_course',
  {
    id: serial('id').primaryKey(),
    year: smallint('year').notNull(),
    semester: semesterEnum('semester').notNull(),
    categoryId: smallint('category_id')
      .notNull()
      .references(() => category.id),
    code: varchar('code', { length: 32 }).notNull(),
    no: varchar('no', { length: 32 }).notNull(),
    class: varchar('class', { length: 8 }),
    title: varchar('title', { length: 255 }).notNull(),
    hasSyllabus: boolean('has_syllabus').notNull(),
    au: smallint('au').notNull(),
    credit: smallint('credit').notNull(),
    professor: varchar('professor', { length: 255 }).notNull(),
    capacity: smallint('capacity').notNull(),
    audience: smallint('audience').notNull(),
    place: varchar('place', { length: 255 }),
    note: varchar('note', { length: 255 }),
    departmentId: smallint('department_id')
      .notNull()
      .references(() => department.id),
    deliveryMode: varchar('delivery_mode', { length: 32 }).notNull(),
  },
  (table) => ({
    yearSemesterIdx: index().on(table.year, table.semester),
  }),
)
export const courseRelations = relations(course, ({ one }) => ({
  category: one(category, {
    fields: [course.categoryId],
    references: [category.id],
  }),
  department: one(department, {
    fields: [course.departmentId],
    references: [department.id],
  }),
}))
