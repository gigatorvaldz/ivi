import type { Meta, StoryObj } from '@storybook/react';
import Avatar from '../UI/Avatar';

const meta: Meta<typeof Avatar> = {
  title: 'UI/Avatar',
  component: Avatar,
};

export default meta;
type Story = StoryObj<typeof Avatar>;

export const AvatarWithName: Story = {
  args: {
    author: 'Lorem',
  },
};

export const AvatarWithoutName: Story = {
  args: {},
};
