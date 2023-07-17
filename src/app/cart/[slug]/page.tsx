import { CartDetailTable } from "@/components"
import BackButton from "@/components/BackAction"

const Detail = ({ params }: { params: { slug: string } }) => {
  return (
    <>
      <BackButton />
      <CartDetailTable id={params.slug} />
    </>
  )
}

export default Detail
