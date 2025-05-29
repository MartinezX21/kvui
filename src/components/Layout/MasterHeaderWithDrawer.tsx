import React from "react";
import { MasterHeaderWithDrawerProps } from "./types";
import StickyHeader from "./StickyHeader";

const MasterHeaderWithDrawer: React.FC<MasterHeaderWithDrawerProps> = (props: MasterHeaderWithDrawerProps) => {
    const { Sidebar, children: PageContent, ...headerProps } = props;
    
    return (
        <div className="w-full h-screen flex">
            {Sidebar}
            <div className="grow h-screen overflow-auto">
                {/* Sticky Header */}
                <StickyHeader {...headerProps}/>
                {/* Content */}
                <div className="w-full px-4">
                    {PageContent}
                </div>
            </div>
        </div>
    )
}

export default MasterHeaderWithDrawer;