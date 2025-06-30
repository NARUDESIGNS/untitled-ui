const settingsNavItemsData = [
  {
    title: "My",
    isActive: false,
  },
  {
    title: "Profile",
    isActive: false,
  },
  {
    title: "Password",
    isActive: false,
  },
  {
    title: "Team",
    isActive: false,
  },
  {
    title: "Plan",
    isActive: false,
  },
  {
    title: "Roles",
    isActive: true,
  },
  {
    title: "Notifications",
    isActive: false,
  },
  {
    title: "Integrations",
    isActive: false,
  },
  {
    title: "API",
    isActive: false,
  },
];

const settingsNavItems = settingsNavItemsData.map(
  ({ title, isActive }, index) => (
    <li
      className={`font-medium text-gray-800 text-sm  px-4 py-2.5 ${
        isActive ? "bg-gray-50" : "bg-white"
      } cursor-pointer hover:bg-gray-50`}
      key={index}
      tabIndex={0}
    >
      {title}
    </li>
  )
);

const SettingsNav = () => {
  return (
    <ul className="flex border border-gray-300 rounded-lg md:w-fit divide-x divide-gray-300 overflow-x-scroll mb-9 ">
      {settingsNavItems}
    </ul>
  );
};

export default SettingsNav;
