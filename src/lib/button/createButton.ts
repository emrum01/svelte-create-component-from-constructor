import type { HTMLButtonAttributes } from 'svelte/elements';
import Button from './button.svelte';
import '../../app.css';

type Props = {
  /**
   * ボタンのテキスト
   */
  buttonText?: string;
  /**
   * ボタンのtype属性
   */
  type?: HTMLButtonAttributes['type'];
  /**
   * ボタンの幅
   *
   * @default 'md'
   */
  buttonWidth?: 'sm' | 'md' | 'lg';
  /**
   * ボタンクリック時に実行される関数
   */
  onClick?: () => void;
};

/**
 * svelte以外の環境でButtonコンポーネントを表示するための関数
 *
 * @param target 表示する対象のHTMLElement
 * @param props ButtonコンポーネントのProps
 */
export const createButton = (target: HTMLElement, props: Props) => {
  // 任意の処理

  new Button({
    target,
  }).$$set({
    ...props,
  });
};
