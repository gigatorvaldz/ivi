import type { Meta, StoryObj } from '@storybook/react';
import Stores from "../UI/Stores";

const meta: Meta<typeof Stores> = {
  title: 'UI/Stores',
  component: Stores,
};

export default meta;
type Story = StoryObj<typeof Stores>;

export const StoresOnMobile: Story = {
  args: {
    isMobile: true,
  },
};

export const StoresOnDesktop: Story = {
  args: {
    isMobile: false,
  },
};
