import Logo from "../assets/Logomark.svg";
import HamburgerIcon from "../assets/react-icons/HamburgerIcon";

const LogoMark = ({ className }: { className?: string }) => {
  return (
    <div
      className={`flex items-center gap-2 cursor-pointer bg-white ${className}`}
    >
      <img src={Logo} alt="Logo mark" />
      <p className="text-gray-900 text-lg font-medium">Untitled UI</p>
      <span className="p-1 sm:hidden ml-auto cursor-pointer">
        <HamburgerIcon />
      </span>
    </div>
  );
};

export default LogoMark;
