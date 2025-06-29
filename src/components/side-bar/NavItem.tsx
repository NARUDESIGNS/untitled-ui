import type { ReactElement } from "react";

interface NavItemProps {
    /** Icon */
    icon: ReactElement,
    /** Title */
    title: string,
    /** Notification count */
    count?: number
}

const NavItem = ({icon, title, count}: NavItemProps) => {
    return (
        <div className="flex items-center justify-between gap-4">
            {icon}
            <p>{title}</p>
            {count && (<span>{count}</span>)}
        </div>
    );
}
 
export default NavItem;