import DownloadCloudIcon from "../assets/react-icons/DownloadCloudIcon";

const UsersImgStack = ({
  users,
  totalUsers,
  className,
}: {
  users: string[];
  totalUsers?: number;
  className: string;
}) => {
  const usersCount = users.length;
  const usersImgs = users.map((url, index) => {
    if (index < 5) {
      return (
        <img
          src={url}
          alt="User Img"
          key={index}
          className={`w-10 -h-10 rounded-full z-1 border-[1.5px] -ml-3 border-white bg-gray-300 aspect-square`}
        />
      );
    }
  });

  console.log(totalUsers);
  return (
    <div className={`flex items-center w-[30%] ${className}`}>
      {usersImgs}
      {!!totalUsers && totalUsers - usersCount > 0 && (
        <div className="w-10 h-10 flex items-center justify-center rounded-full z-1  border-[1.5px] -ml-3 border-white bg-gray-100 font-medium text-gray-600">
          +{!!totalUsers && totalUsers - usersCount}
        </div>
      )}
      <DownloadCloudIcon className="w-5 h-5 cursor-pointer ml-auto" />
    </div>
  );
};

export default UsersImgStack;
