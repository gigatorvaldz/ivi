import type { Meta, StoryObj } from '@storybook/react';
import TabsList from '../UI/TabsList';

const meta: Meta<typeof TabsList> = {
  title: 'UI/TabsList',
  component: TabsList,
  argTypes: {
    items: {
      control: 'disabled',
    },
  },
};

export default meta;
type Story = StoryObj<typeof TabsList>;

export const Default: Story = {
  args: {
    items: [
      { title: 'Создатели', href: 'person' },
      { title: 'Комментарии', count: 7, href: 'comments' },
    ],
  },
};
