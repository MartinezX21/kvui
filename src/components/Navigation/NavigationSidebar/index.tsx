import React, { useContext, useEffect } from "react";
import { BREAK_POINT, cn } from "../../../utils";
import { motion } from "framer-motion";
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import InsertPhotoOutlinedIcon from '@mui/icons-material/InsertPhotoOutlined';
import { mainAnimateVariants } from "./animate.configs";
import SidebarHeader from "./SidebarHeader";
import { NavigationSidebarProps } from "./types";
import SidebarContextProvider, { SidebarContext } from "./SidebarContextProvider";
import useScreenSize from "../../../hooks/useScreenSize";

const NavigationSidebar: React.FC<NavigationSidebarProps> = (props: NavigationSidebarProps) => {
    return (
        <SidebarContextProvider>
            <NavigationSidebarInclude {...props}/>
        </SidebarContextProvider>
    )
}

const NavigationSidebarInclude: React.FC<NavigationSidebarProps> = (props: NavigationSidebarProps) => {
    const ctx = useContext(SidebarContext);
    const { width: screenWidth } = useScreenSize();
    const isLargeScreen = screenWidth >= BREAK_POINT.MD;

    const toogleExpanded = () => {
        if(ctx) {
            ctx.setExpanded(exp => !exp);
        }
    }

    const getSidebarAnimate = () => {
        if(isLargeScreen) {
            if(ctx?.expanded) {
                return 'expanded';
            } else {
                return 'collapsed';
            }
        } else {
            // -- small screen, always expanded
            if(props.isDrawerVisible) {
                return ['expanded', 'visible'];
            } else {
                return ['expanded', 'hidden'];
            }
        }
    }

    useEffect(() => {
        ctx?.setActiveItemId(props.defaultActiveItemId)
    }, [])

    useEffect(() => {
        if(!isLargeScreen) {
            // -- small screen, always expanded
            if(!ctx?.expanded) {
                toogleExpanded();
            }
        }
    }, [screenWidth])

    return (
        <>
            <motion.div 
                variants={mainAnimateVariants} 
                animate={getSidebarAnimate()}
                className="group shrink-0 h-screen absolute top-0 left-0 shadow-md shadow-white z-20 md:relative md:shadow md:z-0 bg-white flex flex-col"
            >
                <button type="button" onClick={_e => toogleExpanded()} className={cn("absolute top-5 -right-3 z-10 h-6 w-6 bg-white rounded-full shadow hidden md:group-hover:block leading-none")}>
                    {ctx?.expanded? <ChevronLeftIcon fontSize="small"/> : <ChevronRightIcon fontSize="small"/>}
                </button>
                <button type="button" onClick={_e => props.onCloseDrawer()} className={cn("group/close-btn absolute top-0 -right-16 z-20 h-16 w-16 hidden justify-center items-center text-white", {
                    "group-hover:flex": props.isDrawerVisible
                })}>
                    <motion.div className="group-hover/close-btn:-rotate-90 transition-transform">
                        <CloseOutlinedIcon fontSize="small"/>
                    </motion.div>
                </button>
                {(!!props.renderHeader)? props.renderHeader() :
                    <SidebarHeader
                        title={props.headerTitle || "Kamvusoft"}
                        Logo={props.HeaderLogo || <InsertPhotoOutlinedIcon fontSize="inherit"/>}/>}
                <div className="grow overflow-visible pt-1">
                    {props.children}
                </div>
                {(!!props.renderFooter) && props.renderFooter()}
            </motion.div>
            <div className={cn("fixed left-0 top-0 right-0 bottom-0 z-10 bg-black opacity-65", {
                "hidden": isLargeScreen || !props.isDrawerVisible,
                "block": !isLargeScreen && props.isDrawerVisible
            })}>
                {/* Sidebar backdrop - mobile */}
            </div>
        </>
    )
}

export default NavigationSidebar;