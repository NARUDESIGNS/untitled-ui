import CheckEmptyIcon from "../../../assets/react-icons/CheckEmptyIcon";
import CheckFilledIcon from "../../../assets/react-icons/CheckFilledIcon";
import DoubleUsersIcon from "../../../assets/react-icons/DoubleUsersIcon";

interface AdminRoleCardProps {
  /** Admin title */
  title: string;
  /** Last active date */
  lastActive: string;
  /** Active card */
  isSelected?: boolean;
  /** Click event */
  onClick: () => void;
}

const AdminRoleCard = ({
  title,
  lastActive,
  isSelected,
  onClick,
}: AdminRoleCardProps) => {
  return (
    <div
      className={`flex gap-3 p-4 rounded-lg border border-gray-200 ${
        isSelected
          ? "bg-purple-300/10 border-purple-300 hover:border-purple-400"
          : "bg-white hover:border-gray-400"
      } cursor-pointer transition-colors duration-300`}
      onClick={onClick}
    >
      <span className="bg-white px-3 py-2 h-fit w-fit">
        <DoubleUsersIcon className="w-5 h-5" />
      </span>
      <div>
        <p
          className={`font-medium ${
            isSelected ? "text-purple-500" : "text-gray-900"
          }`}
        >
          {title}
        </p>
        <p className="mb-2">Last Active {lastActive}</p>
        <div className="flex gap-3">
          <p className={`${isSelected && "text-purple-500"}`}>Set as default</p>
          <a href="#" className="!text-purple-700">
            Edit
          </a>
        </div>
      </div>
      <div className="ml-auto">
        {isSelected ? <CheckFilledIcon /> : <CheckEmptyIcon />}
      </div>
    </div>
  );
};

export default AdminRoleCard;
