import React from "react";
import { ThreeImagesProps } from "./types";
import useImage from "../../hooks/useImage";
import ImageItem from "./ImageItem";

const ThreeImages: React.FC<ThreeImagesProps> = (props: ThreeImagesProps) => {
    const { loading: firstImageLoading, size: firstImageSize, objectUrl: firstImageObjectUrl } = useImage(props.firstImageUrl);
    const { loading: secondImageLoading, size: secondImageSize, objectUrl: secondImageObjectUrl } = useImage(props.secondImageUrl);
    const { loading: thirdImageLoading, size: thirdImageSize, objectUrl: thirdImageObjectUrl } = useImage(props.thirdImageUrl);

    const eachImageSize = (props.containerWidth - 8 * 2) / 3;

    return (
        <div className="grid grid-cols-3 gap-2">
            <div className="w-100 relative flex items-center justify-center rounded overflow-hidden" style={{width: eachImageSize}}>
                <ImageItem 
                    loading={firstImageLoading}
                    size={firstImageSize}
                    objectUrl={firstImageObjectUrl}
                    containerWidth={eachImageSize}/>
            </div>
            <div className="w-100 relative flex items-center justify-center rounded overflow-hidden" style={{width: eachImageSize}}>
                <ImageItem 
                    loading={secondImageLoading}
                    size={secondImageSize}
                    objectUrl={secondImageObjectUrl}
                    containerWidth={eachImageSize}/>
            </div>
            <div className="w-100 relative flex items-center justify-center rounded overflow-hidden" style={{width: eachImageSize}}>
                <ImageItem 
                    loading={thirdImageLoading}
                    size={thirdImageSize}
                    objectUrl={thirdImageObjectUrl}
                    containerWidth={eachImageSize}/>
            </div>
        </div>
    )
}

export default ThreeImages;