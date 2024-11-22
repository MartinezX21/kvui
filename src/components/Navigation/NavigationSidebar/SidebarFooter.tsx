import React, { useContext } from "react";
import { SidebarFooterProps } from "./types";
import { motion, AnimatePresence } from "framer-motion";
import { labelsAnimateVariants } from "./animate.configs";
import { SidebarContext } from "./SidebarContextProvider";

const SidebarFooter: React.FC<SidebarFooterProps> = (props: SidebarFooterProps) => {
    const ctx = useContext(SidebarContext);

    return (
        <button type="button" className="shrink-0 h-16 w-100 p-3 bg-slate-50 flex items-center justify-center gap-2">
            {props.Icon}
            <AnimatePresence>
                {ctx?.expanded && (
                <motion.h5
                    variants={labelsAnimateVariants}
                    initial="collapsed"
                    animate="expanded"
                    exit="collapsed"
                    className="leading-relaxed"
                >
                    {props.label}
                </motion.h5>)}
            </AnimatePresence>
        </button>
    )
}

export default SidebarFooter;