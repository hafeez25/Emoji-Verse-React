import { useContext, useEffect, useState } from "react";
import Card from "../components/Card";
import Navigation from "../components/Navigation";
import Header from "../components/Header";
import { EmojisContext } from "../context/emoji-context";
import "./Home.css";
const Home = () => {
  const emojisCtx = useContext(EmojisContext);
  useEffect(() => {
    emojisCtx.changeTheme();
  }, []);
  return (
    <div
      className={`  min-w-full min-h-screen mx-auto	 ${
        emojisCtx.theme
      } m-auto dark:bg-black  ${
        emojisCtx.theme === "dark" ? "bg-black" : "bg-white"
      }`}
    >
      <Header />
      <Navigation />

      <div className="max-w-screen-lg">
        {emojisCtx.emojis.length === 0 ? (
          <div className=" flex flex-row justify-center my-10 mx-auto text-black bg-white dark:text-white dark:bg-black">
            <p>No emojis found! ❌</p>
            <p>Please enter valid keywords</p>
          </div>
        ) : (
          <div>
            <div className="home  grid grid-cols-2 mt-6 gap-1  sm:gap-3 px-1 sm:px-3 md:grid-cols-4 sm:grid-cols-3  dark:bg-black dark:text-white">
              {emojisCtx.emojis.map((data) => {
                return <Card data={data} />;
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
