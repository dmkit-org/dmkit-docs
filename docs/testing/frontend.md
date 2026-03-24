---
sidebar_position: 2
---

# Frontend Testing

## Tools

| Tool | Version | Purpose |
|---|---|---|
| Vitest | latest | Test runner, replaces Jest — faster, native ESM |
| React Testing Library | latest | Component testing via user-centric queries |
| Playwright | latest | E2E browser automation |

## Running Tests

```bash
cd dmkit-frontend

# Unit and component tests
npm test

# With coverage
npm test -- --coverage

# Watch mode
npm test -- --watch

# E2E tests
npx playwright test

# E2E with UI
npx playwright test --ui
```

## Writing Component Tests

Tests should interact with the DOM the way a user would — by label, role, or visible text rather than by CSS class or test ID.

```typescript
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { CampaignList } from './CampaignList';

test('shows empty state when no campaigns exist', () => {
  render(<CampaignList campaigns={[]} />);
  expect(screen.getByText(/no campaigns yet/i)).toBeInTheDocument();
});

test('calls onCreate when create button is clicked', async () => {
  const onCreate = vi.fn();
  render(<CampaignList campaigns={[]} onCreate={onCreate} />);
  await userEvent.click(screen.getByRole('button', { name: /new campaign/i }));
  expect(onCreate).toHaveBeenCalledOnce();
});
```

## What to Test

- Form validation — required fields, invalid input, error messages
- Empty states
- Loading states
- User interactions — clicks, keyboard navigation, drag events
- Data display — correct values rendered from props
- Error boundaries

## What Not to Test

- Implementation details (internal state, private methods)
- Third-party library behaviour (React Flow, Konva)
- Styling and CSS
