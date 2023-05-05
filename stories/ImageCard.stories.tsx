import type { Meta, StoryObj } from '@storybook/react';
import ImageCard from '../UI/ImageCard';

const meta: Meta<typeof ImageCard> = {
  title: 'UI/ImageCard',
  component: ImageCard,
  argTypes: {
    src: {
        control: 'disabled'
    }
  },
};

export default meta;
type Story = StoryObj<typeof ImageCard>;

export const Default: Story = {
  args: {
    src: 'https://i.ibb.co/xhpjcPy/image.png',
    alt: 'Lorem Ipsum'
  },
};

