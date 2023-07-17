"use client"
import { createColumnHelper } from "@tanstack/react-table"
import { TCarts, TUsers } from "@/types"
import { getUserById } from "@/services"
import { useEffect, useState } from "react"
import { getCartById } from "@/services/carts"
import { TCartProduct } from "@/types/carts.types"
import { Table, TableSkeleton, TextSkeleton } from "@/components"

const CartDetailTable = ({ id }: { id: string }) => {
  const [data, setData] = useState<TCarts>()
  const [users, setUsers] = useState<TUsers>()

  const columnHelper = createColumnHelper<TCartProduct>()

  const columns = [
    columnHelper.accessor("id", {
      id: "id",
      header: "#",
    }),
    columnHelper.accessor("title", {
      id: "title",
      header: "Product name",
    }),
    columnHelper.accessor("price", {
      id: "price",
      header: "Price",
    }),
    columnHelper.accessor("quantity", {
      id: "quantity",
      header: "Quantity",
    }),
    columnHelper.accessor("discountedPrice", {
      id: "discountedPrice",
      header: "Discount Price",
    }),
    columnHelper.accessor("discountPercentage", {
      id: "discountPercentage",
      header: "Discount Percentage",
    }),
    columnHelper.accessor("total", { id: "total", header: "Total" }),
  ]

  useEffect(() => {
    getTableData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    getUserData(Number(data?.id))
  }, [data])

  const getTableData = async () => {
    const response = await getCartById<TCarts>({ id })
    setData(response)
  }

  const getUserData = async (id: number) => {
    const response = await getUserById<TUsers>(id)
    setUsers(response)
  }

  return (
    <>
      <div className="w-full rounded-lg bg-slate-200 border border-slate-400 p-4 mb-5">
        <div className="grid grid-cols-2 gap-4">
          <div className="flex gap-2 items-center">
            User: <TextSkeleton data={users?.username} />
          </div>
          <div className="flex gap-2 items=center">
            # of items: <TextSkeleton data={data?.totalProducts} />
          </div>
          <div className="flex gap-2 items=center">
            Quantity: <TextSkeleton data={data?.totalQuantity} />
          </div>
          <div className="flex gap-2 items=center">
            Total amount: <TextSkeleton data={data?.total} />
          </div>
        </div>
      </div>
      {data?.products ? (
        <Table columns={columns} data={data.products} />
      ) : (
        <TableSkeleton row={7} />
      )}
    </>
  )
}

export default CartDetailTable
