import Header from "./components/header/Header";
import Chat from "./components/chat/Chat";
import "./App.css";
import { createContext, useState } from "react";
import ReactSwitch from "react-switch";

export const ThemeContext = createContext(null);

function App() {
  

  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className="App" id={theme}>
        <div className="app-header__container">
          <div className="header-position">
            <Header />
          </div>
          <div className="switch-theme">
            <ReactSwitch onChange={toggleTheme} checked={theme === "dark"} />
          </div>
        </div>
        <Chat />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
