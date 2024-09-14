import { useEffect, useState } from "react";
import ThemeContext from "./themeContext";

interface ThemeProviderProps {
  children: React.ReactNode;
}

const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const themeStorage =
    typeof localStorage !== "undefined" && localStorage.getItem("theme")
      ? JSON.parse(localStorage.getItem("theme") as string)
      : false;
  const [darkTheme, setDarkTheme] = useState(themeStorage);
  const [renderComponent, setRenderComponent] = useState(false);

  useEffect(() => {
    setRenderComponent(true);
  }, []);

  if (!renderComponent) return <></>;

  return (
    <ThemeContext.Provider value={{ darkTheme, setDarkTheme }}>
      <div className={`${darkTheme ? "dark" : ""} min-h-screen`}>
        <div className="dark:text-primary-50 text-primary-960 dark:bg-primary-970 ">
          {children}
        </div>
      </div>
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
