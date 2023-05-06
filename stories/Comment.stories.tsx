import type { Meta, StoryObj } from '@storybook/react';
import Comment from '../UI/Comment';

const meta: Meta<typeof Comment> = {
  title: 'UI/Comment',
  component: Comment,
  argTypes: {
    
  }
};

export default meta;
type Story = StoryObj<typeof Comment>;

export const Default: Story = {
  args: {
    title: 'Lorem',
    text: `Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem 
    Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem 
    Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem 
    Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem IpsumIpsum Lorem Ipsum 
    Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum 
    Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum 
    Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum`,
    rating: 2,
    children: [],
  },
};