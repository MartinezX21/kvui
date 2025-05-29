import React, { useState } from "react";
import StickyContainer from "../StickyContainer";
import { AppHeaderProps } from "./types";
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';

const StickyHeader: React.FC<AppHeaderProps> = (props: AppHeaderProps) => {

    return (
        <StickyContainer>
            <div className="w-full py-2 px-4 flex items-center">
                <button type="button" className="pe-2 md:hidden" onClick={(_e) => props.onOpenDrawer()}>
                    <MenuOutlinedIcon/>
                </button>
                <h3 className="text-2xl font-medium leading-relaxed">{props.title}</h3>
            </div>
        </StickyContainer>
    )
}

export default StickyHeader;