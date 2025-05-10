import React from "react";
import { ThreeImagesProps } from "./types";
import useImage from "../../hooks/useImage";
import ImageItem from "./ImageItem";

const ThreeImages: React.FC<ThreeImagesProps> = (props: ThreeImagesProps) => {
    const { loading: firstImageLoading, size: firstImageSize, objectUrl: firstImageObjectUrl } = useImage(props.firstImageUrl);
    const { loading: secondImageLoading, size: secondImageSize, objectUrl: secondImageObjectUrl } = useImage(props.secondImageUrl);
    const { loading: thirdImageLoading, size: thirdImageSize, objectUrl: thirdImageObjectUrl } = useImage(props.thirdImageUrl);

    const eachImageWidth = (props.containerWidth - 8 * 2) / 3;
    const eachImageHeight = 175;

    return (
        <div className="grid grid-cols-3 gap-2">
            <div 
                className="w-full relative flex items-center justify-center rounded overflow-hidden cursor-pointer" 
                style={{width: eachImageWidth}}
                onClick={_e => props.onImageClick(0)}
            >
                <ImageItem 
                    loading={firstImageLoading}
                    size={firstImageSize}
                    objectUrl={firstImageObjectUrl}
                    containerWidth={eachImageWidth}
                    containerHeight={eachImageHeight}/>
            </div>
            <div 
                className="w-full relative flex items-center justify-center rounded overflow-hidden cursor-pointer" 
                style={{width: eachImageWidth}}
                onClick={_e => props.onImageClick(1)}
            >
                <ImageItem 
                    loading={secondImageLoading}
                    size={secondImageSize}
                    objectUrl={secondImageObjectUrl}
                    containerWidth={eachImageWidth}
                    containerHeight={eachImageHeight}/>
            </div>
            <div 
                className="w-full relative flex items-center justify-center rounded overflow-hidden cursor-pointer" 
                style={{width: eachImageWidth}}
                onClick={_e => props.onImageClick(2)}
            >
                <ImageItem 
                    loading={thirdImageLoading}
                    size={thirdImageSize}
                    objectUrl={thirdImageObjectUrl}
                    containerWidth={eachImageWidth}
                    containerHeight={eachImageHeight}/>
            </div>
        </div>
    )
}

export default ThreeImages;