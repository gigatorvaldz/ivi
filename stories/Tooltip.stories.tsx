import type { Meta, StoryObj } from '@storybook/react';
import Tooltip from '../UI/Tooltip';

const meta: Meta<typeof Tooltip> = {
  title: 'UI/Tooltip',
  component: Tooltip,
  argTypes: {
    children: {
      control: 'disabled',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Tooltip>;

export const Default: Story = {
  args: {
    children: <button style={{marginTop: '6rem'}}>Hover me to show tooltip</button>,
    text: 'Tooltip',
  },
};
