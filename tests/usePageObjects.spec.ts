import { test, expect } from "@playwright/test";
import { NavigationPage } from "../page_objects/navigationPage";

test.beforeEach(async ({ page }) => {
  await page.goto("http://localhost:4200/");
});

test("navigate to form page", async ({ page }) => {
  const navigation = new NavigationPage(page);
  await navigation.formLayoutPage();
  await navigation.datepickerPage();
  await navigation.smartTablePage();
  await navigation.toastrPage();
  await navigation.tooltipPage();
});
