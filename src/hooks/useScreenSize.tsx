import { useEffect, useState } from "react";

function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return {
        width, height
    }
}

const useScreenSize = () => {
    const [windowDim, setWindowDim] = useState(getWindowDimensions());

    useEffect(() => {
        const handleResize = () => {
            setWindowDim(getWindowDimensions());
        }
        //
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        }
    }, []);

    return windowDim;
}

export default useScreenSize;