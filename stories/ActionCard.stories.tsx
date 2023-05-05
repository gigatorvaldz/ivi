import type { Meta, StoryObj } from '@storybook/react';
import ActionCard from '../UI/ActionCard';
import { FaAd } from 'react-icons/fa';

const meta: Meta<typeof ActionCard> = {
  title: 'UI/ActionCard',
  component: ActionCard,
  argTypes: {
    icon: {
      control: 'disabled',
    },
    href: {
      control: 'disabled',
    },
    styling: {
      options: ['default', 'mobile'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof ActionCard>;

export const AllProps: Story = {
  args: {
    active: true,
    icon: <FaAd />,
    label: 'Lorem Ipsum',
    description: 'Lorem Ipsum',
    href: '',
    styling: 'default',
  },
};

export const IsNotActive: Story = {
  args: {
    active: false,
    icon: <FaAd />,
    label: 'Lorem Ipsum',
    description: 'Lorem Ipsum',
    href: '',
    styling: 'default',
  },
};

export const WithoutDescription: Story = {
  args: {
    active: false,
    icon: <FaAd />,
    label: 'Lorem Ipsum',
    href: '',
    styling: 'default',
  },
};

export const ActiveWithoutDescription: Story = {
  args: {
    active: true,
    icon: <FaAd />,
    label: 'Lorem Ipsum',
    href: '',
    styling: 'mobile',
  },
};

export const MobileAllProps: Story = {
    args: {
      active: true,
      icon: <FaAd />,
      label: 'Lorem Ipsum',
      description: 'Lorem Ipsum',
      href: '',
      styling: 'mobile',
    },
  };
  
  export const MobileIsNotActive: Story = {
    args: {
      active: false,
      icon: <FaAd />,
      label: 'Lorem Ipsum',
      description: 'Lorem Ipsum',
      href: '',
      styling: 'mobile',
    },
  };
  
  export const MobileWithoutDescription: Story = {
    args: {
      active: false,
      icon: <FaAd />,
      label: 'Lorem Ipsum',
      href: '',
      styling: 'mobile',
    },
  };
  
  export const MobileActiveWithoutDescription: Story = {
    args: {
      active: true,
      icon: <FaAd />,
      label: 'Lorem Ipsum',
      href: '',
      styling: 'mobile',
    },
  };