import { useFetchAPI } from "../../../api/useFetchAPI";
import type { UsersDataType } from "../../../types/UsersDataType";
import UsersTableRow from "./UsersTableRow";

const _data = {
  id: 5,
  name: "Deputy sales personnel",
  type: "CUSTOM",
  date: "May 1, 2023",
  status: "Active",
  users: [
    "https://avatars.githubusercontent.com/u/20971850?v=4",
    "https://avatars.githubusercontent.com/u/50866431?v=4",
    "https://avatars.githubusercontent.com/u/124599?v=4",
    "https://avatars.githubusercontent.com/u/69650754?v=4",
    "https://avatars.githubusercontent.com/u/50866431?v=4",
    "https://avatars.githubusercontent.com/u/124599?v=4",
    "https://avatars.githubusercontent.com/u/69650754?v=4",
  ],
  totalUser: 0,
};

const UsersTable = () => {
  const url = "https://gamma-api.vercel.app/api/roles";
  const { data, loading, error } = useFetchAPI<UsersDataType[]>(url);
  console.log(loading, error, data);

  const tableData = data?.map((item) => (
    <UsersTableRow
      id={item.id}
      name={item.name}
      type={item.type}
      date={item.date}
      status={item.status}
      users={item.users}
      key={item.id}
    />
  ));
  return <>{tableData}</>;
};

export default UsersTable;
