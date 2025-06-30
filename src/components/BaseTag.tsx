import CheckIcon from "../assets/react-icons/CheckIcon";

const BaseTag = ({ title }: { title: "active" | "inactive" }) => {
  return (
    <span
      className={`flex items-center gap-1 text-xs rounded-full py-0.5 px-2 ${
        title === "active"
          ? "bg-green-300/20 text-green-700"
          : "bg-orange-400 text-white"
      } w-[66px]`}
    >
      {title === "active" && <CheckIcon />}
      {title}
    </span>
  );
};

export default BaseTag;
