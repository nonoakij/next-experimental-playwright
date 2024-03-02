import {
  test,
  expect,
  http,
  HttpResponse,
} from "next/experimental/testmode/playwright/msw"

test.use({
  mswHandlers: [
    http.get("http://localhost:3000/api/product/shoe", () => {
      return new HttpResponse(
        JSON.stringify({
          title: "A shoe from mock server",
        }),
        { status: 200 }
      )
    }),
    http.get("http://localhost:3000/api/product/boot", () => {
      return new HttpResponse(
        JSON.stringify({
          title: "A boot from mock server",
        }),
        { status: 200 }
      )
    }),
  ],
})

// skipping because the following is not working properly
test.skip("/product/boot", async ({ page, msw }) => {
  await page.goto("/product/boot")

  await expect(page.locator("h1")).toHaveText(/A boot from mock server/)
})
