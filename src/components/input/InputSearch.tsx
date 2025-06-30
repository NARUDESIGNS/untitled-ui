import SearchIcon from "../../assets/react-icons/SearchIcon";

const SearchBar = () => {
  return (
    <div className="flex items-center gap-2 px-3.5 py-3 border border-purple-300 ring-4 ring-purple-300/50 rounded-lg">
      <SearchIcon className="w-5 h-5 flex-none" />
      <input type="text" className="h-full outline-0" />
    </div>
  );
};

export default SearchBar;
