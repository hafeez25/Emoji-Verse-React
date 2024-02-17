import { useContext } from "react";
import ToggleButton from "./ToggleButton";
import { EmojisContext } from "../context/emoji-context";
const Header = () => {
  const emojisCtx = useContext(EmojisContext);
  return (
    <div className="mx-auto flex flex-col justify-end items-end">
      <div className="dark:bg-black mx-auto bg-white">
        <h1 className="font-medium  text-5xl  py-2  text-sky-600  backdrop-blur-sm bg-white/30 dark:backdrop-blur-sm dark:bg-black/30   ">
          Emoji-Verse 👾
        </h1>
      </div>

      <div className=" rounded-md shadow-md  top flex gap-2 py-12 mx-auto">
        <div className="relative">
          <div className="absolute inset-y-0 left-2  pr-3 flex items-center">
            <svg
              className="h-5 w-5 text-gray-400"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fill-rule="evenodd"
                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                clip-rule="evenodd"
              />
            </svg>
          </div>
          <input
            type="search"
            className="form-input py-2 pl-8 pr-2 block w-full leading-5 rounded-md transition duration-150 ease-in-out bg-white border border-gray-300 placeholder-gray-500 focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:shadow-outline-blue"
            placeholder="Search"
            onChange={(e) => {
              emojisCtx.searchEmoji(e.target.value);
            }}
          />
        </div>
        <ToggleButton />
      </div>
    </div>
  );
};

export default Header;
