import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import NavigationSidebar from '.';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SidebarFooter from './SidebarFooter';
import SidebarSection from "./SidebarSection";
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import SidebarItem from "./SidebarItem";
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';
import SwitchAccountOutlinedIcon from '@mui/icons-material/SwitchAccountOutlined';
import GroupsOutlinedIcon from '@mui/icons-material/GroupsOutlined';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Example/NavigationSidebar',
  component: NavigationSidebar,
  tags: ['autodocs'],
  args: {
    headerTitle: "Lintello",
    defaultActiveItemId: "nav-home",
    isDrawerVisible: false,
    onCloseDrawer: () => fn(),
    children: (
      <>
        <SidebarSection title="Feeds" separator>
          <SidebarItem id="nav-home"
            Icon={<HomeOutlinedIcon/>}
            label="Home"
            onClick={id => (console.log(id))}/>
          <SidebarItem id="storyline"
            Icon={<SwitchAccountOutlinedIcon/>}
            label="My Storyline"
            onClick={id => (console.log(id))}/>
          <SidebarItem id="chat"
            Icon={<ChatOutlinedIcon/>}
            label="Chat"
            badge='3'
            onClick={id => (console.log(id))}/>
        </SidebarSection>
        <SidebarSection title="Communities">
          <SidebarItem id="community-favorites"
            Icon={<FavoriteBorderIcon/>}
            label="Favorites"
            onClick={id => (console.log(id))}/>
          <SidebarItem id="community-discovery"
            Icon={<GroupsOutlinedIcon/>}
            label="Discovery"
            onClick={id => (console.log(id))}/>
        </SidebarSection>
      </>
    )
  }
} satisfies Meta<typeof NavigationSidebar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const WithFooter: Story = {
  args: {
    renderFooter: () => (
      <SidebarFooter
        id='nav-footer'
        label="Account"
        Icon={<AccountCircleIcon/>}
        onClick={_id => fn()}/>
    )
  },
};