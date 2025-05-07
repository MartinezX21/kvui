import React from "react";
import { ImageGalleryProps } from "./types";
import SingleImage from "./SingleImage";
import { Variants } from "framer-motion";

const ImageGallery: React.FC<ImageGalleryProps> = (props: ImageGalleryProps) => {
    
    const enterLeave: Variants = {
        enter: {
            opacity: 1
        },
        leave: {
            opacity: 0
        }
    }

    return (
        <div className="overflow-hidden" style={{width: props.containerWidth}}>
            {(props.images.length >= 1)?
                <SingleImage 
                    imageUrl={props.images[0]} 
                    containerWidth={props.containerWidth} />
            : null}
        </div>
    )
}

export default ImageGallery;