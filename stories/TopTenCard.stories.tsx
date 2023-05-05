import type { Meta, StoryFn } from '@storybook/react';
import TopTenCard from '../UI/TopTenCard';
import { ITopTenCard } from '../UI/TopTenCard';
import '../UI/TopTenCard/TopTenCard.module.scss';
import title1 from '/assets/topTen/title1.png';
import position1 from '/assets/topTen/position1.svg';
import poster1 from '/assets/topTen/poster1.png';

export default {
  title: 'UI/TopTenCard',
  component: TopTenCard,
  argTypes: {
    title: {
      control: 'disabled',
    },
    position: {
      control: 'disabled',
    },
    poster: {
      control: 'disabled',
    },
    href: { control: 'disabled' },
  },
} as Meta;

const Template: StoryFn<ITopTenCard> = (args) => <TopTenCard {...args} />;
export const Default = Template.bind({});

Default.args = {
  title: title1,
  position: [position1],
  poster: poster1,
  href: '/',
};
