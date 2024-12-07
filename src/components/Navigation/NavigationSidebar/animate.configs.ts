import { Variants } from "framer-motion"

export const mainAnimateVariants: Variants = {
    expanded: { 
        width: 240,
        transition: {
            ease: 'linear',
            duration: 0.3
        }
    },
    collapsed: { 
        width: 64,
        transition: {
            ease: 'linear',
            duration: 0.3
        }
    }
}

export const labelsAnimateVariants: Variants = {
    expanded: { 
        width: 'auto', 
        opacity: 1,
        transition: {
            ease: 'linear',
            delay: 0.15,
            duration: 0.3
        }
    },
    collapsed: {  
        width: 0, 
        opacity: 0,
        transition: {
            ease: 'linear',
            duration: 0.2
        }
    }
}

export const badgesAnimateVariants: Variants = {
    expanded: {
        opacity: 1,
        transition: {
            ease: 'linear',
            delay: 0.15,
            duration: 0.3
        }
    },
    collapsed: {
        opacity: 0,
        transition: {
            ease: 'linear',
            duration: 0.2
        }
    }
}