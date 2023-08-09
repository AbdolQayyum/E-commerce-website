import { Products } from "@/utils/mock"
import ProductsCart from "@/component/ProductsCart"
import { StaticImageData } from "next/image"

const getProductsByCategory = (category:string) =>{

    return Products.filter((product) => product.category === category)

}

export default function Page({ params }: { params: { slug: string } }) {
    return <div>My Category: {params.slug}</div>
  }