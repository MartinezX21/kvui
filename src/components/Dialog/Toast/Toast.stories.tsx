import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import Toast from '.';
import { uuid } from '../../../utils';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Example/Toast',
  component: Toast,
  tags: ['autodocs'],
  args: {
    id: uuid(),
    onClose: fn()
  }
} satisfies Meta<typeof Toast>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: 'Lorem ipsum dolor sit amet.',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    valign: 'bottom',
    halign: 'left',
    visible: true
  },
};

export const TopRight: Story = {
  args: {
    title: 'Lorem ipsum dolor sit amet.',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    valign: 'top',
    halign: 'right',
    visible: true
  },
};

export const HugeDescription: Story = {
  args: {
    title: 'Lorem ipsum dolor sit amet.',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt expedita illo enim, consequuntur mollitia perspiciatis fugit sequi non culpa? Inventore, modi ipsa.',
    valign: 'bottom',
    halign: 'right',
    visible: true
  }
};

export const WithActions: Story = {
  args: {
    title: 'Lorem ipsum dolor sit amet.',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt expedita illo enim, consequuntur mollitia perspiciatis fugit sequi non culpa? Inventore, modi ipsa.',
    valign: 'bottom',
    halign: 'right',
    visible: true,
    actions: [
      {
        id: 'cancel',
        command: "Cancel"
      },
      {
        id: 'open',
        command: 'Open'
      }
    ]
  },
};
