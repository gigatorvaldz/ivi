import type { Meta, StoryObj } from '@storybook/react';
import Slider from '../UI/Slider';

const meta: Meta<typeof Slider> = {
  title: 'UI/Slider',
  component: Slider,
  argTypes: {
    min: {
      control: 'number',
    },
    max: {
      control: 'number',
    },
    handleChange: {
      control: 'disabled',
    },
    description: {
      control: 'string',
    },
    step: {
      control: 'number',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Slider>;

export const Default: Story = {
  args: {
    min: 1,
    max: 1000,
    value: 50,
    description: 'lorem ipsum',
    step: 2,
  },
};
