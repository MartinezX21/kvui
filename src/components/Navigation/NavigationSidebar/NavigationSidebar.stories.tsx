import type { Meta, StoryObj } from '@storybook/react';
import NavigationSidebar from '.';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SidebarFooter from './SidebarFooter';
import SidebarSection from "./SidebarSection";
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import SidebarItem from "./SidebarItem";
import ChatIcon from '@mui/icons-material/Chat';
import SwitchAccountIcon from '@mui/icons-material/SwitchAccount';
import GroupsIcon from '@mui/icons-material/Groups';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Example/NavigationSidebar',
  component: NavigationSidebar,
  tags: ['autodocs'],
  args: {
    headerTitle: "Lintello",
    defaultActiveItemId: "nav-home",
    children: (
      <>
        <SidebarSection title="Feeds" separator>
          <SidebarItem id="nav-home"
            Icon={<HomeOutlinedIcon/>}
            label="Home"
            onClick={id => (console.log(id))}/>
          <SidebarItem id="storyline"
            Icon={<SwitchAccountIcon/>}
            label="My Storyline"
            onClick={id => (console.log(id))}/>
          <SidebarItem id="chat"
            Icon={<ChatIcon/>}
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
            Icon={<GroupsIcon/>}
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
    renderFooter: (_expanded: boolean) => (
      <SidebarFooter
        label="Account"
        Icon={<AccountCircleIcon/>}/>
    )
  },
};