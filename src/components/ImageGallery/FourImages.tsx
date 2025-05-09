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

    return (
        <div className="grid grid-cols-2 grid-rows-2 gap-2">
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
            <div className="w-100 relative flex items-center justify-center rounded overflow-hidden" style={{width: eachImageSize}}>
                <ImageItem 
                    loading={fourthImageLoading}
                    size={fourthImageSize}
                    objectUrl={fourthImageObjectUrl}
                    containerWidth={eachImageSize}/>
            </div>
        </div>
    )
}

export default FourImages;