import React, { useContext } from "react";
import { cn } from "../../../utils";
import { motion } from "framer-motion";
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';
import { mainAnimateVariants } from "./animate.configs";
import SidebarHeader from "./SidebarHeader";
import { NavigationSidebarProps } from "./types";
import SidebarSection from "./SidebarSection";
import SidebarContextProvider, { SidebarContext } from "./SidebarContextProvider";
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import SidebarItem from "./SidebarItem";

const NavigationSidebar: React.FC<NavigationSidebarProps> = (props: NavigationSidebarProps) => {
    return (
        <SidebarContextProvider>
            <NavigationSidebarInclude {...props}/>
        </SidebarContextProvider>
    )
}

const NavigationSidebarInclude: React.FC<NavigationSidebarProps> = (props: NavigationSidebarProps) => {
    const ctx = useContext(SidebarContext);

    const toogleExpanded = () => {
        if(ctx) {
            ctx.setExpanded(exp => !exp);
        }
    }

    return (
        <motion.div 
            variants={mainAnimateVariants} 
            animate={ctx?.expanded? 'expanded' : 'collapsed'}
            className={cn("group h-dvh relative bg-white shadow flex flex-col", {
                "w-16": !ctx?.expanded,
                "w-60": ctx?.expanded
            })}
        >
            <button type="button" onClick={_e => toogleExpanded()} className={cn("absolute top-5 -right-3 z-10 h-6 w-6 bg-white rounded-full shadow hidden group-hover:block leading-none")}>
                {ctx?.expanded? <ChevronLeftIcon fontSize="small"/> : <ChevronRightIcon fontSize="small"/>}
            </button>
            {(!!props.renderHeader)? props.renderHeader(ctx?.expanded || false) :
                <SidebarHeader
                    title={props.headerTitle || "Kamvusoft"}
                    Logo={props.HeaderLogo || <InsertPhotoIcon fontSize="inherit"/>}/>}
            <div className="grow overflow-y-auto">
                <SidebarItem id="nav-home"
                    Icon={<HomeOutlinedIcon/>}
                    label="Home"
                    onClick={id => (console.log(id))}/>
                <SidebarSection title="Favorites">
                    <SidebarItem id="nav-community-1"
                        Icon={<HomeOutlinedIcon/>}
                        label="Lykem Promo 2013"
                        onClick={id => (console.log(id))}/>
                </SidebarSection>
            </div>
            {(!!props.renderFooter) && props.renderFooter(ctx?.expanded || false)}
        </motion.div>
    )
}

export default NavigationSidebar;