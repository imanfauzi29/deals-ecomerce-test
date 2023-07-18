"use client"

import { ColumnDef } from "@tanstack/react-table"
import Table from "../Table"
import { TCarts } from "@/types"
import { getCarts } from "@/services"
import { useEffect, useMemo, useState } from "react"
import Link from "next/link"
import { TableSkeleton } from "../skeletons"

const CartTable = () => {
  const [data, setData] = useState<TCarts[]>([])

  const columns = useMemo<ColumnDef<TCarts>[]>(
    () => [
      {
        id: "id",
        accessorKey: "id",
        header: "#",
      },
      {
        id: "userId",
        accessorKey: "userId",
        header: " User ID",
      },
      {
        id: "totalProducts",
        accessorKey: "totalProducts",
        header: "Total Product",
      },
      {
        id: "totalQuantity",
        accessorKey: "totalQuantity",
        header: "Total Quantity",
      },
      {
        id: "discountTotal",
        accessorKey: "discountTotal",
        header: "Discount Total",
      },
      {
        id: "total",
        accessorKey: "total",
        header: "Total",
      },
      {
        id: "action",
        accessorKey: "id",
        header: "Action",
        cell(props) {
          return <Link href={`/cart/${props.getValue()}`}>Detail</Link>
        },
      },
    ],
    []
  )

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
