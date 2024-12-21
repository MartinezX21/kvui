import React, { useEffect, useRef, useState } from "react";
import { StickyContainerProps } from "./types";
import { cn, uuid } from "../../utils";

const GUARD = 5 //5px
const StickyContainer: React.FC<StickyContainerProps> = (props: StickyContainerProps) => {
    const [isSticky, setSticky] = useState(false);
    const containerId = useRef(props.id || uuid());

    const scrollHandler = (_e: Event) => {  
        const elt = document.getElementById(containerId.current);
        if (!!elt) {
            const eltTopOffset = elt.offsetTop;
            const offset = props.offset || 0;
            const sticky = eltTopOffset - (offset + GUARD);
            //
            if (window.scrollY >= sticky) {
                setSticky(true);
                if(!!props.onScrool) {
                    props.onScrool(true);
                }
            } else {
                setSticky(false);
                if(!!props.onScrool) {
                    props.onScrool(false);
                }
            }
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", scrollHandler)
        
        return () => {
            window.removeEventListener("scroll", scrollHandler);
        }
    }, [])

    return (
        <div id={containerId.current}
            className={cn("w-full static", { "sticky": isSticky })}
            style={isSticky? {top: (props.offset || 0)} : {}}
        >
            {props.children}
        </div>
    )
}

export default StickyContainer;