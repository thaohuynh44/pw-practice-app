import { test, expect } from "@playwright/test";
import { NavigationPage } from "../page_objects/navigationPage";
import { FormLayoutsPage } from "../page_objects/formLayoutsPage";

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

test("parameterized methods", async ({ page }) => {
  const navigateTo = new NavigationPage(page);
  const onFormLayoutsPage = new FormLayoutsPage(page);

  await navigateTo.formLayoutPage();
  await onFormLayoutsPage.submitUsingTheGridFormWithCredentialsAndSelectOption(
    "test@test.com",
    "Welcome1",
    "Option 2"
  );

  await onFormLayoutsPage.submitInlineFormWithNameEmailAndCheckbox(
    "John Smith",
    "john@example.com",
    true
  );
});
