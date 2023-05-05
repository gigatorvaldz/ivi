import type { Meta, StoryObj } from '@storybook/react';
import MarkableList from '../UI/MarkableList/MarkableList';
import { LINKS } from '../constants/footer';
import { FiAirplay } from 'react-icons/fi';

const meta: Meta<typeof MarkableList> = {
  title: 'UI/MarkableList',
  component: MarkableList,
  argTypes: {
    queryType: {
      options: ['genre', 'country', 'year']
    },
    Mark: {
        control: 'disabled'
    },
    items: {
        control: 'disabled'
    }
  },
};

export default meta;
type Story = StoryObj<typeof MarkableList>;

export const WithoutText: Story = {
  args: {
    items: LINKS[0],
    Mark: FiAirplay,
    queryType: 'genre',
    columns: 1
  },
};

