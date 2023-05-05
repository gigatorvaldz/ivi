import type { Meta, StoryObj } from '@storybook/react';
import Message from '../UI/Message';

const meta: Meta<typeof Message> = {
  title: 'UI/Message',
  component: Message,
};

export default meta;
type Story = StoryObj<typeof Message>;

export const Default: Story = {
  args: {
    title: 'Lorem Ipsum',
    extra: 'Lorem Ipsum'
  },
};