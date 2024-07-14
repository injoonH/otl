'use client'

import { useQuery } from '@tanstack/react-query'
import { ColumnDef } from '@tanstack/react-table'
import type { InferResponseType } from 'hono/client'

import { client } from '@/lib/api'
import { DataTable } from '@/ui/component/DataTable/DataTable'

type ElementType<T> = T extends (infer U)[] ? U : never
type Course = ElementType<InferResponseType<typeof client.courses.$get>>

const columns: ColumnDef<Course>[] = [
  {
    accessorKey: 'department.nameKo',
    header: 'Department',
  },
  {
    accessorKey: 'code',
    header: 'Code',
  },
  {
    accessorKey: 'title',
    header: 'Title',
  },
  {
    accessorKey: 'class',
    header: 'Class',
  },
  {
    accessorKey: 'credit',
    header: 'Credit',
  },
  {
    accessorKey: 'au',
    header: 'AU',
  },
  {
    accessorKey: 'professor',
    header: 'Professor',
  },
  {
    accessorKey: 'place',
    header: 'Place',
  },
]

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
    <main>
      <DataTable columns={columns} data={courses} />
    </main>
  )
}

export default Home
