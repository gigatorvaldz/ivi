import type { Meta, StoryObj } from '@storybook/react';
import TVCard from '../UI/TVCard';
import image from '/assets/header/TVSmallCard.jpg';

const meta: Meta<typeof TVCard> = {
  title: 'UI/TVCard',
  component: TVCard,
  argTypes: {
    src: {
      control: 'disabled',
    },
    href: {
      control: 'disabled',
    },
    styling: {
      options: ['default', 'flex'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof TVCard>;

export const DefaultWidth: Story = {
  args: {
    src: image,
    href: '/',
    styling: 'default',
  },
};

export const FlexStyling: Story = {
  args: {
    src: image,
    href: '/',
    styling: 'flex',
  },
};
