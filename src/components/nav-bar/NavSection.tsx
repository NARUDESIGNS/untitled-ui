import BarChartIcon from "../../assets/react-icons/BarChartIcon";
import CheckSquareIcon from "../../assets/react-icons/CheckSquareIcon";
import DoubleUsersIcon from "../../assets/react-icons/DoubleUsersIcon";
import FlagIcon from "../../assets/react-icons/FlagIcon";
import HomeIcon from "../../assets/react-icons/HomeIcon";
import LayersIcon from "../../assets/react-icons/LayersIcon";
import LifeBuoyIcon from "../../assets/react-icons/LifeBuoyIcon";
import SettingsIcon from "../../assets/react-icons/SettingsIcon";
import NavItem from "./NavItem";

const navItemsData = [
  {
    title: "Home",
    icon: <HomeIcon className="w-6 h-6" />,
  },
  {
    title: "Dashboard",
    icon: <BarChartIcon className="w-6 h-6" />,
    count: 10,
  },
  {
    title: "Projects",
    icon: <LayersIcon className="w-6 h-6" />,
  },
  {
    title: "Tasks",
    icon: <CheckSquareIcon className="w-6 h-6" />,
  },
  {
    title: "Reporting",
    icon: <FlagIcon className="w-6 h-6" />,
  },
  {
    title: "Users",
    icon: <DoubleUsersIcon className="w-6 h-6" />,
  },
  {
    title: "Support",
    icon: <LifeBuoyIcon className="w-6 h-6" />,
  },
  {
    title: "Settings",
    icon: <SettingsIcon className="w-6 h-6" />,
    isActive: true,
  },
];

const navItems = navItemsData.map((item) => (
  <NavItem
    icon={item.icon}
    title={item.title}
    count={item?.count}
    isActive={item?.isActive}
    key={item.title}
  />
));

const NavSection = () => {
  return <div className="flex flex-col gap-2">{navItems}</div>;
};

export default NavSection;
