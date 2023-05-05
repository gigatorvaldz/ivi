import type { Meta, StoryObj } from '@storybook/react';
import List from '../UI/List';

const meta: Meta<typeof List> = {
  title: 'UI/List',
  component: List,
  argTypes: {
    items: {
      control: 'disabled'
    }
  }
};

export default meta;
type Story = StoryObj<typeof List>;

export const Default: Story = {
  args: {
    items: [
      { title: 'О компании', href: 'https://corp.ivi.ru/' },
      { title: 'Вакансии', href: 'https://corp.ivi.ru/career/#career-vacancy-block' },
      { title: 'Программа бета-тестирования', href: 'https://www.ivi.ru/pages/beta/' },
      { title: 'Информация для партнёров', href: 'https://www.ivi.ru/info/partners' },
      { title: 'Размещение рекламы', href: 'https://corp.ivi.ru/advertisers/' },
      { title: 'Пользовательское соглашение', href: 'https://www.ivi.ru/info/agreement' },
      { title: 'Политика конфиденциальности', href: 'https://www.ivi.ru/info/confidential' },
      { title: 'Комплаенс', href: 'https://www.ivi.ru/info/goryachaya-liniya-komplaens' },
    ]
  }
};