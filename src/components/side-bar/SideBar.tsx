import InputSearch from "../input/InputSearch";
import LogoMark from "../LogoMark";
import NavSection from "../nav-bar/NavSection";
import LogoutCard from "./LogoutCard";
import NewFeatureBox from "./NewFeatureBox";

const SideBar = () => {
  return (
    <div className="flex flex-col flex-none gap-6 bg-white w-[280px] px-4 py-8 h-dvh overflow-y-scroll scroll-smooth fixed">
      <LogoMark />
      <InputSearch />
      <NavSection />
      <NewFeatureBox />
      <LogoutCard />
    </div>
  );
};

export default SideBar;
