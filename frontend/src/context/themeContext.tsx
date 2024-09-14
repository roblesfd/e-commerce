import { createContext } from "react";

interface ThemeContextProps {
  darkTheme: boolean;
  setDarkTheme: React.Dispatch<React.SetStateAction<boolean>>;
}

const ThemeContext = createContext<ThemeContextProps>({
  darkTheme: true,
  setDarkTheme: () => null,
});

export default ThemeContext;
