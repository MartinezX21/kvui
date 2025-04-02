export type ImageGalleryProps = {
    images: string[],
    containerWidth: number
}

export type ImageItemProps = {
    containerWidth: number,
    containerHeight?: number,
    objectUrl: string | undefined,
    size: {
        height: number,
        width: number
    }
    loading: boolean
}

export type SingleImageProps = {
    imageUrl: string,
    containerWidth: number
}

export type TwoImagesProps = {
    firstImageUrl: string,
    secondImageUrl: string,
    containerWidth: number
}

export type ThreeImagesProps = TwoImagesProps & {
    thirdImageUrl: string
}