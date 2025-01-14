import React from "react";
import { MenuItemProps } from "./types";
import { cn } from "../../utils";

const MenuItem: React.FC<MenuItemProps> = (props: MenuItemProps) => {

    return (
        <button 
            className="kv-menu-item w-full px-4 py-2 hover:bg-slate-100 text-left flex items-center gap-2" 
            onClick={_e => props.onClick()}
        >
            <div className={cn("h-6 w-6 flex items-center justify-center overflow-hidden", {"bg-slate-100": !props.Icon})}>
                {props.Icon}
            </div>
            <h5 className="grow">
                {props.label}
            </h5>
        </button>
    )
}

export default MenuItem;