import type { ReactElement } from "react";

interface BaseButtonProps {
  /** Icon */
  icon: ReactElement;
  /** Title */
  title: string;
}

const BaseButton = ({ icon, title }: BaseButtonProps) => {
  return (
    <div
      className={`flex items-center gap-2 text-gray-900 py-2.5 px-4 cursor-pointer hover:bg-gray-100 rounded-lg border border-gray-300 capitalize`}
    >
      {icon}
      <p className="font-medium text-sm">{title}</p>
    </div>
  );
};

export default BaseButton;
