import { Placement } from "@popperjs/core";
import React from "react";

export type MenuProps = {
    MenuTriggerContent: React.ReactElement;
    children?: React.ReactNode;
    /**
     * Depth level of the farthest child element, this is important to avoid loosing performance
     * Default is 10
     */
    maxChildDepth?: number;
    contentClassName?: string;
    offset?: {
        skidding: number;
        distance: number;
    };
    placement?: Placement
}