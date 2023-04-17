import type { Meta, StoryObj } from '@storybook/react';
import Button from '../UI/Button/Button';
import ImageCarousel from '../UI/ImageCarousel';

const meta: Meta<typeof ImageCarousel> = {
  title: 'UI/Carousel',
  component: ImageCarousel,
  argTypes: {
    buttonsBackground: {
      control: 'boolean',
      description: 'Включить/выключить фон для кнопок',
    },
    buttonsOutside: {
      control: 'boolean',
      description: 'Кнопки снаружи/внутри карусели',
    },
    imagesListedPerSwap: {
      control: 'number',
      description: 'Количество прокручиваемых элементов',
    },
  },
};

export default meta;

type Story = StoryObj<typeof ImageCarousel>;

export const DifferentChildsWidth: Story = {
  args: {
    slides: [
      <Button primaryText="test0" />,
      <Button primaryText="test1232" />,
      <Button primaryText="test2112412" />,
      <Button primaryText="test3" />,
      <Button primaryText="test4646" />,
      <Button primaryText="test544" />,
    ],
    buttonsBackground: true,
  },
};

export const equalChildsWidth: Story = {
  args: {
    slides: [
      <Button primaryText="test0" />,
      <Button primaryText="test1" />,
      <Button primaryText="test2" />,
      <Button primaryText="test3" />,
      <Button primaryText="test4" />,
      <Button primaryText="test5" />,
      <Button primaryText="test6" />,
      <Button primaryText="test7" />,
    ],
    itemsWidthAreEqual: true,
    buttonsBackground: true,
  },
};

export const buttonsBackgroundOn: Story = {
  args: {
    slides: [
      <Button primaryText="test0" />,
      <Button primaryText="test1" />,
      <Button primaryText="test2" />,
      <Button primaryText="test3" />,
      <Button primaryText="test4" />,
      <Button primaryText="test5" />,
      <Button primaryText="test6" />,
      <Button primaryText="test7" />,
    ],
    buttonsBackground: true,
  },
};

export const buttonsBackgroundOff: Story = {
  args: {
    slides: [
      <Button primaryText="test0" />,
      <Button primaryText="test1" />,
      <Button primaryText="test2" />,
      <Button primaryText="test3" />,
      <Button primaryText="test4" />,
      <Button primaryText="test5" />,
      <Button primaryText="test6" />,
      <Button primaryText="test7" />,
    ],
    buttonsBackground: false,
  },
};

export const buttonsOutsideOn: Story = {
  args: {
    slides: [
      <Button primaryText="test0" />,
      <Button primaryText="test1" />,
      <Button primaryText="test2" />,
      <Button primaryText="test3" />,
      <Button primaryText="test4" />,
      <Button primaryText="test5" />,
      <Button primaryText="test6" />,
      <Button primaryText="test7" />,
    ],
    buttonsOutside: true,
    buttonsBackground: true,
  },
};

export const buttonsOutsideOff: Story = {
  args: {
    slides: [
      <Button primaryText="test0" />,
      <Button primaryText="test1" />,
      <Button primaryText="test2" />,
      <Button primaryText="test3" />,
      <Button primaryText="test4" />,
      <Button primaryText="test5" />,
      <Button primaryText="test6" />,
      <Button primaryText="test7" />,
    ],
    buttonsOutside: false,
    buttonsBackground: true,
  },
};

export const imagesListedPerSwap3: Story = {
  args: {
    slides: [
      <Button primaryText="test0" />,
      <Button primaryText="test1" />,
      <Button primaryText="test2" />,
      <Button primaryText="test3" />,
      <Button primaryText="test4" />,
      <Button primaryText="test5" />,
      <Button primaryText="test6" />,
      <Button primaryText="test7" />,
    ],
    buttonsBackground: true,
    imagesListedPerSwap: 3,
    itemsWidthAreEqual: true,
  },
};
