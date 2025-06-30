import CheckIcon from "../assets/react-icons/CheckIcon";

const BaseTag = ({ title }: { title: "active" | "inactive" }) => {
  return (
    <span
      className={`flex gap-1 text-xs rounded-full ${
        title === "active"
          ? "bg-green-50 text-green-700"
          : "bg-orange-600 text-white"
      }`}
    >
      {title === "active" && <CheckIcon />}
      {title}
    </span>
  );
};

export default BaseTag;
