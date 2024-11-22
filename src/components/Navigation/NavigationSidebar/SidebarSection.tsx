import React, { useContext } from "react";
import { SidebarSectionProps } from "./types";
import { SidebarContext } from "./SidebarContextProvider";
import { cn } from "../../../utils";
import { motion, AnimatePresence } from "framer-motion";
import { labelsAnimateVariants } from "./animate.configs";

const SidebarSection: React.FC<SidebarSectionProps> = (props: SidebarSectionProps) => {
    const ctx = useContext(SidebarContext);

    return (
        <div className="w-full">
            <AnimatePresence>
                {ctx?.expanded && (
                <motion.h5
                    variants={labelsAnimateVariants}
                    initial="collapsed"
                    animate="expanded"
                    exit="collapsed"
                    className="uppercase text-[10px] font-semibold tracking-widest text-gray-500 px-3 mt-2"
                >
                    {props.title}
                </motion.h5>)}
            </AnimatePresence>
            <div className="w-full">
                {/**
                 * Children here represents the navigation menu items that will be available under this section
                 */}
                {props.children}
            </div>
        </div>
    )
}

export default SidebarSection;