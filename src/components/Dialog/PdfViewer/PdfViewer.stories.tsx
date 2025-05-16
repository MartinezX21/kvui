import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import PdfViewer from '.';
const pdfUrl = "/src/components/Dialog/PdfViewer/LettreDeRevision.pdf";
const meta = {
  title: 'Example/PdfViewer',
  component: PdfViewer,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  args: {
    visible: false,
    onClose: fn()
  },
} satisfies Meta<typeof PdfViewer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
    args: {
        pdfSrc: pdfUrl
    },
};