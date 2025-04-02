import React, { useMemo } from "react";
import { ImageItemProps } from "./types";
import { MAX_IMG_HEIGHT } from "../../utils";

const ImageItem: React.FC<ImageItemProps> = (props: ImageItemProps) => {
    const imageStyles = () => {
        let styles: React.CSSProperties;
        if(props.size.width > props.size.height) {
            if(props.size.width > props.containerWidth) {
                styles = {
                    width: props.containerWidth
                }
            } else {
                styles = {
                    width: props.size.width
                }
            }
        } else {
            const MAX_H = props.containerHeight || MAX_IMG_HEIGHT;
            if(props.size.height > MAX_H) {
                styles = {
                    height: MAX_H
                }
            } else {
                styles = {
                    height: props.size.height
                }
            }
        }
        return styles;
    }

    return (
        <>
            <div 
                className="absolute top-0 right-0 bottom-0 left-0 -z-20 bg-cover bg-center" 
                style={{backgroundImage: `url(${props.objectUrl})`}}
            >
                <div className="absolute top-0 right-0 bottom-0 left-0 -z-10 bg-black opacity-80">
                    {/* backgound */}
                </div>
            </div>
            <img src={props.objectUrl} alt="" style={imageStyles()}/>
        </>
    )
}

export default ImageItem;