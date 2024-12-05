import React, { useContext, useMemo } from "react";
import { SidebarItemProps } from "./types";
import { SidebarContext } from "./SidebarContextProvider";
import { motion, AnimatePresence } from "framer-motion";
import { labelsAnimateVariants } from "./animate.configs";
import { cn } from "../../../utils";

const SidebarItem: React.FC<SidebarItemProps> = (props: SidebarItemProps) => {
    const ctx = useContext(SidebarContext);

    const isActive = useMemo(() => ctx?.activeItemId === props.id, [ctx?.activeItemId]);

    const handleItemClicked = () => {
        ctx?.setActiveItemId(props.id);
        props.onClick(props.id);
    }

    return (
        <div className="px-3 w-full py-[2px]">
            <button type="button" 
                className={cn("w-full h-10 flex items-center rounded-md hover:bg-slate-100 tooltip ps-1 pe-2", {
                    "bg-slate-100": isActive,
                    "after:content-none": ctx?.expanded
                })}
                onClick={_ => handleItemClicked()}
            >
                {(!ctx?.expanded) && <span className="tooltip-text">{props.label}</span>}
                <div className={cn("h-5 rounded-full border-2 border-transparent", {
                    "border-primary": isActive
                })}></div>
                <div className="w-full flex items-center justify-center gap-1 flex-nowrap px-1">
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