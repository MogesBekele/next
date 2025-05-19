export default async function Review({params}: {params: Promise<{productId: string; reviewId: string}>}){

  const {productId, reviewId}= await params
  return (

    <div>
      <h1>this is {reviewId} and {productId}</h1>
    </div>
  )
}

