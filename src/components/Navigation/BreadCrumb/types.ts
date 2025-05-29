export type BreadCrumbProps = {
    itemStack: Array<BreadCrumbItem>
}

export type BreadCrumbItem = {
    id: string;
    label: string;
    targetLink: string;
    onClick?: () => void;
}