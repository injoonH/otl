'use client'

import { DotsHorizontalIcon } from '@radix-ui/react-icons'
import { Button } from '@shadcn/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@shadcn/dropdown-menu'
import { Row } from '@tanstack/react-table'
import Link from 'next/link'

import { Course } from './columns'

type DataTableRowActionsProps<TData> = {
  row: Row<TData>
}

const semesterMap = {
  spring: 1,
  summer: 2,
  fall: 3,
  winter: 4,
} as const

export const DataTableRowActions = <TData,>({
  row,
}: DataTableRowActionsProps<TData>) => {
  const course = row.original as Course

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          className="data-[state=open]:bg-muted flex h-8 w-8 p-0"
        >
          <DotsHorizontalIcon className="h-4 w-4" />
          <span className="sr-only">Open menu</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-[160px]">
        <DropdownMenuItem asChild>
          <Link
            href={`https://cais.kaist.ac.kr/syllabusInfo?year=${course.year}&term=${semesterMap[course.semester]}&subject_no=${course.no}&lecture_class=${course.class ?? ''}&dept_id=${course.departmentId}`}
            target="_blank"
          >
            실라버스
          </Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
