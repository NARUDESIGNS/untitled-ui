import type { UsersDataType as UsersTableRowProps } from "../../../types/UsersDataType";
import BaseTag from "../../BaseTag";
import UsersImgStack from "../../UsersImgStack";

type statusType = "active" | "inactive";

const UsersTableRow = ({
  name,
  type,
  date,
  status,
  users,
}: UsersTableRowProps) => {
  return (
    <div className="flex items-center justify-between p-6.5 border-b border-gray-300 text-gray-500 text-sm">
      <div className="flex gap-3 w-[25%]">
        <input
          type="checkbox"
          className="accent-purple-600 w-5 h-5 rounded-lg border-gray-300 focus:ring-2 focus:ring-purple-500/20 cursor-pointer"
        />
        <p className="text-gray-900 font-medium">{name}</p>
      </div>
      <p className="w-[15%]">{type}</p>
      <p className="w-[10%]">{date}</p>
      <BaseTag title={status.trim().toLowerCase() as statusType} />
      <UsersImgStack users={users} />
    </div>
  );
};

export default UsersTableRow;
