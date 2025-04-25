import Link from "next/link"

export default function Product(){
    const productId = 10;
    return (
    <>
        <h1> Product </h1>
        <Link href={"/product/1"}>product 1</Link>
        <Link href={"/product/2"} replace>product 2</Link>
        <Link href={`/product/${productId}`} replace>product {productId}</Link>

    </>
        
    )
}