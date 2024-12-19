import React, { useContext } from "react";
import { SidebarSectionProps } from "./types";
import { SidebarContext } from "./SidebarContextProvider";
import { cn } from "../../../utils";

const SidebarSection: React.FC<SidebarSectionProps> = (props: SidebarSectionProps) => {
    const ctx = useContext(SidebarContext);

    return (
        <div className="w-full">
            <h5 className={cn("uppercase text-[10px] font-semibold tracking-widest text-gray-500 px-3 mt-2 invisible opacity-0 transition ease-in-out delay-100 duration-300", {
                "visible opacity-100": ctx?.expanded
            })}>
                {props.title}
            </h5>
            <div className="w-full">
                {/**
                 * Children here represents the navigation menu items that will be available under this section
                 */}
                {props.children}
            </div>
            {(!!props.separator) && (
            <div className="px-3">
                <hr />
            </div>)}
        </div>
    )
}

export default SidebarSection;