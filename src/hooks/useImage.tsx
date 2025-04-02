import { useState, useEffect } from 'react';

interface ImageSize {
    width: number;
    height: number;
}

const useImage = (imageUrl: string) => {
    const [loading, setLoading] = useState(true);
    const [size, setSize] = useState<ImageSize>({ width: 0, height: 0 });
    const [objectUrl, setObjectUrl] = useState<string | undefined>();

    useEffect(() => {
        const img = new Image();
        img.onload = () => {
            setSize({ width: img.width, height: img.height });
            setObjectUrl(imageUrl);
            setLoading(false);
        };
        img.src = imageUrl;

        return () => {
            // revoke the object URL to save resources
            if (objectUrl) {
                URL.revokeObjectURL(objectUrl);
            }
        };
    }, [imageUrl]);

    return { loading, size, objectUrl };
};

export default useImage;