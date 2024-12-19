import { clsx, ClassValue } from "clsx";
import { twMerge } from 'tailwind-merge';

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