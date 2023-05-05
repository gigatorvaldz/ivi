import type { Meta, StoryObj } from '@storybook/react';
import GenreTag from '../UI/GenreTag';
import { FaAddressBook } from 'react-icons/fa';

const meta: Meta<typeof GenreTag> = {
  title: 'UI/GenreTag',
  component: GenreTag,
  argTypes: {
    Icon: {
      control: 'disabled',
    },
    outlined: {
      control: 'boolean',
    },
    size: {
      options: ['small', 'large'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof GenreTag>;

export const SmallTagOutlined: Story = {
  args: {
    tag: 'Lorem',
    Icon: FaAddressBook,
    outlined: true,
    size: 'small'
  },
};

export const LargeTagOutlined: Story = {
  args: {
    tag: 'Lorem',
    Icon: FaAddressBook,
    outlined: true,
    size: 'large',
  },
};

export const SmallTag: Story = {
  args: {
    tag: 'Lorem',
    Icon: FaAddressBook,
    size: 'small'
  },
};

export const LargeTag: Story = {
  args: {
    tag: 'Lorem',
    Icon: FaAddressBook,
    size: 'large',
  },
};
