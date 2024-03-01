import Link from "next/link"

export default function Page() {
  return (
    <main>
      <h1>Product</h1>
      <div style={{ display: "flex", gap: "32px" }}>
        <Link href="/">Home</Link>
        <Link href="/product/shoe">Shoe</Link>
        <Link href="/product/boot">Boot</Link>
      </div>
    </main>
  )
}
