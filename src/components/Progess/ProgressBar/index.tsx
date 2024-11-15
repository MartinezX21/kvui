import React, { useMemo } from "react";
import { ProgressBarProps } from "./types";
import { motion } from "framer-motion";
import { cn, colors } from "../../../utils";

const ProgressBar: React.FC<ProgressBarProps> = (props: ProgressBarProps) => {

    const barColor = useMemo(() => {
        return props.color || colors['info']
    }, [props.color]);
    
    return (
        <div className={cn(`w-full rounded-full h-2`, {
            'h-1': props.size === "small",
            'h-3': props.size === "large",
        })} style={{backgroundColor: `color(from ${barColor} srgb r g b / 0.15)`}}>
            <motion.div layout
                className="h-full rounded-full" 
                style={{
                    width: props.progress,
                    backgroundColor: barColor
                }}></motion.div>
        </div>
    )
}

export default ProgressBar;