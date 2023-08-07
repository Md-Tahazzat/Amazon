import { FaSistrix } from "react-icons/fa";

const SearchInput = () => {
  return (
    <div className="w-full px-2 md:px-4 flex items-center">
      <input
        className="w-full py-1 lg:py-2 text-black my-1 rounded-s-md px-3 lg:px-4 border-2 border-r-0 border-[#232f3e] focus:outline-none  font-semibold focus:border-orange-500"
        type="text"
        name="searchInput"
        id="searchInput"
        placeholder="Search Amazon"
      />
      <label
        htmlFor="searchInput"
        className="text-2xl bg-orange-400 hover:bg-orange-500 duration-150 py-1 lg:py-2 px-2 rounded-e-md border-2 border-l-0 border-[#232f3e]"
      >
        <FaSistrix />
      </label>
    </div>
  );
};

export default SearchInput;
