import CheckIcon from "../assets/react-icons/CheckIcon";

const BaseTag = ({
  title,
  className,
}: {
  title: "active" | "inactive";
  className: string;
}) => {
  return (
    <span
      className={`flex items-center gap-1 text-xs rounded-full py-0.5 px-2 ${
        title === "active"
          ? "bg-green-300/20 text-green-700"
          : "bg-orange-400 text-white"
      } w-[66px] ${className}`}
    >
      {title === "active" && <CheckIcon />}
      {title}
    </span>
  );
};

export default BaseTag;
