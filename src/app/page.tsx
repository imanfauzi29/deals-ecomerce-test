import { ProductTable } from "@/components"

export default async function Home() {
  return (
    <>
      <div>
        <div className="flex justify-between w-full mb-5">
          <h1 className="font-semibold text-xl">Product</h1>
        </div>
        <ProductTable />
      </div>
    </>
  )
}
