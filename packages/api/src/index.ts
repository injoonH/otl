import { Hono } from 'hono'
import { cors } from 'hono/cors'
import { logger } from 'hono/logger'

import { env } from '@/env'
import course from '@/route/course'

const app = new Hono()

// Debugging
app.use(logger())

// Middlewares
app.use(cors({ origin: env.CORS_ORIGIN, credentials: true }))

// Routes
const routes = app.route('/courses', course)

export default {
  port: env.API_PORT,
  fetch: app.fetch,
}
export type AppType = typeof routes
