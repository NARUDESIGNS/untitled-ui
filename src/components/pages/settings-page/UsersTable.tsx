import { useFetchAPI } from "../../../api/useFetchAPI";
import UsersTableRow from "./UsersTableRow";

const _data = {
  id: 5,
  name: "Deputy sales personnel 5",
  type: "CUSTOM",
  date: "May 1, 2023",
  status: "In Active",
  users: [
    "https://avatars.githubusercontent.com/u/20971850?v=4",
    "https://avatars.githubusercontent.com/u/50866431?v=4",
    "https://avatars.githubusercontent.com/u/124599?v=4",
    "https://avatars.githubusercontent.com/u/69650754?v=4",
  ],
  totalUser: 0,
};

const UsersTable = () => {
  const url = "https://gamma-api.vercel.app/api/roles";
  const { data, loading, error } = useFetchAPI(url);
  console.log(loading, error, data);

  return (
    <>
      {/* {loading ? (
        <p>"Loading data..."</p>
      ) : error ? (
        <p>{error.message}</p>
      ) : (
        { data }
      )}
    </> */}
      <UsersTableRow
        id={_data.id}
        name={_data.name}
        type={_data.type}
        date={_data.date}
        status={_data.status}
        users={_data.users}
      />
    </>
  );
};

export default UsersTable;
