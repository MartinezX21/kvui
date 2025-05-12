import React, { useCallback } from "react";
import { ImageViewerSceneProps } from "./types";
import useImage from "../../../hooks/useImage";
import { AnimatePresence, motion, Variants } from "framer-motion";

const ImageViewerScene: React.FC<ImageViewerSceneProps> = (props: ImageViewerSceneProps) => {
    const { loading, size, objectUrl } = useImage(props.imageUrl);

    const imageStyles = useCallback(() => {
        let styles: React.CSSProperties;
        if(size.height > size.height) {
            styles = { width: '100%'}
        } else {
            styles = { height: '100%'}
        }
        return styles;
    }, [loading])

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

    if(loading) {
        // to be improved latter
        return null;
    } else {
        return (
            <AnimatePresence>
                {props.visible &&
                <motion.img
                    variants={animateVariants}
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    src={objectUrl} 
                    alt="" 
                    style={imageStyles()}/>}
            </AnimatePresence>
        )
    }
}

export default ImageViewerScene;