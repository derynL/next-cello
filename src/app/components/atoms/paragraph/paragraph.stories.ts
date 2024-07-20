import type { Meta, StoryObj } from '@storybook/react';
import { Paragraph } from './paragraph';

const meta: Meta<typeof Paragraph> = {
  component: Paragraph,
};

export default meta;

type Story = StoryObj<typeof Paragraph>;

export const Primary: Story = {
  args: {
    content: 'This is a paragraph full of fascinating information.',
  },
};

export const MultipleParagraphs: Story = {
  args: {
    content: [
      'This is the first paragraph.',
      'This is the second paragraph.',
      'This is the third and final paragraph.',
    ],
  },
};
