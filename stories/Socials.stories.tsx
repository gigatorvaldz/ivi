import type { Meta, StoryObj } from '@storybook/react';
import Socials from '../UI/Socials';
import { socials } from '../constants/socials';

const meta: Meta<typeof Socials> = {
  title: 'UI/Socials',
  component: Socials,
  argTypes: {
    items: {
      control: 'disabled'
    }
  }
};

export default meta;
type Story = StoryObj<typeof Socials>;

export const Default: Story = {
  args: {
    items: socials
  }
};