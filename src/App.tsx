import EmojiContextProvider from "./context/emoji-context";
import Home from "./pages/Home";

const App = () => {
  return (
    <div>
      <EmojiContextProvider>
        <Home />
      </EmojiContextProvider>
    </div>
  );
};

export default App;
