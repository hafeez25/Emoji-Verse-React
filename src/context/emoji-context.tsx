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
  searchEmoji: () => {},
  filterCategory: () => {},
  theme: "light",
  changeTheme: () => {},
});

export { EmojisContext };

const EmojiContextProvider: React.FC<React.PropsWithChildren<{}>> = (props) => {
  const [emojis, setEmojis] = useState<data.Emoji[]>(data.all());
  const [theme, setTheme] = useState<string>("light");
  const searchEmojiHandler = (keyword: string) => {
    if (keyword !== null) {
      const term = keyword.toUpperCase().trim();

      const filteredData = data
        .all()
        .filter((d) => d.name.toUpperCase().includes(term));

      setEmojis(filteredData);
    }
  };
  const filterCategoryHandler = (category: string) => {
    window.scrollTo({
      top: 200,
      behavior: "smooth",
    });

    if (category === "all") {
      setEmojis(data.all());
      return;
    }

    const emojiData: Record<data.EmojiGroup, data.Emoji[]> = data.arrange();

    if ((category as keyof typeof emojiData) in emojiData) {
      const filterEmojis: data.Emoji[] = emojiData[category as data.EmojiGroup];
      setEmojis(filterEmojis);
      console.log(category);
    } else {
      // Handle the case where the category is not found
      console.error(`Category "${category}" not found`);
    }
  };

  const changeThemeHandler = () => {
    console.log(Math.random());
    const isTheme = localStorage.getItem("theme");
    console.log(isTheme);

    if (!isTheme) {
      localStorage.setItem("theme", "light");
      setTheme("light");
    } else {
      setTheme(isTheme == "light" ? "dark" : "light");
      localStorage.setItem("theme", theme);
    }
  };

  const contextValue: EmojiContextObj = {
    emojis: emojis,
    categories: Object.keys(data.arrange()),
    searchEmoji: searchEmojiHandler,
    filterCategory: filterCategoryHandler,
    theme: theme,
    changeTheme: changeThemeHandler,
  };
  return (
    <EmojisContext.Provider value={contextValue}>
      {props.children}
    </EmojisContext.Provider>
  );
};
export default EmojiContextProvider;
