import React from "react";
import { PdfViewerProps } from "./types";
import { createPortal } from "react-dom";

const PdfViewer: React.FC<PdfViewerProps> = (props: PdfViewerProps) => {
    
    if(props.visible) {
        return createPortal(<PdfViewerInclude {...props}/>, document.body)
    }
    else {
        return null;
    }
}

const PdfViewerInclude: React.FC<PdfViewerProps> = (props: PdfViewerProps) => {

    return (
        <div className="fixed left-0 top-0 right-0 bottom-0 modal-stack-level overflow-auto">
            <div className="absolute left-0 top-0 right-0 bottom-0 bg-gray-900 opacity-85 backdrop-blur-md modal-backdrop-stack-level">
                {/* backdrop */}
            </div>
            {/* content */}
            <div className="relative h-full w-full md:w-3/4 lg:w-2/3 m-auto modal-content-stack-level bg-white">

            </div>
        </div>
    )
}

export default PdfViewer;