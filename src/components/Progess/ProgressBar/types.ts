export type ProgressBarProps = {
    color?: string;
    /**
     * Bar size default is 'medium'
     */
    size?: "small" | "medium" | "large";
    /**
     * Percentage progress
     */
    progress: string;
}