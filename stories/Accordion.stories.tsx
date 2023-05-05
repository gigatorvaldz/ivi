import type { Meta, StoryObj } from '@storybook/react';
import Accordion from '../UI/Accordion';
import { RiMessage2Line } from 'react-icons/ri';
import SupportService from '../UI/SupportService';

const meta: Meta<typeof Accordion> = {
  title: 'UI/Accordion',
  component: Accordion,
  argTypes: {
    children: {
      control: 'disabled',
    },
    icon: {
      control: 'disabled',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Accordion>;

export const WithIcon: Story = {
  args: {
    children: <SupportService isMobile={true} />,
    icon: <RiMessage2Line size={22} />,
    label: 'Служба поддержки',
  },
};

export const WithoutIcon: Story = {
  args: {
    children: <SupportService isMobile={true} />,
    label: 'Служба поддержки',
  },
};
