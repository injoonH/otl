import { zValidator } from '@hono/zod-validator'
import { createSelectSchema } from 'drizzle-zod'
import { Hono } from 'hono'
import { z } from 'zod'

import { getCoursesByYearAndSemester } from '@/db/query/course'
import { course } from '@/db/schema/course'

const courseSelectSchema = createSelectSchema(course)

const app = new Hono().get(
  '/',
  zValidator(
    'query',
    z.object({
      year: z.coerce.number(),
      semester: courseSelectSchema.shape.semester,
    }),
  ),
  async (c) => {
    const { year, semester } = c.req.valid('query')
    const courses = await getCoursesByYearAndSemester(year, semester)
    return c.json(courses)
  },
)

export default app
