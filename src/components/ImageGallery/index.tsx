import React, { useState } from "react";
import { createPortal } from 'react-dom';
import { ImageGalleryProps } from "./types";
import SingleImage from "./SingleImage";
import TwoImages from "./TwoImages";
import ThreeImages from "./ThreeImages";
import FourImages from "./FourImages";
import FiveAndMoreImages from "./FiveAndMoreImages";
import ImageViewer from "../Dialog/ImageViwer";

const ImageGallery: React.FC<ImageGalleryProps> = (props: ImageGalleryProps) => {
    const [viewerVisible, setViewerVisible] = useState(false);
    const [initialActiveIndex, setInitialActiveIndex] = useState(0);

    const handleImageClick = (index: number) => {
        setInitialActiveIndex(index);
        setViewerVisible(true);
    }

    const closeImageViewer = () => {
        setViewerVisible(false);
        setInitialActiveIndex(0);
    }

    return (
        <div style={{width: props.containerWidth}}>
            {(props.images.length >= 5)?
                <FiveAndMoreImages
                    firstImageUrl={props.images[0]} 
                    secondImageUrl={props.images[1]}
                    thirdImageUrl={props.images[2]}
                    fourthImageUrl={props.images[3]}
                    otherImagesCount={props.images.length - 4}
                    containerWidth={props.containerWidth}
                    onImageClick={handleImageClick} />
            :(props.images.length === 4)?
                <FourImages
                    firstImageUrl={props.images[0]} 
                    secondImageUrl={props.images[1]}
                    thirdImageUrl={props.images[2]}
                    fourthImageUrl={props.images[3]}
                    containerWidth={props.containerWidth}
                    onImageClick={handleImageClick} />
            :(props.images.length === 3)?
                <ThreeImages
                    firstImageUrl={props.images[0]} 
                    secondImageUrl={props.images[1]}
                    thirdImageUrl={props.images[2]}
                    containerWidth={props.containerWidth}
                    onImageClick={handleImageClick} />
            :(props.images.length === 2)?
                <TwoImages
                    firstImageUrl={props.images[0]} 
                    secondImageUrl={props.images[1]}
                    containerWidth={props.containerWidth}
                    onImageClick={handleImageClick} />
            :(props.images.length === 1)?
                <SingleImage 
                    imageUrl={props.images[0]} 
                    containerWidth={props.containerWidth}
                    onImageClick={handleImageClick} />
            : null}
            {viewerVisible && createPortal(
                <ImageViewer 
                    title="Images" 
                    images={props.images}
                    initialActiveIndex={initialActiveIndex}
                    onClose={closeImageViewer}/>, document.body
            )}
        </div>
    )
}

export default ImageGallery;