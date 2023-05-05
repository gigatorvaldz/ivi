import type { Meta, StoryObj } from '@storybook/react';
import LikesCounter from '../UI/LikesCounter';

const meta: Meta<typeof LikesCounter> = {
  title: 'UI/LikesCounter',
  component: LikesCounter,
  argTypes: {
    rating: {
      control: 'number',
    },
  },
};

export default meta;
type Story = StoryObj<typeof LikesCounter>;

export const ZeroLikes: Story = {
  args: {
    rating: 0,
  },
};

export const PositiveLikes: Story = {
  args: {
    rating: 4,
  },
};

export const NegativeLikes: Story = {
  args: {
    rating: -5,
  },
};
