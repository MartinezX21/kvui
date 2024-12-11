import React from 'react';

export type SidebarFooterProps = {
    id: string;
    label: string;
    Icon: React.ReactElement;
    onClick: (id: SidebarFooterProps["id"]) => void;
}

export type SidebarHeaderProps = {
    title: string;
    Logo: React.ReactElement;
}

export type NavigationSidebarProps = {
    /**
     * Sidebar title, useless if {@link NavigationSidebarProps.renderHeader} is defined
     */
    headerTitle?: string;
    /**
     * Sidebar logo, useless if {@link NavigationSidebarProps.renderHeader} is defined
     */
    HeaderLogo?: React.ReactElement;
    /**
     * Overrides the sidebar header
     * @returns the alement to be rendered as header
     */
    renderHeader?: () => React.ReactElement;
    /**
     * Overrides the sidebar footer
     * @returns the alement to be rendered as footer
     */
    renderFooter?: () => React.ReactElement;
    /**
     * Id of the section to be set as active by default
     */
    defaultActiveItemId?: string;
    children?: React.ReactNode;
}

export type SidebarSectionProps = {
    /**
     * Section title
     */
    title: string;
    separator?: boolean;
    children?: React.ReactNode;
}

export type SidebarItemProps = {
    id: string;
    label: string;
    Icon: React.ReactElement;
    badge?: string;
    onClick: (id: SidebarItemProps["id"]) => void;
}