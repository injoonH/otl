'use client'

import { Cross2Icon } from '@radix-ui/react-icons'
import { Button } from '@shadcn/button'
import { Input } from '@shadcn/input'
import { Table } from '@tanstack/react-table'

import { DataTableFacetedFilter } from './DataTableFacetedFilter'
import { DataTableViewOptions } from './DataTableViewOptions'

type DataTableToolbarProps<TData> = {
  table: Table<TData>
}

export const DataTableToolbar = <TData,>({
  table,
}: DataTableToolbarProps<TData>) => {
  const isFiltered = table.getState().columnFilters.length > 0

  const categoryColumn = table.getColumn('category')
  const departmentColumn = table.getColumn('department')

  return (
    <div className="flex items-center justify-between">
      <div className="flex flex-1 items-center space-x-2">
        <Input
          placeholder="과목명 검색"
          value={(table.getColumn('title')?.getFilterValue() as string) ?? ''}
          onChange={(event) =>
            table.getColumn('title')?.setFilterValue(event.target.value)
          }
          className="h-8 w-[150px] lg:w-[250px]"
        />
        {categoryColumn && (
          <DataTableFacetedFilter
            column={categoryColumn}
            title="과목 구분"
            options={Array.from(
              categoryColumn.getFacetedUniqueValues().keys(),
            ).map((name) => ({ value: name, label: name }))}
          />
        )}
        {departmentColumn && (
          <DataTableFacetedFilter
            column={departmentColumn}
            title="학과"
            options={Array.from(
              departmentColumn.getFacetedUniqueValues().keys(),
            ).map((name) => ({ value: name, label: name }))}
          />
        )}
        {isFiltered && (
          <Button
            variant="ghost"
            onClick={() => table.resetColumnFilters()}
            className="h-8 px-2 lg:px-3"
          >
            Reset
            <Cross2Icon className="ml-2 h-4 w-4" />
          </Button>
        )}
      </div>
      <DataTableViewOptions table={table} />
    </div>
  )
}
