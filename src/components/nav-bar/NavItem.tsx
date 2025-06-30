import type { ReactElement } from "react";

interface NavItemProps {
  /** Icon */
  icon: ReactElement;
  /** Title */
  title: string;
  /** Notification count */
  count?: number;
  /** Item is active */
  isActive?: boolean;
}

const NavItem = ({ icon, title, count, isActive }: NavItemProps) => {
  return (
    <div
      className={`flex items-center gap-2 ${
        isActive && "bg-gray-100 text-gray-900"
      } py-2 px-3 text-gray-700 cursor-pointer hover:bg-gray-100 rounded`}
    >
      {icon}
      <p className="font-[500]">{title}</p>
      {count && (
        <span className="text-[14px] rounded-4xl bg-gray-100 px-2.5 py-0.5 ml-auto">
          {count}
        </span>
      )}
    </div>
  );
};

export default NavItem;
