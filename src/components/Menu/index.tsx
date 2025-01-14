import React, { useEffect, useRef, useState } from "react";
import { MenuProps } from "./types";
import { cn, getParentOf, uuid } from "../../utils";
import { popperGenerator, defaultModifiers, Instance } from '@popperjs/core/lib/popper-lite';
import { flip, offset } from "@popperjs/core";
import { motion } from "framer-motion";

const Menu: React.FC<MenuProps> = (props: MenuProps) => {
    const [visible, setVisible] = useState(false);
    const popperInstance = useRef<Instance>();
    const popperReferenceId = useRef(uuid());
    const popperElementId = useRef(uuid());
    
    const createPopper = popperGenerator({
        defaultModifiers: [ ...defaultModifiers, flip, offset ],
        defaultOptions: {
            placement: props.placement,
            modifiers: [
                ...(props.offset === undefined? [] : [{
                    name: 'offset',
                    options: {
                        offset: [props.offset.skidding, props.offset.distance]
                    }
                }])    
            ]
        }
    });

    const configurePopper = () => {
        const reference = document.getElementById(popperReferenceId.current);
        const popper = document.getElementById(popperElementId.current) as HTMLElement;

        if(!!reference && !!popper) {
            popperInstance.current = createPopper(reference, popper);
        }
    }

    const toggleVisible = () => {
        setVisible(value => !value);
    }

    const handleBlur = (event: MouseEvent) => {
        if(event.target instanceof HTMLElement) {
            const elt = event.target as HTMLElement;
            const triggerBtn = getParentOf(elt, ".kv-menu-trigger", props.maxChildDepth);
            if(!triggerBtn) {
                // user clicked outside the menu trigger
                const itemElt = getParentOf(elt, ".kv-menu-item", props.maxChildDepth);
                if(!!itemElt) {
                    // user clicked on a menu item
                    setVisible(false)
                }
                else {
                    const contentElt = getParentOf(elt, ".kv-menu-content", props.maxChildDepth);
                    if(!contentElt) {
                        // user clicked outside the menu content
                        setVisible(false);
                    }
                }
            }
        }
    }

    useEffect(() => {
        configurePopper();
        window.addEventListener("click", handleBlur)
        
        return () => {
            window.removeEventListener("click", handleBlur);
        }
    }, [])

    useEffect(() => {
        if(visible && popperInstance.current !== undefined) {
            popperInstance.current.update();
        }
    }, [visible])
    
    return (
        <div className="relative inline-block">
            <button id={popperReferenceId.current} className="kv-menu-trigger" onClick={() => toggleVisible()}>
                {props.MenuTriggerContent}
            </button>
            <motion.div id={popperElementId.current}
                animate={visible? 'visible' : 'hidden'}
                variants={{
                    hidden: {
                        opacity: 0,
                    },
                    visible: {
                        opacity: 1,
                        transition: { duration: 0.15 }
                    }
                }}
                className={cn("kv-menu-content absolute min-w-32 z-10 shadow rounded bg-white", props.contentClassName, {
                    "hidden": !visible,
                    "block": visible
                })}
            >
                {props.children}
            </motion.div>
        </div>
    )
}

export default Menu;