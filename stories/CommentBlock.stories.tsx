import type { Meta, StoryObj } from '@storybook/react';
import CommentBlock from '../UI/CommentBlock';

const meta: Meta<typeof CommentBlock> = {
  title: 'UI/CommentBlock',
  component: CommentBlock,
  argTypes: {
    
  }
};

export default meta;
type Story = StoryObj<typeof CommentBlock>;

export const Default: Story = {
  args: {
    title: 'Lorem',
    content: 'Lorem Ipsum',
    rating: 2,
  },
};