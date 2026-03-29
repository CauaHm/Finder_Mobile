export interface NavItem {
    name?: string;
    path?: string;
    href?: string;
    icon?: React.ReactNode;
    active?: boolean;
}

export interface NavItemFooter {
    name?: string;
    href: string;
    icon: React.ReactNode
}