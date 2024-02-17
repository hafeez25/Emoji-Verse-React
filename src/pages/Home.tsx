import { useContext, useState } from "react";
import Card from "../components/Card";
import Navigation from "../components/Navigation";
import { EmojisContext } from "../context/emoji-context";
const Home = () => {
  const emojisCtx = useContext(EmojisContext);
  return (
    <div>
      <Navigation />
      <div>
        <div className=" grid grid-cols-2 mt-6 gap-1  sm:gap-3 px-1 sm:px-3 md:grid-cols-4 sm:grid-cols-3  dark:bg-black dark:text-white">
          {emojisCtx.emojis.map((data) => {
            return <Card data={data} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Home;
