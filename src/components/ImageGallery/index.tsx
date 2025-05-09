import React from "react";
import { ImageGalleryProps } from "./types";
import SingleImage from "./SingleImage";
import TwoImages from "./TwoImages";
import ThreeImages from "./ThreeImages";
import FourImages from "./FourImages";

const ImageGallery: React.FC<ImageGalleryProps> = (props: ImageGalleryProps) => {
    
        return (
        <div style={{width: props.containerWidth}}>
            {(props.images.length === 4)?
                <FourImages
                    firstImageUrl={props.images[0]} 
                    secondImageUrl={props.images[1]}
                    thirdImageUrl={props.images[2]}
                    fourthImageUrl={props.images[3]}
                    containerWidth={props.containerWidth} />
            :(props.images.length === 3)?
                <ThreeImages
                    firstImageUrl={props.images[0]} 
                    secondImageUrl={props.images[1]}
                    thirdImageUrl={props.images[2]}
                    containerWidth={props.containerWidth} />
            :(props.images.length === 2)?
                <TwoImages
                    firstImageUrl={props.images[0]} 
                    secondImageUrl={props.images[1]}
                    containerWidth={props.containerWidth} />
            :(props.images.length === 1)?
                <SingleImage 
                    imageUrl={props.images[0]} 
                    containerWidth={props.containerWidth} />
            : null}
        </div>
    )
}

export default ImageGallery;