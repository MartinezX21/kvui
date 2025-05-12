import React, { useState } from "react";
import { ImageViewerProps } from "./types";
import ImageViewerScene from "./ImageViewerScene";
import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import CloseIcon from '@mui/icons-material/Close';
import { cn } from "../../../utils";

const ImageViewer: React.FC<ImageViewerProps> = (props: ImageViewerProps) => {
    const [currentIndex, setCurrentIndex] = useState(props.initialActiveIndex || 0);

    const previous = () => {
        setCurrentIndex(idx => idx - 1);
    }
    const next = () => {
        setCurrentIndex(idx => idx + 1);
    }

    return (
        <div className={cn("fixed left-0 top-0 right-0 bottom-0 modal-stack-level overflow-auto", {
            "block": props.visible,
            "hidden": !props.visible
        })}>
            <div className="absolute left-0 top-0 right-0 bottom-0 bg-gray-900 backdrop-blur-md modal-backdrop-stack-level">
                {/* backdrop */}
            </div> 
            <div className="absolute left-0 top-0 right-0 bottom-0 modal-content-stack-level">
                <div className="w-full py-2 px-4 h-12 bg-white shadow-md text-gray-900 flex items-center">
                    <h6 className="flex items-center">
                        <InsertPhotoIcon fontSize="medium"/>
                        <span className="leading-relaxed text-xl ps-2">{props.title}</span>
                    </h6>
                    <div className="grow"></div>
                    <button 
                        type="button" 
                        className="rounded-full w-8 h-8 text-gray-700 text-sm hover:bg-slate-100 hover:shadow"
                        onClick={_e => props.onClose()}
                    >
                        <CloseIcon fontSize="inherit"/>
                    </button>
                </div>
                <div className="flex justify-center items-center" style={{ height: 'calc(100% - 48px)' }}>
                    {props.images.map((img, idx) => <ImageViewerScene imageUrl={img} visible={currentIndex === idx} />)} 
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