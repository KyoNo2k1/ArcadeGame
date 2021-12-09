import { createContext } from "react";

export const backgroundColors = {
  primary: "primary",
  blue: "blue",
  green: "green",
  white: "white"
};

export const BackgroundColorContext = createContext({
  color: backgroundColors.white,
  changeColor: (color) => {},
});
