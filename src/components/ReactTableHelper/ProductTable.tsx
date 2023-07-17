"use client"

import { createColumnHelper } from "@tanstack/react-table"
import Table from "../Table"
import { TProducts } from "@/types"
import { getProducts } from "@/services"
import { useEffect, useState } from "react"
import { TableSkeleton } from "../skeletons"

const ProductTable = () => {
  const [data, setData] = useState<TProducts[]>([])

  const columnHelper = createColumnHelper<TProducts>()

  const columns = [
    columnHelper.accessor("id", {
      id: "id",
      header: "#",
    }),
    columnHelper.accessor("title", {
      id: "title",
      header: "Product name",
    }),
    columnHelper.accessor("brand", {
      id: "brand",
      header: "Brand",
    }),
    columnHelper.accessor("price", {
      id: "price",
      header: "Price",
    }),
    columnHelper.accessor("stock", {
      id: "stock",
      header: "Stock",
    }),
    columnHelper.accessor("category", {
      id: "category",
      header: "Category",
    }),
  ]

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
