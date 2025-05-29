import type { Meta, StoryObj } from '@storybook/react';
import Page from './Page';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Example/Page',
  component: Page,
  tags: ['autodocs'],
  args: { }
} satisfies Meta<typeof Page>;

export default meta;
type Story = StoryObj<typeof meta>;

export const MainPage: Story = {
  args: { }
};