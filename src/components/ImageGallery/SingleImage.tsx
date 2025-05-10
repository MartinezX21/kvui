import React from "react";
import { SingleImageProps } from "./types";
import useImage from "../../hooks/useImage";
import ImageItem from "./ImageItem";

const SingleImage: React.FC<SingleImageProps> = (props: SingleImageProps) => {
    const { loading, size, objectUrl } = useImage(props.imageUrl);

    return (
        <div 
            className="w-full relative flex items-center justify-center rounded overflow-hidden cursor-pointer"
            onClick={_e => props.onImageClick(0)}
        >
            <ImageItem 
                loading={loading}
                size={size}
                objectUrl={objectUrl}
                containerWidth={props.containerWidth}
                containerHeight={300}/>
        </div>
    )
}

export default SingleImage;