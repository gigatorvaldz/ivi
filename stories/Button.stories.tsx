import { FiMail } from 'react-icons/fi';
import type { Meta, StoryObj } from '@storybook/react';
import Button from '../UI/Button';

const meta: Meta<typeof Button> = {
  title: 'UI/Button',
  component: Button,
  argTypes: {
    icon: {
      control: 'disabled',
    },
    preamble: {
      control: 'disabled',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const PrimaryText: Story = {
  args: {
    primaryText: 'Lorem ipsum',
  },
};

export const IconAndText: Story = {
  args: {
    primaryText: 'Lorem ipsum',
    icon: <FiMail />,
  },
};

export const Icon: Story = {
  args: {
    icon: <FiMail />,
  },
};

export const AllProps: Story = {
  args: {
    primaryText: 'Lorem ipsum',
    preamble: 'Lorem',
    icon: <FiMail />,
  },
};
