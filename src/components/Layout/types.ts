export type AppHeaderProps = {
    title: string;
    onOpenDrawer: () => void;
    enableSearch?: boolean;
    onSearch?: (searchKey: string) => void;
    enableNotification?: boolean;
    notificationBadge?: string;
    onToggleNotificationBar?: () => void;
    UserAvatar: React.ReactNode;
}

export type MasterHeaderWithDrawerProps = AppHeaderProps & {
    /**
     * Sidebar
     */
    Sidebar: React.ReactNode;
    /**
     * Page content
     */
    children?: React.ReactNode;
}