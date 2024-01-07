import { DefaultTheme } from "styled-components";

const breakpoints = ["40rem", "48rem", "64rem"];

export const theme: DefaultTheme = {
  color: {
    white: "#FFFFFF",
    black: "#000000",
    yellow: "#FFE500",
    grey: {
      light: "#E8E8E8",
      soft: "F9F9F9",
    },
  },
  mq: {
    small: `@media screen and (max-width: ${breakpoints[0]})`,
    medium: `@media screen and (max-width: ${breakpoints[1]})`,
    large: `@media screen and (max-width: ${breakpoints[2]})`,
  },
};
