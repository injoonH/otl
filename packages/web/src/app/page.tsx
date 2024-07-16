'use client'

import { useQuery } from '@tanstack/react-query'

import { client } from '@/lib/api'
import { DataTable } from '@/ui/component/DataTable/DataTable'
import { columns } from '@/ui/component/DataTable/columns'
import { TimeTable } from '@/ui/component/TimeTable/TimeTable'

const Home: React.FC = () => {
  const { data: courses } = useQuery({
    queryKey: ['courses'],
    queryFn: async () => {
      const res = await client.courses.$get({
        query: { year: '2024', semester: 'fall' },
      })
      return await res.json()
    },
  })

  if (!courses)
    return (
      <main className="min-h-svh content-center">
        <div className="mx-auto flex justify-center">
          <svg
            className="-ml-1 mr-3 h-5 w-5 animate-spin text-[#e54c65]"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              stroke-width="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
        </div>
      </main>
    )

  return (
    <main className="min-h-svh content-center">
      <div className="mx-auto flex justify-center gap-8 px-16">
        <TimeTable start={9} end={22} />
        <DataTable columns={columns} data={courses} />
      </div>
    </main>
  )
}

export default Home
