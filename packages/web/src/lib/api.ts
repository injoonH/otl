import type { AppType } from '@otl/api'
import { hc } from 'hono/client'

import { env } from '@/env'

export const client = hc<AppType>(env.NEXT_PUBLIC_API_BASE_URL)
