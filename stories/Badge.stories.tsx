import type { Meta, StoryObj } from '@storybook/react';
import Badge from '../UI/Badge';

const meta: Meta<typeof Badge> = {
  title: 'UI/Badge',
  component: Badge,
};

export default meta;
type Story = StoryObj<typeof Badge>;

export const Default: Story = {
  args: {
    name: 'Lorem Ipsum',
  },
};