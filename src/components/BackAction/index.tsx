"use client"
import { useRouter } from "next/navigation"
import { BsArrowLeftShort } from "react-icons/bs"

const BackButton = () => {
  const router = useRouter()

  return (
    <div className="mb-5">
      <button onClick={() => router.back()} className="p-4">
        <BsArrowLeftShort size={24} />
      </button>
    </div>
  )
}

export default BackButton
