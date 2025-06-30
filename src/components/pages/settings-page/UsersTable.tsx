import { useFetchAPI } from "../../../api/useFetchAPI";
import type { UsersDataType } from "../../../types/UsersDataType";
import UsersTableRow from "./UsersTableRow";

const UsersTable = () => {
  const url = "https://gamma-api.vercel.app/api/roles";
  const { data, isLoading, error } = useFetchAPI<UsersDataType[]>(url);

  const tableData = data?.map((item) => (
    <UsersTableRow
      id={item.id}
      name={item.name}
      type={item.type}
      date={item.date}
      status={item.status.replace(" ", "")}
      users={item.users}
      key={item.id}
    />
  ));
  return (
    <div>
      {isLoading && <p>Loading data...</p>}
      {error && <p>{error.message}</p>}
      {!isLoading && !error && tableData}
    </div>
  );
};

export default UsersTable;
