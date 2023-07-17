"use client"

import { createColumnHelper } from "@tanstack/react-table"
import Table from "../Table"
import { TCarts } from "@/types"
import { getCarts } from "@/services"
import { useEffect, useState } from "react"
import Link from "next/link"
import { TableSkeleton } from "../skeletons"

const CartTable = () => {
  const [data, setData] = useState<TCarts[]>([])

  const columnHelper = createColumnHelper<TCarts>()

  const columns = [
    columnHelper.accessor("id", {
      id: "id",
      header: "#",
    }),
    columnHelper.accessor("userId", {
      id: "userId",
      header: "User ID",
    }),
    columnHelper.accessor("totalProducts", {
      id: "totalProducts",
      header: "Total Products",
    }),
    columnHelper.accessor("totalQuantity", {
      id: "totalQuantity",
      header: "Total Quantity",
    }),
    columnHelper.accessor("discountTotal", {
      id: "discountTotal",
      header: "Total Discount",
    }),
    columnHelper.accessor("total", {
      id: "total",
      header: "Total",
    }),
    columnHelper.accessor("id", {
      id: "id",
      header: "Actions",
      cell(props) {
        return <Link href={`/cart/${props.getValue()}`}>Detail</Link>
      },
    }),
  ]

  useEffect(() => {
    getTableData()
  }, [])

  const getTableData = async () => {
    const response = await getCarts<TCarts[]>()
    setData(response.carts)
  }

  return data.length ? (
    <Table columns={columns} data={data} />
  ) : (
    <TableSkeleton row={7} />
  )
}

export default CartTable
