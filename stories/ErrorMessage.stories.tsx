import type { Meta, StoryObj } from '@storybook/react';
import ErrorMessage from '../UI/ErrorMessage';

const meta: Meta<typeof ErrorMessage> = {
  title: 'UI/ErrorMessage',
  component: ErrorMessage,
};

export default meta;
type Story = StoryObj<typeof ErrorMessage>;

export const Default: Story = {
  args: {
    message: 'Lorem Ipsum'
  },
};