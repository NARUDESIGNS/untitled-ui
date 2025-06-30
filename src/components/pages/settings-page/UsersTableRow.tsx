import BaseTag from "../../BaseTag";
import UsersImgStack from "../../UsersImgStack";

interface UsersTableRowProps {
  /** Row id */
  id?: number;
  /** Admin name */
  name: string;
  /** Admin type */
  type: string;
  /** Date created */
  date: string;
  /** Admin status */
  status: string;
  /** Admin users */
  users: string[];
  /** Total admin users */
  totalUsers?: number;
}

type statusType = "active" | "inactive";

const UsersTableRow = ({
  name,
  type,
  date,
  status,
  users,
}: UsersTableRowProps) => {
  return (
    <div>
      <input type="checkbox" />
      <p>{name}</p>
      <p>{type}</p>
      <p>{date}</p>
      <BaseTag title={status.trim().toLowerCase() as statusType} />
      <UsersImgStack users={users} />
    </div>
  );
};

export default UsersTableRow;
