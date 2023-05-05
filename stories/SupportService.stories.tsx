import type { Meta, StoryObj } from '@storybook/react';
import SupportService from '../UI/SupportService';

const meta: Meta<typeof SupportService> = {
  title: 'UI/SupportService',
  component: SupportService,
};

export default meta;
type Story = StoryObj<typeof SupportService>;

export const Desktop: Story = {
  args: {
    isMobile: false,
  },
};

export const Mobile: Story = {
  args: {
    isMobile: true,
  },
};
