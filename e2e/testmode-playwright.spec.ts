import { test, expect } from "next/experimental/testmode/playwright"

test("/product/shoe", async ({ page, next }) => {
  next.onFetch((request) => {
    if (request.url === "http://localhost:3000/api/product/shoe") {
      return new Response(
        JSON.stringify({
          title: "A shoe from mock server",
        }),
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
    }
    return "abort"
  })

  await page.goto("/product/shoe")

  await expect(page.locator("h1")).toHaveText(/A shoe from mock server/)
})

test("/product/boot", async ({ page, next }) => {
  next.onFetch((request) => {
    if (request.url === "http://localhost:3000/api/product/boot") {
      return new Response(
        JSON.stringify({
          title: "A boot from mock server",
        }),
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
    }
    return "abort"
  })

  await page.goto("/product/boot")

  await expect(page.locator("h1")).toHaveText(/A boot from mock server/)
})
