import React from "react";
import { ImageGalleryProps } from "./types";
import SingleImage from "./SingleImage";

const ImageGallery: React.FC<ImageGalleryProps> = (props: ImageGalleryProps) => {
    
    return (
        <div style={{width: props.containerWidth}}>
            {(props.images.length >= 1)?
                <SingleImage 
                    imageUrl={props.images[0]} 
                    containerWidth={props.containerWidth} />
            : null}
        </div>
    )
}

export default ImageGallery;