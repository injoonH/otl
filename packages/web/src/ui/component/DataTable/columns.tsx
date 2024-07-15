import type { ColumnDef, RowData } from '@tanstack/react-table'
import type { InferResponseType } from 'hono/client'

import { client } from '@/lib/api'
import { DataTableColumnHeader } from '@/ui/component/DataTable/DataTableColumnHeader'
import { DataTableRowActions } from '@/ui/component/DataTable/DataTableRowActions'
import { Badge } from '@/ui/shadcn/ui/badge'

declare module '@tanstack/react-table' {
  interface ColumnMeta<TData extends RowData, TValue> {
    title: string
  }
}

type ElementType<T> = T extends (infer U)[] ? U : never
export type Course = ElementType<InferResponseType<typeof client.courses.$get>>

export const columns: ColumnDef<Course>[] = [
  {
    id: 'department',
    accessorKey: 'department.nameKo',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="학과" />
    ),
    filterFn: (row, id, value) => value.includes(row.getValue(id)),
    meta: { title: '학과' },
  },
  {
    id: 'category',
    accessorKey: 'category.nameKo',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="과목 구분" />
    ),
    filterFn: (row, id, value) => value.includes(row.getValue(id)),
    meta: { title: '과목 구분' },
  },
  {
    accessorKey: 'title',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="과목명" />
    ),
    cell: ({ row }) => (
      <div className="flex space-x-2">
        <Badge variant="outline">{row.original.code}</Badge>
        <span className="max-w-[500px] truncate font-medium">
          {row.getValue('title')}
        </span>
      </div>
    ),
    meta: { title: '과목명' },
  },
  {
    accessorKey: 'class',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="분반" />
    ),
    meta: { title: '분반' },
  },
  {
    accessorKey: 'credit',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="학점" />
    ),
    meta: { title: '학점' },
  },
  {
    accessorKey: 'au',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="AU" />
    ),
    meta: { title: 'AU' },
  },
  {
    accessorKey: 'professor',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="담당 교수" />
    ),
    meta: { title: '담당 교수' },
  },
  {
    id: 'actions',
    cell: ({ row }) =>
      row.original.hasSyllabus ? <DataTableRowActions row={row} /> : null,
  },
]
