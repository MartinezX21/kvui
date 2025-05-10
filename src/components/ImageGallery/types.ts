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
    containerWidth: number,
    onImageClick: (index: number) => void
}

export type TwoImagesProps = {
    firstImageUrl: string,
    secondImageUrl: string,
    containerWidth: number,
    onImageClick: (index: number) => void
}

export type ThreeImagesProps = TwoImagesProps & {
    thirdImageUrl: string
}

export type FourImagesProps = ThreeImagesProps & {
    fourthImageUrl: string
}

export type FiveAndMoreImagesProps = FourImagesProps & {
    otherImagesCount: number
}