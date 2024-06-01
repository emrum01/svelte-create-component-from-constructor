<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  import type { HTMLButtonAttributes } from 'svelte/elements';

  export let buttonText: string = '';
  export let onClick: () => void;
  export let type: HTMLButtonAttributes['type'] = 'button';
  export let buttonWidth: 'sm' | 'md' | 'lg' = 'md';

  const dispatch = createEventDispatcher();
  const handleClick = (e: MouseEvent) => {
    onClick();
    dispatch('click', e);
  };

  // TODO: 型安全ではない値を入れて検証
  $: buttonSize = {
    sm: 'w-[100px]',
    md: 'w-[200px]',
    lg: 'w-[300px]',
  }[buttonWidth];
</script>

<button
  on:click={handleClick}
  class={`${buttonSize} text-white bg-gray-500 h-12 px-4 py-2 text-[12px]`}
  {type}
>
  {buttonText}
</button>
