import type { Meta, StoryObj } from '@storybook/react';
import TagButton from '../UI/TagButton';
import { BiAlarm } from 'react-icons/bi';

const meta: Meta<typeof TagButton> = {
  title: 'UI/TagButton',
  component: TagButton,
  argTypes: {
    callback: {
      control: 'disabled',
    },
    outlined: {
      control: 'boolean',
    },
    Icon: {
      control: 'disabled',
    },
  },
};

export default meta;
type Story = StoryObj<typeof TagButton>;

export const IconAndOutlined: Story = {
  args: {
    tag: 'Lorem',
    Icon: BiAlarm,
    outlined: true,
  },
};

export const IconOnly: Story = {
  args: {
    tag: 'Lorem',
    Icon: BiAlarm,
  },
};

export const OutlinedOnly: Story = {
  args: {
    tag: 'Lorem',
    outlined: true,
  },
};
