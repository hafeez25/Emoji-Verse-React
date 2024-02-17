import React from "react";
import * as data from "emoji-api";
const Card: React.FC<{
  data: data.Emoji;
}> = (props) => {
  return (
    <div
      className=" rounded-md flex flex-col items-center gap-2 text-center shadow-md p-8 hover:shadow-lg dark:hover:transiton dark:bg-slate-900 dark:text-white dark:hover:bg-slate-600 dark:hover:transition "
      //   key={props.data.codePoints}
    >
      <span className="text-6xl ">{props.data.emoji}</span>
      <span className="text-xl capitalize pt-3">{props.data.name}</span>
    </div>
  );
};

export default Card;
