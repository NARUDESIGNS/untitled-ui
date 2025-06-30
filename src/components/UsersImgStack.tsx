import DownloadCloudIcon from "../assets/react-icons/DownloadCloudIcon";

const UsersImgStack = ({ users }: { users: string[] }) => {
  const totalUsers = users.length;
  const usersImgs = users.map((url, index) => {
    if (index < 5) {
      return (
        <img
          src={url}
          alt="User Img"
          key={index}
          className={`w-10 -h-10 rounded-full z-1 border-[1.5px] -ml-3 border-white`}
        />
      );
    }
  });
  return (
    <div className="flex items-center w-[30%]">
      {usersImgs}
      {totalUsers - 5 > 0 && (
        <div className="w-10 h-10 flex items-center justify-center rounded-full z-1 -ml-3 order-last bg-gray-300">
          +{totalUsers - 5}
        </div>
        // <div className="w-10 h-10 flex items-center justify-center rounded-full z-1 -ml-3 order-last bg-gray-300">
        //   +{totalUsers - 5}
        // </div>
      )}
      <DownloadCloudIcon className="w-5 h-5 cursor-pointer ml-auto" />
    </div>
  );
};

export default UsersImgStack;
