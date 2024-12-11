import React, { useContext, useEffect } from "react";
import { cn } from "../../../utils";
import { motion } from "framer-motion";
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';
import { mainAnimateVariants } from "./animate.configs";
import SidebarHeader from "./SidebarHeader";
import { NavigationSidebarProps } from "./types";
import SidebarContextProvider, { SidebarContext } from "./SidebarContextProvider";

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

    useEffect(() => {
        ctx?.setActiveItemId(props.defaultActiveItemId)
    }, [])

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
            {(!!props.renderHeader)? props.renderHeader() :
                <SidebarHeader
                    title={props.headerTitle || "Kamvusoft"}
                    Logo={props.HeaderLogo || <InsertPhotoIcon fontSize="inherit"/>}/>}
            <div className="grow overflow-visible pt-1">
                {props.children}
            </div>
            {(!!props.renderFooter) && props.renderFooter()}
        </motion.div>
    )
}

export default NavigationSidebar;