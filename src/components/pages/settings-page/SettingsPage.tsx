import DownloadCloudIcon from "../../../assets/react-icons/DownloadCloudIcon";
import BaseButton from "../../BaseButton";
import LogoMark from "../../LogoMark";
import SettingsNav from "./SettingsNav";
import UserRoleSetup from "./UserRoleSetup";
import UsersTable from "./UsersTable";

const SettingsPage = () => {
  return (
    <div className="flex flex-col relative sm:w-full w-dvw h-full bg-gray-50 md:ml-[280px]">
      <LogoMark className="sm:hidden p-4 sticky top-0" />
      <div className="p-9">
        <p className="text-3xl text-gray-900 font-medium mb-1">Settings</p>
        <p className=" text-gray-500 mb-6">
          Manage your team and preferences here.
        </p>
        <SettingsNav />
        <UserRoleSetup />
        <div className="flex items-center justify-between gap-2 my-8">
          <p className="text-gray-900 text-lg font-medium">User roles</p>
          <BaseButton icon={<DownloadCloudIcon />} title="Download All" />
        </div>
        <UsersTable />
      </div>
    </div>
  );
};

export default SettingsPage;
