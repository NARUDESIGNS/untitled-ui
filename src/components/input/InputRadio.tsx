interface InputRadioProps {
  /** Radio id */
  id: string;
  /** Radio is checked */
  isChecked?: boolean;
  /** Label */
  label: string;
  /** Hint */
  hint?: string;
  /** Name */
  name: string;
}

const InputRadio = ({ label, hint, name = "radio", id }: InputRadioProps) => {
  return (
    <div className="flex items-start gap-2">
      <input type="radio" name={name} id={id} className="accent-violet-500" />
      <div className="-mt-1">
        <label
          htmlFor={name}
          id={id}
          className="text-gray-900 font-medium  cursor-pointer"
        >
          {label}
          <span className="text-gray-500 font-normal block">{hint}</span>
        </label>
      </div>
    </div>
  );
};

export default InputRadio;
