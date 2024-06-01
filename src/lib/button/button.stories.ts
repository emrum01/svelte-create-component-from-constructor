import type { Meta, StoryObj } from '@storybook/svelte';

import Button from './button.svelte';

const meta = {
  title: 'Example/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    buttonWidth: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg', 'not accepted value'],
    },
  },
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    buttonText: 'Button',
    type: 'button',
    onClick: () => alert('Button clicked'),
  },
};
