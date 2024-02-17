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
            return <Card data={data} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Home;
