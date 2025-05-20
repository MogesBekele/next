import { useRouter } from "next/router";

export default function OrderProduct() {
  const router = useRouter()
  router.push('/')
  const handleClick = () => {
    console.log("you are clicked");
  };

  return (
    <>
      <h1>order product</h1>
      <button onClick={handleClick}>place order</button>
    </>
  );
}
