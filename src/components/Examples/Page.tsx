import React, { useState } from "react";
import MasterHeaderWithDrawer from "../Layout/MasterHeaderWithDrawer";
import NavigationSidebar from "../Navigation/NavigationSidebar";
import SidebarSection from "../Navigation/NavigationSidebar/SidebarSection";
import SidebarItem from "../Navigation/NavigationSidebar/SidebarItem";
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';
import SwitchAccountOutlinedIcon from '@mui/icons-material/SwitchAccountOutlined';
import GroupsOutlinedIcon from '@mui/icons-material/GroupsOutlined';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

const Page: React.FC<{}> = ({}) => {
    const [isDrawerVisible, setIsDrawerVisible] = useState(false);

    return (
        <MasterHeaderWithDrawer
            Sidebar={
                <NavigationSidebar 
                    headerTitle="Lintello" 
                    defaultActiveItemId="nav-home"
                    isDrawerVisible={isDrawerVisible}
                    onCloseDrawer={() => setIsDrawerVisible(false)}
                >
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
                </NavigationSidebar>
            }
            UserAvatar={null}
            title="Home"
            onOpenDrawer={() => setIsDrawerVisible(true)}
        >
            <h3>Hi there!</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio amet necessitatibus dolor laudantium illum quibusdam nam omnis saepe, nulla iusto cumque voluptatibus debitis. Asperiores aperiam repellat fugiat. Molestiae, nulla reprehenderit.</p>
        </MasterHeaderWithDrawer>
    )
}

export default Page;