import type { Meta, StoryObj } from '@storybook/react';
import LanguageSwitcher from '../UI/LanguageSwitcher';

const meta: Meta<typeof LanguageSwitcher> = {
  title: 'UI/LanguageSwitcher',
  component: LanguageSwitcher,
};

export default meta;
type Story = StoryObj<typeof LanguageSwitcher>;

export const Default: Story = {
  parameters: {
    controls: { hideNoControlsWarning: true },
  },
};