import { describe, expect, it, vi } from 'vitest';
import { screen } from '@testing-library/svelte';
import { createButton } from './createButton.js';

window.alert = vi.fn();
document.addEventListener = vi.fn().mockImplementation((_event, callback) => {
  callback();
});

const buttonInScreen = (name: string | undefined) =>
  screen.findByRole('button', { name });

describe('表示テスト', () => {
  it('ボタンが表示されること', async () => {
    const buttonText = 'show button';

    /**
     * MEMO:
     * constructorからButtonコンポーネントを描画すると以下のようなエラーが発生する
     * <Button> was created without expected prop 'onClick'
     */
    createButton(document.body, {
      buttonText,
      onClick: () => window.alert('Button clicked'),
    });

    expect(await buttonInScreen(buttonText)).toBeInTheDocument();
  });
});
