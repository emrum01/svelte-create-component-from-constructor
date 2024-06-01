import { beforeAll, describe, expect, it } from 'vitest';
import { fireEvent, render, screen, waitFor } from '@testing-library/svelte';
import '@testing-library/jest-dom';
import Button from './button.svelte';

const TEST_BUTTON_TEXT = 'button test';
const TEST_ALERT_TEXT = 'alert test';

beforeAll(() => {
  render(Button, {
    buttonText: TEST_BUTTON_TEXT,
    buttonWidth: 'md',
    onClick: () => window.alert(TEST_ALERT_TEXT),
  });
});

const buttonInScreen = screen.findByText(TEST_BUTTON_TEXT);

describe('Buttonコンポーネント', () => {
  it('表示されること', async () => {
    expect(await buttonInScreen).toBeInTheDocument();
  });

  it('クリックイベントが発火すること', async () => {
    await fireEvent.click(await buttonInScreen);
    waitFor(() => expect(alert).toHaveBeenCalledTimes(1));
  });
});
