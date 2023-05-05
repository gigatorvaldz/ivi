import type { Meta, StoryObj } from '@storybook/react';
import MedallionButton from '../UI/MedallionButton';

const meta: Meta<typeof MedallionButton> = {
  title: 'UI/MedallionButton',
  component: MedallionButton,
  argTypes: {
    src: {
      control: 'disabled',
    },
    text: {
        control: 'text',
    },
    caption: {
        control: 'text'
    }
  },
};

export default meta;
type Story = StoryObj<typeof MedallionButton>;

export const WithoutText: Story = {
  args: {
    caption: 'Рейтинг Кинопоиска',
    src: 'https://i.ibb.co/xhpjcPy/image.png',
  },
};

export const WithoutIcon: Story = {
  args: {
    text: '7.2',
    caption: 'Рейтинг Кинопоиска',
  },
};
