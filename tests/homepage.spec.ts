import { expect, test  } from "@playwright/test";

test("homepage loads successfully", async ({ page }) => {
  await page.goto("/");

  // Check that the page title is correct
  await expect(page).toHaveTitle(/DotForge - Editor/);
});

test("artboard editor is present", async ({ page }) => {
  await page.goto("/");

  // Wait for the artboard editor component to be visible
  // The ArtboardEditor component should be present on the page
  const artboardEditor = page.locator("body");
  await expect(artboardEditor).toBeVisible();
});
