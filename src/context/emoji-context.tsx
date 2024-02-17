import React, { useState } from "react";
import * as data from "emoji-api";

type EmojiContextObj = {
  emojis: data.Emoji[];
  categories: string[];
  searchEmoji: (keyword: string) => void;
  filterCategory: (category: string) => void;
  theme: string;
  changeTheme: () => void;
};

const EmojisContext = React.createContext<EmojiContextObj>({
  emojis: [],
  categories: [],
  searchEmoji: (keyword: string) => {},
  filterCategory: (category: string) => {},
  theme: "light",
  changeTheme: () => {},
});

export { EmojisContext };

const EmojiContextProvider: React.FC<React.PropsWithChildren<{}>> = (props) => {
  const [emojis, setEmojis] = useState<data.Emoji[]>(data.all());
  const searchEmojiHandler = (keyword: string) => {};
  const filterCategoryHandler = (category: string) => {
    window.scrollTo({
      top: 200,
      behavior: "smooth",
    });

    if (category === "all") {
      setEmojis(data.all());
      return;
    }

    const filterEmojis: data.Emoji[] = data.arrange().Symbols;

    setEmojis(filterEmojis);
    console.log(category);
  };

  const changeThemeHandler = () => {};

  const contextValue: EmojiContextObj = {
    emojis: emojis,
    categories: Object.keys(data.arrange()),
    searchEmoji: searchEmojiHandler,
    filterCategory: filterCategoryHandler,
    theme: "light",
    changeTheme: changeThemeHandler,
  };
  return (
    <EmojisContext.Provider value={contextValue}>
      {props.children}
    </EmojisContext.Provider>
  );
};
export default EmojiContextProvider;
