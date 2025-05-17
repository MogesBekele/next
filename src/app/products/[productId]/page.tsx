export default async function Productl ({params}:{params: Promise<{productId:string}>}){

  const productId = (await params).productId 
  return (

    <div>
      <h1>this is product {productId}</h1>
    </div>
  )
}