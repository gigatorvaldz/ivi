import type { Meta, StoryObj } from '@storybook/react';
import TeaserList from '../UI/TeaserList';
import lightning from '/assets/mainPage/lightning.svg';
import gift from '/assets/mainPage/gift.svg';

const meta: Meta<typeof TeaserList> = {
  title: 'UI/TeaserList',
  component: TeaserList,
  argTypes: {
    items: {
      control: 'disabled',
    },
  },
};

export default meta;
type Story = StoryObj<typeof TeaserList>;

export const Default: Story = {
  args: {
    items: [
      { text: '30 дней подписка за 1 ₽', icon: lightning },
      { text: 'Активировать сертификат', icon: gift },
    ],
  },
};
