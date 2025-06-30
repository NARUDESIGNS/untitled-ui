import PlayButtonIcon from "../../assets/icons/play-button.svg";
import LadySmilingImg from "../../assets/images/smiling-lady.png";

const NewFeatureBox = () => {
  return (
    <div className="flex flex-col gap-1 px-4 py-5 rounded-lg bg-gray-50 text-sm">
      <p className="text-gray-900">New features available!</p>
      <p className="mb-3 text-gray-500">
        Check out the new dashboard view. Pages now load faster.
      </p>
      <div className="relative mb-3">
        <img
          src={LadySmilingImg}
          alt="Lady smiling image"
          className="object-cover rounded"
        />
        <img
          src={PlayButtonIcon}
          alt="play button image"
          className="absolute left-3 bottom-3 cursor-pointer"
        />
      </div>
      <div className="flex gap-3">
        <button className="text-gray-500 cursor-pointer">Dismiss</button>
        <a href="#">What's new?</a>
      </div>
    </div>
  );
};

export default NewFeatureBox;
