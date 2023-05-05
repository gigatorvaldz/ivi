import type { Meta, StoryObj } from '@storybook/react';
import BackArrow from '../UI/BackArrow';

const meta: Meta<typeof BackArrow> = {
  title: 'UI/BackArrow',
  component: BackArrow,
};

export default meta;
type Story = StoryObj<typeof BackArrow>;

export const Default: Story = {
  args: {
    redirectTo: 'Назад',
  },
};