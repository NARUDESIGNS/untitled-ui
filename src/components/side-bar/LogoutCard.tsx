import LogoutImg from "../../assets/images/LogoutImg.jpg";
import LogoutIcon from "../../assets/react-icons/LogoutIcon";

const LogoutCard = () => {
  return (
    <div className="flex gap-3 text-sm py-6 pb-0 border-solid border-gray-200 border-t">
      <img
        src={LogoutImg}
        alt="Image of lady on white"
        className="rounded-full object-cover w-10 h-10"
      />
      <div>
        <p className="text-900">Olivia Rhye</p>
        <p className="text-700">olivia@untitledui.com</p>
      </div>
      <LogoutIcon className="ml-auto cursor-pointer flex-none w-8 h-8" />
    </div>
  );
};

export default LogoutCard;
