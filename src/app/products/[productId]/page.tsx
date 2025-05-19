import { Metadata } from "next"


type Props ={
  params: Promise<{productId: string}>
}

export const generateMetadata = async ({params}:Props)=>{
  const id = (await params).productId
  return {
  title: `product ${id}`
  }
}

export default async function Productl ({params}:{params: Promise<{productId:string}>}){

  const productId = (await params).productId 
  return (

    <div>
      <h1>this is product {productId}</h1>
    </div>
  )
}

// dynamic route