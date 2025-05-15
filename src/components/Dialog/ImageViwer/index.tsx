import React, { useEffect, useState } from "react";
import { createPortal } from 'react-dom';
import { ImageViewerProps } from "./types";
import ImageViewerScene from "./ImageViewerScene";
import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import CloseIcon from '@mui/icons-material/Close';
import ZoomOutIcon from '@mui/icons-material/ZoomOut';
import ZoomInIcon from '@mui/icons-material/ZoomIn';
import ZoomInMapIcon from '@mui/icons-material/ZoomInMap';

const ImageViewer: React.FC<ImageViewerProps> = (props: ImageViewerProps) => {
    
    if(props.visible) {
        return createPortal(<ImageViewerInclude {...props}/>, document.body)
    }
    else {
        return null;
    }
}

const ImageViewerInclude: React.FC<ImageViewerProps> = (props: ImageViewerProps) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [scale, setScale] = useState(1);

    const previous = () => {
        setCurrentIndex(idx => idx - 1);
    }
    const next = () => {
        setCurrentIndex(idx => idx + 1);
    }
    const zoomIn = () => {
        setScale(prevScale => prevScale + 0.1);
    }
    const zoomOut = () => {
        setScale(prevScale => prevScale - 0.1);
    }

    useEffect(() => {
        if(props.initialActiveIndex !== undefined) {
            setCurrentIndex(props.initialActiveIndex);
        }
    }, [props.initialActiveIndex])

    return (
        <div className="fixed left-0 top-0 right-0 bottom-0 modal-stack-level overflow-auto">
            <div className="absolute left-0 top-0 right-0 bottom-0 bg-gray-900 backdrop-blur-md modal-backdrop-stack-level">
                {/* backdrop */}
            </div> 
            <div className="absolute left-0 top-0 right-0 bottom-0 modal-content-stack-level">
                <div className="w-full py-2 px-4 h-12 bg-white shadow-md text-gray-900 flex items-center gap-2">
                    <h6 className="flex items-center">
                        <InsertPhotoIcon fontSize="medium"/>
                        <p className="max-w-64 line-clamp-1">
                            <span className="leading-relaxed text-xl ps-2">{props.title}</span>
                        </p>
                    </h6>
                    <div className="grow"></div>
                    <button 
                        type="button" 
                        className="rounded-full w-8 h-8 text-gray-700 hover:bg-slate-100 hover:shadow"
                        onClick={_e => zoomOut()}
                    >
                        <ZoomOutIcon fontSize="small"/>
                    </button>
                    <button 
                        type="button" 
                        className="rounded-full w-8 h-8 text-gray-700 hover:bg-slate-100 hover:shadow"
                        onClick={_e => setScale(1)}
                    >
                        <ZoomInMapIcon fontSize="small"/>
                    </button>
                    <button 
                        type="button" 
                        className="rounded-full w-8 h-8 text-gray-700 hover:bg-slate-100 hover:shadow"
                        onClick={_e => zoomIn()}
                    >
                        <ZoomInIcon fontSize="small"/>
                    </button>
                    <button 
                        type="button" 
                        className="rounded-full w-8 h-8 text-gray-700 hover:bg-slate-100 hover:shadow"
                        onClick={_e => props.onClose()}
                    >
                        <CloseIcon fontSize="small"/>
                    </button>
                </div>
                <div className="w-full relative overflow-hidden" style={{ height: 'calc(100% - 48px)' }}>
                    {props.images.map((img, idx) => 
                        <ImageViewerScene
                            key={idx}
                            scale={scale} 
                            imageUrl={img} 
                            visible={currentIndex === idx} />)} 
                </div>
                {/* controls */}
                {(currentIndex > 0) &&
                <div 
                    className="group absolute top-16 left-0 bottom-0 w-16 flex justify-center items-center"
                    onClick={_e => previous()}
                    // title="Previous"
                >
                    {/* Left controls */}
                    <button className="h-12 bg-gray-700 rounded text-white hidden group-hover:block">
                        <ChevronLeftIcon />
                    </button>
                </div>}
                {(currentIndex < (props.images.length -1)) &&
                <div 
                    className="group absolute top-16 right-0 bottom-0 w-16 flex justify-center items-center"
                    onClick={_e => next()}
                    // title="Next"
                >
                    {/* Right controls */}
                    <button className="h-12 bg-gray-700 rounded text-white hidden group-hover:block">
                        <ChevronRightIcon />
                    </button>
                </div>}
            </div>         
        </div>
    )
}

export default ImageViewer;