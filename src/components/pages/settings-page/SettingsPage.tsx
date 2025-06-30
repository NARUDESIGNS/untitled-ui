import DownloadCloudIcon from "../../../assets/react-icons/DownloadCloudIcon";
import BaseButton from "../../BaseButton";
import SettingsNav from "./SettingsNav";
import UserRoleSetup from "./UserRoleSetup";
import UsersTable from "./UsersTable";

const SettingsPage = () => {
  return (
    <div className="w-full h-full bg-gray-50 p-9 md:ml-[280px]">
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
  );
};

export default SettingsPage;
