import { clsx, ClassValue } from "clsx";
import { twMerge } from 'tailwind-merge';

export const MAX_IMG_HEIGHT = 300;

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export function uuid() {
    return crypto.randomUUID();
}

export const colors = {
    "primary": "#228b22",
    "success": "#2e7d32",
    "info": "#0288d1",
    "warning": "#ed6c02",
    "error": "#d32f2f"
}

export function toggleClass(classList: DOMTokenList, classname: string) {
    if(classList.contains(classname)) {
        classList.remove(classname);
    } else {
        classList.add(classname);
    }
}

export function getParentOf(elt: HTMLElement | null, selectors: string, maxDepth: number = 10) {
    if (!!elt) {
        if(elt.matches(selectors)) {
            return elt;
        } 
        else if(maxDepth > 0) {
            const parentElt = elt.parentElement;
            return getParentOf(parentElt, selectors, --maxDepth);
        }
    }
    return null;
}