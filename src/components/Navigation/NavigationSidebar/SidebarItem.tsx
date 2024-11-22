import React, { useContext, useMemo } from "react";
import { SidebarItemProps } from "./types";
import { SidebarContext } from "./SidebarContextProvider";
import { motion, AnimatePresence } from "framer-motion";
import { labelsAnimateVariants } from "./animate.configs";
import { cn } from "../../../utils";

const SidebarItem: React.FC<SidebarItemProps> = (props: SidebarItemProps) => {
    const ctx = useContext(SidebarContext);

    const isActive = useMemo(() => ctx?.activeItemId === props.id, [ctx?.activeItemId]);

    return (
        <div className="px-3 w-full">
            <button type="button" 
                className="w-full h-10 flex items-center rounded-sm"
                onClick={_ => props.onClick(props.id)}
            >
                <div className={cn("w-full flex items-center gap-2 flex-nowrap border-l-2 border-l-transparent ps-1 rounded-sm", {
                    "border-l-primary": isActive
                })}>
                    <p className="shrink-0 leading-none">{props.Icon}</p>
                    <AnimatePresence>
                        {ctx?.expanded && (
                        <motion.h5
                            variants={labelsAnimateVariants}
                            initial="collapsed"
                            animate="expanded"
                            exit="collapsed"
                            className="grow tracking-wide leading-relaxed text-base text-left line-clamp-1"
                        >
                            {props.label}
                        </motion.h5>)}
                    </AnimatePresence>
                </div>
            </button>
        </div>
    )
}

export default SidebarItem;