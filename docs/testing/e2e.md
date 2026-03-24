---
sidebar_position: 4
---

# E2E Testing

End-to-end tests use **Playwright** and run against a locally served or deployed instance of the application. E2E tests are not written for every story — only for the most critical user flows.

## Running E2E Tests

```bash
cd dmkit-frontend

# Install browsers (first time only)
npx playwright install

# Run all E2E tests
npx playwright test

# Run with browser UI visible
npx playwright test --headed

# Run specific test file
npx playwright test tests/e2e/campaigns.spec.ts

# Open Playwright UI
npx playwright test --ui
```

## Covered Flows

| Flow | File |
|---|---|
| Native login and logout | `auth.spec.ts` |
| Google OAuth login | `auth.spec.ts` |
| Create a campaign scoped to a user | `campaigns.spec.ts` |
| Create a quest and link a character | `quests.spec.ts` |
| Drag a character from entity panel onto battle map | `battle-map.spec.ts` |
| Export a campaign and import on a fresh account | `export-import.spec.ts` |

## Example Test

```typescript
import { test, expect } from '@playwright/test';

test('creates a campaign and shows it in the list', async ({ page }) => {
  await page.goto('/campaigns');
  await page.getByRole('button', { name: /new campaign/i }).click();
  await page.getByLabel('Campaign name').fill('The Underdark Reaches');
  await page.getByRole('button', { name: /create/i }).click();

  await expect(page.getByText('The Underdark Reaches')).toBeVisible();
});
```

## CI Behaviour

E2E tests run on push to `main` only — not on every PR. This keeps PR feedback fast while still catching regressions before deploy.
