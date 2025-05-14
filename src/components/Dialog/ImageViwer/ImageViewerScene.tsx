import React, { useEffect, useState } from "react";
import { ImageViewerSceneProps } from "./types";
import useImage from "../../../hooks/useImage";
import { AnimatePresence, motion, useMotionValue, Variants } from "framer-motion";
import { cn } from "../../../utils";

const ImageViewerScene: React.FC<ImageViewerSceneProps> = (props: ImageViewerSceneProps) => {
    const { loading, size, objectUrl } = useImage(props.imageUrl);
    const [ dragging, setDragging ] = useState(false);
    const scale = useMotionValue(1);

    const handleDrag = (start: boolean, end: boolean) => {
        if(start) {
            setDragging(true);
        } 
        else if(end) {
            setDragging(false)
        }
    }

    useEffect(() => {
        scale.set(props.scale);
    }, [props.scale])

    if(loading) {
        // to be improved latter
        return null;
    } else {
        return (
            <AnimatePresence>
                {props.visible &&
                <motion.div 
                    className={"absolute left-0 top-0 w-full h-full flex justify-center items-center"} 
                    style={{ scale }}
                >
                    <motion.img
                        variants={animateVariants}
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                        src={objectUrl} 
                        alt="" 
                        className={cn({
                            "cursor-grab": !dragging,
                            "cursor-grabbing": dragging
                        })}
                        style={(size.height > size.height)? { width: '100%'} : { height: '100%'}}
                        drag
                        dragSnapToOrigin={scale.get() <= 1}
                        onDragStart={(_e, _i) => handleDrag(true, false)}
                        onDragEnd={(_e, _i) => handleDrag(false, true)}/>    
                </motion.div>}
            </AnimatePresence>
        )
    }
}

const animateVariants: Variants = {
    visible: {
        opacity: 1,
        transition: {
            ease: 'linear',
            duration: 0.3
        }
    },
    hidden: {
        opacity: 0,
        transition: {
            duration: 0
        }
    }
}

export default ImageViewerScene;