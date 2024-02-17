import { useState } from "react";
import * as data from "emoji-api";
import Card from "../components/Card";
import Navigation from "../components/Navigation";
const Home = () => {
  const [emojis, setEmojis] = useState<data.Emoji[]>(data.all());
  return (
    <div>
      <Navigation />
      <div>
        <div className=" grid grid-cols-2 mt-6 gap-1  sm:gap-3 px-1 sm:px-3 md:grid-cols-4 sm:grid-cols-3  dark:bg-black dark:text-white">
          {emojis.map((data) => {
            console.log(data);
            return (
              <div
                className=" rounded-md flex flex-col items-center gap-2 text-center shadow-md p-8 hover:shadow-lg dark:hover:transiton dark:bg-slate-900 dark:text-white dark:hover:bg-slate-600 dark:hover:transition "
                key={data.codePoints[0]}
              >
                <span className="text-6xl ">{data.emoji}</span>
                <span className="text-xl capitalize pt-3">{data.name}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Home;
