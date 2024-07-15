'use client'

import { useQuery } from '@tanstack/react-query'

import { client } from '@/lib/api'
import { DataTable } from '@/ui/component/DataTable/DataTable'
import { columns } from '@/ui/component/DataTable/columns'

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

  if (!courses) return <div>Loading...</div>

  return (
    <main className="min-h-svh content-center">
      <div className="mx-auto max-w-5xl">
        <DataTable columns={columns} data={courses} />
      </div>
    </main>
  )
}

export default Home
