import { useState } from "react";
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
  isAllChecked,
}: UsersTableRowProps & { isAllChecked?: boolean }) => {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <div className="flex items-center justify-between p-6.5 border-b border-gray-200 text-gray-500 text-sm">
      <div className="flex gap-3 w-fit sm:w-[25%]">
        <input
          type="checkbox"
          checked={isChecked || isAllChecked}
          onChange={(e) => setIsChecked(e.target.checked)}
          className="accent-purple-600 w-5 h-5 rounded-lg border-gray-200 outline-purple-500/20 cursor-pointer"
        />
        <p className="text-gray-900 font-medium overflow-hidden whitespace-nowrap text-ellipsis w-[70%]">
          {name}
        </p>
      </div>
      <p className="hidden sm:flex w-[15%]">{type}</p>
      <p className="w-fit sm:w-[10%]">{date}</p>
      <BaseTag
        className="hidden sm:flex"
        title={status.trim().toLowerCase() as statusType}
      />
      <UsersImgStack className="hidden sm:flex" users={users} />
    </div>
  );
};

export default UsersTableRow;
