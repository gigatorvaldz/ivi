import type { Meta, StoryObj } from '@storybook/react';
import RatingMobile from '../UI/RatingMobile';

const meta: Meta<typeof RatingMobile> = {
  title: 'UI/RatingMobile',
  component: RatingMobile,
};

export default meta;
type Story = StoryObj<typeof RatingMobile>;

export const Default: Story = {
  args: {
     rating: 'Lorem',
     ratesCount: 2
  },  
};