"use client"

import { ColumnDef, createColumnHelper } from "@tanstack/react-table"
import Table from "../Table"
import { TProducts } from "@/types"
import { getProducts } from "@/services"
import { useEffect, useState, useMemo } from "react"
import { TableSkeleton } from "../skeletons"

const ProductTable = () => {
  const [data, setData] = useState<TProducts[]>([])

  const columns = useMemo<ColumnDef<TProducts>[]>(
    () => [
      {
        id: "id",
        accessorKey: "id",
        header: "#",
      },
      {
        id: "title",
        accessorKey: "title",
        header: "Title",
      },
      {
        id: "brand",
        accessorKey: "brand",
        header: "Brand",
      },
      {
        id: "price",
        accessorKey: "price",
        header: "Price",
      },
      {
        id: "stock",
        accessorKey: "stock",
        header: "Stock",
      },
      {
        id: "category",
        accessorKey: "category",
        header: "Category",
      },
    ],
    []
  )

  useEffect(() => {
    getTableData()
  }, [])

  const getTableData = async () => {
    const response = await getProducts<TProducts[]>()
    setData(response.products)
  }

  return data.length ? (
    <Table columns={columns} data={data} />
  ) : (
    <TableSkeleton row={6} />
  )
}

export default ProductTable
