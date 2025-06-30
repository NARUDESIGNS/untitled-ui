import type { ReactElement } from "react";

const InputText = ({ icon }: { icon?: ReactElement }) => {
  return (
    <div className="flex items-center gap-1.5 py-2.5 px-3.5 border border-gray-300 rounded-lg">
      {icon}
      <input type="text" className="h-full w-full outline-0 text-gray-900" />
    </div>
  );
};

export default InputText;
