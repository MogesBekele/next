export default function OrderProduct(){

  const handleClick =()=>{
    console.log('you are clicked')
  }

  return(
    <>

    <h1>order product</h1>
    <button onClick={handleClick}>place order</button>
    </>
  )
}