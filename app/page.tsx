import Link from "next/link"

export default function Page() {
  return (
    <main>
      <h1>Home</h1>
      <div style={{ display: "flex", gap: "32px" }}>
        <Link href="/product">Product</Link>
        <Link href="/about">About</Link>
      </div>
    </main>
  )
}
