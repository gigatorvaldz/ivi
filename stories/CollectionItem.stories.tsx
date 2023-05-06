import type { Meta, StoryObj } from '@storybook/react';
import CollectionItem from '../UI/CollectionItem';
import collection from '/assets/mainPage/collections/image4.png'

const meta: Meta<typeof CollectionItem> = {
  title: 'UI/CollectionItem',
  component: CollectionItem,
  argTypes: {
    image: {
        control: 'disabled'
    },
    href: {
      control: 'disabled'
    },
  }
};

export default meta;
type Story = StoryObj<typeof CollectionItem>;

export const Default: Story = {
  args: {
    image: collection,
    title: 'Lorem Ipsum'
  },
};