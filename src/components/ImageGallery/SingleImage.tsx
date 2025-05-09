import React from "react";
import { SingleImageProps } from "./types";
import useImage from "../../hooks/useImage";
import ImageItem from "./ImageItem";

const SingleImage: React.FC<SingleImageProps> = (props: SingleImageProps) => {
    const { loading, size, objectUrl } = useImage(props.imageUrl);

    return (
        <div className="w-100 relative flex items-center justify-center rounded overflow-hidden">
            <ImageItem 
                loading={loading}
                size={size}
                objectUrl={objectUrl}
                containerWidth={props.containerWidth}/>
        </div>
    )
}

export default SingleImage;