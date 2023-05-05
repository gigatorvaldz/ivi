import type { Meta, StoryObj } from '@storybook/react';
import TVCardList from '../UI/TVCardList';
import image from '/assets/header/TVSmallCard.jpg';

const meta: Meta<typeof TVCardList> = {
  title: 'UI/TVCardList',
  component: TVCardList,
  argTypes: {
    items: {
      control: 'disabled',
    },
  },
};

export default meta;
type Story = StoryObj<typeof TVCardList>;

export const Default: Story = {
  args: {
    title: 'Lorem Ipsum',
    items: [
      { src: image, href: '/1' },
      { src: image, href: '/2' },
      { src: image, href: '/3' },
      { src: image, href: '/4' },
      { src: image, href: '/5' },
      { src: image, href: '/6' },
      { src: image, href: '/7' },
      { src: image, href: '/8' },
      { src: image, href: '/9' },
    ],
  },
};
