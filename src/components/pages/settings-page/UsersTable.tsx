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
      {!isLoading && !error && (
        <div className="bg-white border border-gray-300 shadow-gray-200 shadow-md rounded-lg max-h-[500px] overflow-y-scroll">
          <div className="flex items-center sm:divide-x sm:divide-gray-200 sticky top-0 justify-between px-6 py-3.25 border-b border-gray-200 text-gray-500 text-sm bg-gray-50 z-10">
            <p className="w-fit sm:w-[25%]">Name</p>
            <p className="w-[15%] hidden sm:flex">Type</p>
            <p className="w-fit sm:w-[10%]">Date Created</p>
            <p className="w-[66px] hidden sm:flex">Status</p>
            <p className="w-[30%] hidden sm:flex">Role Users</p>
          </div>
          {tableData}
        </div>
      )}
    </div>
  );
};

export default UsersTable;
