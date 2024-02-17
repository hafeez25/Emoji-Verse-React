import { NavLink } from "react-router-dom";
import { useContext, useState } from "react";
import { EmojisContext } from "../context/emoji-context";

const Navigation = () => {
  const emojiCtx = useContext(EmojisContext);
  return (
    <nav className=" bg-white flex flex-wrap justify-center py-3  sticky top-0 backdrop-blur-sm bg-white/30  dark:backdrop-blur-sm dark:bg-black/30   ">
      <li
        className=" font-medium   rounded-lg  list-none capitalize my-1 "
        onClick={() => emojiCtx.filterCategory("all")}
      >
        <NavLink
          to="/all"
          className={(navData) =>
            navData.isActive
              ? "bg-slate-100 text-slate-900 px-3 py-2 rounded-lg dark:bg-slate-900 dark:text-white"
              : "px-3 py-2  dark:text-white dark:hover:bg-slate-900 dark:hover:text-white text-slate-700 hover:rounded-lg  hover:bg-slate-100 hover:text-slate-900"
          }
          key={"All"}
        >
          All
        </NavLink>
      </li>

      {emojiCtx.categories.map((category) => {
        return (
          <li
            className="  font-medium   rounded-lg  list-none capitalize my-1 "
            onClick={() => emojiCtx.filterCategory(category)}
          >
            <NavLink
              to={`/${category.replace(" & ", "-").toLowerCase()}`}
              className={(navData) =>
                navData.isActive
                  ? "bg-slate-100 text-slate-900 px-3 py-2 rounded-lg dark:bg-slate-900 dark:text-white"
                  : "px-3 py-2  dark:text-white dark:hover:bg-slate-900 dark:hover:text-white text-slate-700 hover:rounded-lg  hover:bg-slate-100 hover:text-slate-900"
              }
              //   key={category : data.Emoji}
            >
              {category.replace(" & ", "-")}
            </NavLink>
          </li>
        );
      })}
    </nav>
  );
};

export default Navigation;
