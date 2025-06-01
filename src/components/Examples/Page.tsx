import React, { useState } from "react";
import MasterHeaderWithDrawer from "../Layout/MasterHeaderWithDrawer";
import NavigationSidebar from "../Navigation/NavigationSidebar";
import SidebarSection from "../Navigation/NavigationSidebar/SidebarSection";
import SidebarItem from "../Navigation/NavigationSidebar/SidebarItem";
import InboxOutlinedIcon from '@mui/icons-material/InboxOutlined';
import PeopleOutlinedIcon from '@mui/icons-material/PeopleOutlined';
import SwitchAccountOutlinedIcon from '@mui/icons-material/SwitchAccountOutlined';
import GroupsOutlinedIcon from '@mui/icons-material/GroupsOutlined';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SidebarFooter from "../Navigation/NavigationSidebar/SidebarFooter";

const Page: React.FC<{}> = ({}) => {
    const [isDrawerVisible, setIsDrawerVisible] = useState(false);

    return (
        <MasterHeaderWithDrawer
            Sidebar={
                <NavigationSidebar 
                    headerTitle="Lintello" 
                    defaultActiveItemId="nav-inbox"
                    isDrawerVisible={isDrawerVisible}
                    onCloseDrawer={() => setIsDrawerVisible(false)}
                    renderFooter={() => (
                        <SidebarFooter
                            id='nav-footer'
                            label="Account"
                            Icon={<AccountCircleIcon/>}
                            onClick={id => console.log(id)}/>
                    )}
                >
                    <SidebarSection title="For You" separator>
                        <SidebarItem id="nav-inbox"
                            Icon={<InboxOutlinedIcon/>}
                            label="Inbox"
                            badge='3'
                            onClick={id => console.log(id)}/>
                        <SidebarItem id="storyline"
                            Icon={<SwitchAccountOutlinedIcon/>}
                            label="Storyline"
                            onClick={id => console.log(id)}/>
                        <SidebarItem id="favorites"
                            Icon={<FavoriteBorderIcon/>}
                            label="Favorites"
                            onClick={id => console.log(id)}/>
                    </SidebarSection>
                    <SidebarSection title="Explore">
                        <SidebarItem id="people"
                            Icon={<PeopleOutlinedIcon/>}
                            label="People"
                            onClick={id => console.log(id)}/>
                        <SidebarItem id="communities"
                            Icon={<GroupsOutlinedIcon/>}
                            label="Communities"
                            onClick={id => console.log(id)}/>
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