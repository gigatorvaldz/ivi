import type { Meta, StoryObj } from '@storybook/react';
import BannerSlide from '../UI/BannerSlide';
import back1 from '/assets/Banner/back1.png';
import title1 from '/assets/Banner/title1.png';

const meta: Meta<typeof BannerSlide> = {
  title: 'UI/BannerSlide',
  component: BannerSlide,
  argTypes: {
    backgroundImage: {
        control: 'disabled'
    },
    title: {
        control: 'disabled'
    },
  }
};

export default meta;
type Story = StoryObj<typeof BannerSlide>;

export const Default: Story = {
  args: {
    backgroundImage: back1,
    title: title1,
    href: '123',
    buttonText: 'Смотреть по подписке',
    info: 'Серхио шпионит за жильцами дома, куда он случайно попал. Непредсказуемая испанская драма',
  },
};