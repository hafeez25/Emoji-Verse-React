import React, { useState } from "react";
import * as data from "emoji-api";

type EmojiContextObj = {
  emojis: data.Emoji[];
  searchEmoji: (keyword: string) => void;
  filterCategory: (category: string) => void;
  theme: string;
  changeTheme: () => void;
};

const EmojisContext = React.createContext<EmojiContextObj>({
  emojis: [],
  searchEmoji: (keyword: string) => {},
  filterCategory: (category: string) => {},
  theme: "light",
  changeTheme: () => {},
});

const EmojiContextProvider: React.FC<React.PropsWithChildren<{}>> = (props) => {
  const [emojis, setEmojis] = useState<data.Emoji[]>(data.all());
  const searchEmojiHandler = (keyword: string) => {};
  const filterCategoryHandler = (categroy: string) => {};
  const changeThemeHandler = () => {};

  const contextValue: EmojiContextObj = {
    emojis: emojis,
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
