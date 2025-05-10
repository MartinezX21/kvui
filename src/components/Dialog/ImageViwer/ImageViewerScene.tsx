import React, { useCallback } from "react";
import { ImageViewerSceneProps } from "./types";
import useImage from "../../../hooks/useImage";

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

    return (
        <img 
            src={objectUrl} 
            alt="" 
            style={imageStyles()}/>
    )
}

export default ImageViewerScene;