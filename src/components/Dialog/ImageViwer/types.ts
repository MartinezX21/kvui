export type ImageViewerProps = {
    visible: boolean;
    title: string;
    images: string[];
    initialActiveIndex?: number;
    onClose: () => void;
}

export type ImageViewerSceneProps = {
    imageUrl: string;
    visible: boolean;
    scale: number
}