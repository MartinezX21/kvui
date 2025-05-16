import React, { useCallback, useEffect, useRef, useState } from "react";
import { PdfViewerProps } from "./types";
import { createPortal } from "react-dom";
import * as PDFJS from "pdfjs-dist";
import type {
  PDFDocumentProxy,
  RenderParameters,
} from "pdfjs-dist/types/src/display/api";
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import LaunchOutlinedIcon from '@mui/icons-material/LaunchOutlined';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';

const PdfViewer: React.FC<PdfViewerProps> = (props: PdfViewerProps) => {
    if(props.visible) {
        return createPortal(<PdfViewerInclude {...props}/>, document.body)
    }
    else {
        return null;
    }
}

const PdfViewerInclude: React.FC<PdfViewerProps> = (props: PdfViewerProps) => {
    PDFJS.GlobalWorkerOptions.workerSrc =
    "https://unpkg.com/pdfjs-dist@5.2.133/build/pdf.worker.min.mjs";
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [pdfDocument, setPdfDocument] = useState<PDFDocumentProxy>();
    const [currentPage, setCurrentPage] = useState(1);
    let renderTask: PDFJS.RenderTask;

    const downloadFile = (openExternalLink: boolean = true) => {
        const link = document.createElement('a');
        link.href = props.pdfSrc;
        link.setAttribute("download", `FILE_${new Date().getTime()}.pdf`); //or any other extension
        if(openExternalLink) {
            link.setAttribute("target", "_blank");
        }
        document.body.appendChild(link);
        link.click();

        // clean up "a" element
        document.body.removeChild(link);
    }

    const renderPage = useCallback((pageNumber: number, pdf = pdfDocument) => {
        const canvas = canvasRef.current;
        if (!canvas || !pdf) return;
        canvas.height = 0;
        canvas.width = 0;
        // canvas.hidden = true;
        pdf.getPage(pageNumber).then((page) => {
            const viewport = page.getViewport({ scale: 1 });
            canvas.height = viewport.height;
            canvas.width = viewport.width;
            const renderContext: RenderParameters = {
                canvasContext: canvas.getContext("2d")!,
                viewport: viewport,
            };
            try {
                if (renderTask) {
                    renderTask.cancel();
                }
                renderTask = page.render(renderContext);
                return renderTask.promise;
            } catch (err) {}
        }).catch((err) => console.log(err));
    }, [pdfDocument]);

    useEffect(() => {
        renderPage(currentPage, pdfDocument);
    }, [pdfDocument, currentPage, renderPage]);
    
    useEffect(() => {
        const loadingTask = PDFJS.getDocument(props.pdfSrc);
        loadingTask.promise.then(
          (loadedDocument) => {
            setPdfDocument(loadedDocument);
          },
          (err) => {
            console.error(err);
          }
        );
    }, [props.pdfSrc]);
    return (
        <div className="fixed left-0 top-0 right-0 bottom-0 modal-stack-level">
            <div className="absolute left-0 top-0 right-0 bottom-0 bg-gray-900 opacity-85 backdrop-blur-md modal-backdrop-stack-level">
                {/* backdrop */}
            </div>
            {/* content */}
            <div className="relative h-full w-full overflow-auto modal-content-stack-level flex justify-center">
                <div className="h-full w-auto md:w-3/4 lg:w-2/3">
                    <canvas className="m-auto" ref={canvasRef}></canvas>
                </div>
            </div>
            {(!!pdfDocument) &&
            <div className="absolute w-full bottom-3 left-0 z-[999] justify-center flex">
                <div className="rounded-full shadow-md px-2 py-1 bg-slate-900 text-gray-400 flex justify-center items-center gap-1">
                    <button 
                        type="button" 
                        className="rounded-full w-8 h-8 hover:bg-slate-700 hover:text-gray-200 hover:shadow"
                        onClick={_e => (currentPage > 1) && setCurrentPage(page => page - 1)}
                    >
                        <ChevronLeftIcon fontSize="small"/>
                    </button>
                    <h4>{currentPage}/{pdfDocument.numPages}</h4>
                    <button 
                        type="button" 
                        className="rounded-full w-8 h-8 hover:bg-slate-700 hover:text-gray-200 hover:shadow"
                        onClick={_e => (currentPage < pdfDocument.numPages) && setCurrentPage(page => page + 1)}
                    >
                        <ChevronRightIcon fontSize="small"/>
                    </button>
                    <button 
                        type="button" 
                        className="rounded-full w-8 h-8 hover:bg-slate-700 hover:text-gray-200 hover:shadow"
                        onClick={_e => downloadFile()}
                    >
                        <LaunchOutlinedIcon fontSize="small"/>
                    </button>
                    <button 
                        type="button" 
                        className="rounded-full w-8 h-8 hover:bg-slate-700 hover:text-gray-200 hover:shadow"
                        onClick={_e => props.onClose()}
                    >
                        <CloseOutlinedIcon fontSize="small"/>
                    </button>
                </div>
            </div>}
        </div>
    )
}

export default PdfViewer;