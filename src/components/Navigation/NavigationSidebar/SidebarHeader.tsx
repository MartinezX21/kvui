import React, { useContext } from 'react';
import { SidebarHeaderProps } from './types';
import { motion, AnimatePresence } from 'framer-motion';
import { labelsAnimateVariants } from './animate.configs';
import { SidebarContext } from './SidebarContextProvider';

const SidebarHeader: React.FC<SidebarHeaderProps> = (props: SidebarHeaderProps) => {
    const ctx = useContext(SidebarContext);

    return (
        <div className={"shrink-0 px-3"}>
            <div className='flex items-center gap-2 h-16 border-b'>
                <div className="h-10 flex items-center justify-center text-[40px]">
                    {props.Logo}
                </div>
                <AnimatePresence>
                    {ctx?.expanded && (
                    <motion.h5 key="app-name"
                        variants={labelsAnimateVariants}
                        initial="collapsed"
                        animate="expanded"
                        exit="collapsed"
                        className="text-xl font-medium leading-relaxed"
                    >
                        {props.title}
                    </motion.h5>)}
                </AnimatePresence>
            </div>
        </div>
    )
}

export default SidebarHeader;