import Link from "next/link"

export default function Home(){
    return (
        <>
        <Link href={"/blog"}> blog</Link>
        <h1>Welcome home </h1>
    </>
    )
}