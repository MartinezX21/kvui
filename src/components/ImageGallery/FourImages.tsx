import React from "react";
import { FourImagesProps } from "./types";
import useImage from "../../hooks/useImage";
import ImageItem from "./ImageItem";

const FourImages: React.FC<FourImagesProps> = (props: FourImagesProps) => {
    const { loading: firstImageLoading, size: firstImageSize, objectUrl: firstImageObjectUrl } = useImage(props.firstImageUrl);
    const { loading: secondImageLoading, size: secondImageSize, objectUrl: secondImageObjectUrl } = useImage(props.secondImageUrl);
    const { loading: thirdImageLoading, size: thirdImageSize, objectUrl: thirdImageObjectUrl } = useImage(props.thirdImageUrl);
    const { loading: fourthImageLoading, size: fourthImageSize, objectUrl: fourthImageObjectUrl } = useImage(props.fourthImageUrl);

    const eachImageSize = (props.containerWidth - 8) / 2;
    const eachImageHeight = 175;

    return (
        <div className="grid grid-cols-2 grid-rows-2 gap-2">
            <div 
                className="w-full relative flex items-center justify-center rounded overflow-hidden cursor-pointer" 
                style={{width: eachImageSize}}
                onClick={_e => props.onImageClick(0)}
            >
                <ImageItem 
                    loading={firstImageLoading}
                    size={firstImageSize}
                    objectUrl={firstImageObjectUrl}
                    containerWidth={eachImageSize}
                    containerHeight={eachImageHeight}/>
            </div>
            <div 
                className="w-full relative flex items-center justify-center rounded overflow-hidden cursor-pointer" 
                style={{width: eachImageSize}}
                onClick={_e => props.onImageClick(1)}
            >
                <ImageItem 
                    loading={secondImageLoading}
                    size={secondImageSize}
                    objectUrl={secondImageObjectUrl}
                    containerWidth={eachImageSize}
                    containerHeight={eachImageHeight}/>
            </div>
            <div 
                className="w-full relative flex items-center justify-center rounded overflow-hidden cursor-pointer" 
                style={{width: eachImageSize}}
                onClick={_e => props.onImageClick(2)}
            >
                <ImageItem 
                    loading={thirdImageLoading}
                    size={thirdImageSize}
                    objectUrl={thirdImageObjectUrl}
                    containerWidth={eachImageSize}
                    containerHeight={eachImageHeight}/>
            </div>
            <div 
                className="w-full relative flex items-center justify-center rounded overflow-hidden cursor-pointer" 
                style={{width: eachImageSize}}
                onClick={_e => props.onImageClick(3)}
            >
                <ImageItem 
                    loading={fourthImageLoading}
                    size={fourthImageSize}
                    objectUrl={fourthImageObjectUrl}
                    containerWidth={eachImageSize}
                    containerHeight={eachImageHeight}/>
            </div>
        </div>
    )
}

export default FourImages;