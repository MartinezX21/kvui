import React from "react";
import { ImageItemProps } from "./types";

const ImageItem: React.FC<ImageItemProps> = (props: ImageItemProps) => {

    return (
        <img 
            src={props.objectUrl} 
            alt="" 
            style={{width: props.containerWidth, height: props.containerHeight}}
            className="object-cover"/>
    )
}

export default ImageItem;