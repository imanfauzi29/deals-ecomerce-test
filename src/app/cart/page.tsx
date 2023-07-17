import { CartTable } from "@/components"
import { useCallback } from "react"

export default function Page() {
  return (
    <>
      <div>
        <div className="flex justify-between w-full mb-5">
          <h1 className="font-semibold text-xl">Product</h1>
        </div>
        <CartTable />
      </div>
    </>
  )
}
