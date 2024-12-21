export type StickyContainerProps = {
    id?: string;
    /**
     * Top space between the top of the screen and the element.
     * Default is 0
     */
    offset?: number;
    children?: React.ReactNode;
    onScrool?: (isSticky: boolean) => void;
}