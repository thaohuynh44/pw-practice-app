import { test } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  await page.goto("http://localhost:4200/");
});

test.describe("suite1", () => {
  test.beforeEach(async ({ page }) => {
    await page.getByText("Charts").click();
  });

  test("the first test", async ({ page }) => {
    await page.getByText("Form Layouts").click();
  });

  test.skip("navigate to datepicker page", async ({ page }) => {
    await page.getByText("Datepicker").click();
  });
});

test.describe.only("suite2", () => {
  test.beforeEach(async ({ page }) => {
    await page.getByText("Formsc").click();
  });

  test("the first test", async ({ page }) => {
    await page.getByText("Form Layouts").click();
  });

  test("navigate to datepicker page", async ({ page }) => {
    await page.getByText("Datepicker").click();
  });
});
