import type { Meta, StoryObj } from '@storybook/react';
import NavigationSidebar from '.';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SidebarFooter from './SidebarFooter';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Example/NavigationSidebar',
  component: NavigationSidebar,
  tags: ['autodocs'],
  args: {
    headerTitle: "Lintello"
  }
} satisfies Meta<typeof NavigationSidebar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const WithFooter: Story = {
  args: {
    renderFooter: (_expanded: boolean) => (
      <SidebarFooter
        label="Account"
        Icon={<AccountCircleIcon/>}/>
    )
  },
};