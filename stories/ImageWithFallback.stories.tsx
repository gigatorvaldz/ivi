import type { Meta, StoryObj } from '@storybook/react';
import ImageWithFallback from '../UI/ImageWithFallback';

const meta: Meta<typeof ImageWithFallback> = {
  title: 'UI/ImageWithFallback',
  component: ImageWithFallback,
  argTypes: {
    src: {
      control: 'disabled',
    },
    width: {
      control: 'disabled',
    },
    height: {
      control: 'disabled',
    },
    fallback: {
      control: 'disabled',
    },
    alt: {
      control: 'disabled',
    },
    fill: {
      control: 'disabled',
    },
    loader: {
      control: 'disabled',
    },
    quality: {
      control: 'disabled',
    },
    priority: {
      control: 'disabled',
    },
    loading: {
      control: 'disabled',
    },
    blurDataURL: {
      control: 'disabled',
    },
    unoptimized: {
      control: 'disabled',
    },
    onLoadingComplete: {
      control: 'disabled',
    },
    layout: {
      control: 'disabled',
    },
    objectFit: {
      control: 'disabled',
    },
    objectPosition: {
      control: 'disabled',
    },
    lazyBoundary: {
      control: 'disabled',
    },
    lazyRoot: {
      control: 'disabled',
    },
  },
};

export default meta;
type Story = StoryObj<typeof ImageWithFallback>;

export const WithFallback: Story = {
  args: {
    src: '',
    width: 200,
    height: 100,
  },
};

export const WithoutFallback: Story = {
  args: {
    src: 'https://i.ibb.co/xhpjcPy/image.png',
    width: 100,
    height: 150,
  },
};
