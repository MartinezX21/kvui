import React from "react";

export type ToastHPosition = 'left' | 'right';
export type ToastVPosition = 'top' | 'bottom';
export type ToastSeverity = 'success' | 'info' | 'default' | 'warning' | 'error';
export type ToastActionType = 'link' | 'button';

export type ToastAction = {
    /**
     * Name to display on the link or button
     */
    id: string;
    command: string;
    /**
     * Mandatory if the action type is 'link'
     */
    href?: string;
    /**
     * Mandatory if the action type is 'button'
     */
    handler?: React.MouseEventHandler<HTMLButtonElement> | undefined;
}

export type ToastProps = {
    id: string;
    visible?: boolean;
    /**
     * Horizontal alignment, default is 'left'
     */
    halign?: ToastHPosition;
    /**
     * Vertical alignment, default is 'bottom'
     */
    valign?: ToastVPosition;
    /**
     * Default timeout in milliseconds, default is 6000
     */
    defaultTimeout?: number;
    /**
     * Default is 'default'
     */
    severity?: ToastSeverity;
    title: string;
    description?: string;
    /**
     * Indicates if to automatically close the toast or no
     */
    autoclose?: boolean;
    actions?: Array<ToastAction>;
    /**
     * Indicates how to show the action. Possible values are 'link', 'button'. Default is 'link'
     */
    actionType?: ToastActionType;
    onClose: () => void;
}