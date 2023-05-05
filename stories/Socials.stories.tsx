import type { Meta, StoryObj } from '@storybook/react';
import Socials from '../UI/Socials';

const meta: Meta<typeof Socials> = {
  title: 'UI/Socials',
  component: Socials,
};

export default meta;
type Story = StoryObj<typeof Socials>;

export const Default: Story = {
  parameters: {
    controls: { hideNoControlsWarning: true },
  },
};