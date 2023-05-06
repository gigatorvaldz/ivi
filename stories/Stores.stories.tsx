import type { Meta, StoryObj } from '@storybook/react';
import Stores from '../UI/Stores';
import { stores } from '../constants/stores';

const meta: Meta<typeof Stores> = {
  title: 'UI/Stores',
  component: Stores,
  argTypes: {
    items: {
      control: 'disabled'
    }
  }
};

export default meta;
type Story = StoryObj<typeof Stores>;

export const StoresOnMobile: Story = {
  args: {
    isMobile: true,
    items: stores,
  },
};

export const StoresOnDesktop: Story = {
  args: {
    isMobile: false,
    items: stores
  },
};
