import { test } from "@playwright/test";

test("the first test", async ({ page }) => {
  await page.goto("http://localhost:4200/");
  await page.getByText("Forms").click();
});

test.describe("the first test suite", () => {
  test("the first test", () => {});

  test("the second test", () => {});

  test("the third test", () => {});
});
