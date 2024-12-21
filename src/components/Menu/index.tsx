import React, { useEffect, useState } from "react";
import { MenuProps } from "./types";
import { cn, getParentOf } from "../../utils";
import { usePopper } from 'react-popper';
import { motion } from "framer-motion";

const Menu: React.FC<MenuProps> = (props: MenuProps) => {
    const [visible, setVisible] = useState(false);
    const [popperReferenceElement, setPopperReferenceElement] = useState<HTMLButtonElement | null>(null);
    const [popperElement, setPopperElement] = useState<HTMLDivElement | null>(null);
    const { styles, attributes } = usePopper(popperReferenceElement, popperElement, {
        placement: props.placement,
        modifiers: [
            {
                name: 'offset',
                options: {
                    offset: [0, props.offset]
                }
            }
        ]
    });
    
    const toggleVisible = () => {
        setVisible(value => !value);
    }

    const handleBlur = (event: MouseEvent) => {
        if(event.target instanceof HTMLElement) {
            const elt = event.target as HTMLElement;
            const triggerBtn = getParentOf(elt, ".kv-menu-trigger", props.maxChildDepth);
            if(!triggerBtn) {
                // user clicked outside the menu trigger
                const contentElt = getParentOf(elt, ".kv-menu-content", props.maxChildDepth);
                if(!contentElt) {
                    // user clicked outside the menu content
                    setVisible(false);
                }
            }
        }
    }

    useEffect(() => {
            window.addEventListener("click", handleBlur)
            
            return () => {
                window.removeEventListener("click", handleBlur);
            }
    }, [])

    return (
        <div className="relative inline-block">
            <button ref={ref => setPopperReferenceElement(ref)} className="kv-menu-trigger" onClick={() => toggleVisible()}>
                {props.MenuTriggerContent}
            </button>
            <motion.div ref={ref => setPopperElement(ref)}
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
                style={styles.popper} {...attributes.popper}
            >
                {props.children}
            </motion.div>
        </div>
    )
}

export default Menu;