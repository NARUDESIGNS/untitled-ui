import DownloadCloudIcon from "../assets/react-icons/DownloadCloudIcon";

const UsersImgStack = ({ users }: { users: string[] }) => {
  const totalUsers = users.length;
  const usersImgs = users.map((url, index) => {
    if (index <= 5) {
      return (
        <img
          src={url}
          alt="User Img"
          key={index}
          className={`w-10 -h-10 rounded-full absolute z-${index} border-[1.5px] -ml-2 border-white`}
        />
      );
    }
  });
  return (
    <div className="relative flex">
      {usersImgs}
      {totalUsers - 5 > 0 && (
        <span
          className={`w-10 -h-10 rounded-full absolute z-[{users.length}] -ml-2
        `}
        >
          +{totalUsers - 5}
        </span>
      )}
      <DownloadCloudIcon className="w-5 h-5 cursor-pointer" />
    </div>
  );
};

export default UsersImgStack;
