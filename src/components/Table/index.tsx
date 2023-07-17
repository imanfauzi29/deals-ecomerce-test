"use client"
import React, { useState } from "react"
import {
  useReactTable,
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  SortingState,
  getFilteredRowModel,
} from "@tanstack/react-table"
import type { ColumnDef } from "@tanstack/react-table"
import classNames from "classnames"
import { HiSearch } from "react-icons/hi"

interface Props<TData> {
  columns: ColumnDef<TData>[]
  data: TData[] | []
  total?: number
  page?: number
  limit?: number
  handlePagination?: (page: number) => void
  isLoading?: boolean
}

const Table = <TData extends object>({ columns, data }: Props<TData>) => {
  const [sorting, setSorting] = useState<SortingState>([])
  const [q, setQ] = useState("")

  const table = useReactTable({
    columns,
    data,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    state: {
      sorting,
      globalFilter: q,
    },
    onSortingChange: setSorting,
    onGlobalFilterChange: setQ,
  })

  return (
    <>
      <div className="flex justify-end mb-5">
        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-gray-500">
            <HiSearch size={24} />
          </div>
          <input
            type="text"
            id="simple-search"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setQ(e.target.value)
            }
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search..."
          />
        </div>
      </div>
      <div className={classNames("relative overflow-x-auto")}>
        <table
          className={classNames(
            "w-full text-sm text-gray-500 dark:text-gray-400 whitespace-nowrap text-center"
          )}
        >
          <thead
            className={classNames(
              "text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"
            )}
          >
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <th
                    key={header.id}
                    onClick={header.column.getToggleSortingHandler()}
                    className={classNames("px-6 py-3")}
                  >
                    {header.isPlaceholder ? null : (
                      <div>
                        {flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                      </div>
                    )}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody>
            {table.getRowModel().rows.map((row) => (
              <tr
                key={row.id}
                className={classNames(
                  "bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                )}
              >
                {row.getVisibleCells().map((cell) => (
                  <td key={cell.id} className={classNames("px-6 py-4")}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex flex-col items-center">
        <div className="inline-flex mt-2 xs:mt-0">
          <button
            disabled={!table.getCanPreviousPage()}
            onClick={() => table.previousPage()}
            className="flex items-center disabled:bg-gray-500 justify-center px-3 h-8 text-sm font-medium text-white bg-gray-800 rounded-l hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
          >
            Prev
          </button>
          <button
            disabled={!table.getCanNextPage()}
            onClick={() => table.nextPage()}
            className="flex items-center disabled:bg-gray-500 justify-center px-3 h-8 text-sm font-medium text-white bg-gray-800 border-0 border-l border-gray-700 rounded-r hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
          >
            Next
          </button>
        </div>
      </div>
    </>
  )
}

export default Table
