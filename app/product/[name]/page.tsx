import Link from "next/link"

export default async function Page(props: { params: { name: string } }) {
  const res = await fetch(
    `http://localhost:3000/api/product/${props.params.name}`,
    {
      cache: "no-cache",
    }
  )
  const data = await res.json()
  return (
    <main>
      <h1>{data.title}</h1>
      <Link href="/product">Product</Link>
    </main>
  )
}
