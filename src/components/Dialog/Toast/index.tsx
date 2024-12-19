import React, { useEffect, useMemo, useRef, useState } from "react";
import { ToastProps } from "./types";
import { cn } from "../../../utils";
import { motion, Variants } from "framer-motion";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import InfoIcon from '@mui/icons-material/Info';
import ReportProblemIcon from '@mui/icons-material/ReportProblem';
import ErrorIcon from '@mui/icons-material/Error';
import CloseIcon from '@mui/icons-material/Close';
import ProgressBar from "../../Progess/ProgressBar";

/**
 * Default timeout 6000 (6 seconds)
 */
const DEFAULT_TIMEOUT = 6000;
const INTERVAL_DELAY = 100;

const Toast: React.FC<ToastProps> = (props: ToastProps) => {
    const [timeRemaining, setTimeRemaining] = useState(0);
    const timer = useRef<NodeJS.Timeout>();

    const toastVariants: Variants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1 }
    }

    const isIconVisible = useMemo(() => props.severity !== undefined && props.severity != 'default', [props.severity]);
    
    const progressPercentage = useMemo(() => {
        const fullTime = props.defaultTimeout || DEFAULT_TIMEOUT;
        return timeRemaining / fullTime * 100;
    }, [timeRemaining, props.defaultTimeout])

    const handleClose = () => {
        if(timer.current) {
            clearInterval(timer.current);
        }
        props.onClose();
    }

    useEffect(() => {
        if(props.visible && props.autoclose) {
            setTimeRemaining(props.defaultTimeout || DEFAULT_TIMEOUT);
            console.log(props.defaultTimeout || DEFAULT_TIMEOUT);
            timer.current = setInterval(() => {
                setTimeRemaining(previousValue => {
                    const remaining = previousValue - INTERVAL_DELAY;
                    console.log(remaining, INTERVAL_DELAY);
                    if(remaining <= 0) {
                        handleClose();
                    } 
                    return remaining;
                })
            }, INTERVAL_DELAY);
        }

        return () => {
            if(timer.current) {
                clearInterval(timer.current);
            }
        }
    }, [props.id, props.visible, props.autoclose])

    return (
        <motion.div 
            animate={props.visible? 'visible' : 'hidden'} 
            variants={toastVariants} 
            transition={{
                ease: 'linear',
                duration: 0.3
            }}
            className={cn("fixed", {
                'left-8': props.halign === undefined || props.halign === 'left',
                'right-8': props.halign === 'right',
                'bottom-8': props.valign === undefined || props.valign === 'bottom',
                'top-8': props.valign === 'top'
            })}
        >
            <div className={cn("py-2 px-3 border rounded min-w-32 bg-white shadow", {
                'border-success': props.severity === 'success',
                'border-info': props.severity === 'info',
                'border-warning': props.severity === 'warning',
                'border-error': props.severity === 'error',
            })}>
                {(props.autoclose) &&
                <div className="w-full">
                    <ProgressBar size="small" progress={`${progressPercentage}%`}/>
                </div>}
                <div className="h-10 flex items-center">
                    {isIconVisible &&
                    <p className="pe-2">
                        {props.severity === 'success'? <CheckCircleIcon className="text-success"/>
                        :props.severity === 'info'? <InfoIcon className="text-info"/>
                        :props.severity === 'warning'? <ReportProblemIcon className="text-warning"/>
                        :props.severity === 'error'? <ErrorIcon className="text-error"/> : null}
                    </p>}
                    <h5 className="font-semibold grow max-w-64 text-base line-clamp-1">
                        {props.title}
                    </h5>
                    <div className="ms-4 h-8 w-9 flex items-center justify-center">
                        <button type="button" onClick={_e => handleClose()} className="rounded px-2 py-1 hover:bg-slate-100 leading-none text-gray-600">
                            <CloseIcon style={{fontSize: '1rem'}}/>
                        </button>
                    </div>
                </div>
                {(!!props.description) &&
                <p className={cn("max-w-72 line-clamp-3 leading-tight hyphens-auto pb-1 text-sm", {
                    'ps-8': isIconVisible
                })}>
                    {props.description}
                </p>}
                <div className={cn("flex items-center gap-2 py-1 text-sm", {
                    'ps-8': isIconVisible,
                    'hidden': !props.actions
                })}>
                    {props.actions?.map(action => props.actionType === 'button'?
                    <button type="button" onClick={action.handler} className="py-1 px-2 rounded bg-slate-50 hover:bg-slate-100">
                        {action.command}
                    </button>
                    :
                    <a href={action.href} className="underline text-blue-500 cursor-pointer">
                        {action.command}
                    </a>)}
                </div>
            </div>
        </motion.div>
    )
}

export default Toast;