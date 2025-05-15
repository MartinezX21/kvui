import React from "react";
import { ImageItemProps } from "./types";
import Spinner from "../Progess/Spinner";

const ImageItem: React.FC<ImageItemProps> = (props: ImageItemProps) => {

    if(props.loading) {
        return (
            <div className="w-full flex justify-center items-center" style={{height: props.containerHeight}}>
                <Spinner size="medium"/>
            </div>
        )
    }
    else {
        return (
            <img 
                src={props.objectUrl} 
                alt="" 
                style={{width: props.containerWidth, height: props.containerHeight}}
                className="object-cover"/>
        )
    }
}

export default ImageItem;