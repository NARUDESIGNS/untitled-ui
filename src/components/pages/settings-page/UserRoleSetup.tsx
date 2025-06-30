import { useState } from "react";
import MailIcon from "../../../assets/react-icons/MailIcon";
import InputRadio from "../../input/InputRadio";
import InputText from "../../input/InputText";
import AdminRoleCard from "./AdminRoleCard";
import UserTable from "./UsersTable";

const UserRoleSetup = () => {
  const [activeRoleCardIndex, setActiveRoleCardIndex] = useState(0);

  const mainEmailProps = {
    label: "My account email",
    hint: "Olivia@untitledui.com",
    name: "email",
    id: "email",
  };

  const alternativeEmailProps = {
    label: "An alternative email",
    name: "email",
    id: "alt-email",
  };

  const roles = [
    {
      title: "Super Admin",
      lastActive: "06/2023",
    },
    {
      title: "Super Admin",
      lastActive: "01/2023",
    },
    {
      title: "Support Admin",
      lastActive: "10/2022",
    },
  ];

  const adminRoles = roles.map(({ title, lastActive }, index) => (
    <AdminRoleCard
      title={title}
      lastActive={lastActive}
      isSelected={activeRoleCardIndex === index}
      key={index}
      onClick={() => setActiveRoleCardIndex(index)}
    />
  ));

  return (
    <div className="flex flex-col gap-5 text-gray-500 text-sm">
      <div className="pb-5 border-b border-gray-300">
        <p className="text-gray-900 text-lg font-medium mb-1">
          User Role Setup
        </p>
        <p>Update your roles details and information.</p>
      </div>
      <div className="flex flex-col gap-5 md:flex-row md:gap-9 pb-5 border-b border-gray-300">
        <div>
          <p className="text-gray-900 font-medium">Connected Email</p>
          <p>Select role account</p>
        </div>
        <div className="flex flex-col gap-4 md:w-[50%]">
          <InputRadio {...mainEmailProps} />
          <InputRadio {...alternativeEmailProps} />
          <InputText icon={<MailIcon className="w-5 h-5 flex-none" />} />
        </div>
      </div>
      <div className="flex flex-col gap-5 md:flex-row md:gap-9 pb-5">
        <div>
          <p className="text-gray-900 font-medium">Active Role</p>
          <p>Select active role available to the user.</p>
        </div>
        <div className="flex flex-col gap-4 w-full md:w-[90%]">
          {adminRoles}
          <button className="bg-none self-start cursor-pointer hover:text-gray-900">
            {" "}
            + Add role to user
          </button>
        </div>
      </div>
      <UserTable />
    </div>
  );
};

export default UserRoleSetup;
