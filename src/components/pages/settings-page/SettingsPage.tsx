import SettingsNav from "./SettingsNav";
import UserRoleSetup from "./UserRoleSetup";

const SettingsPage = () => {
  return (
    <div className="w-full h-full bg-gray-50 p-9 md:ml-[280px]">
      <p className="text-3xl text-gray-900 font-medium mb-1">Settings</p>
      <p className=" text-gray-500 mb-6">
        Manage your team and preferences here.
      </p>
      <SettingsNav />
      <UserRoleSetup />
    </div>
  );
};

export default SettingsPage;
