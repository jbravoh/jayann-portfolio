const breakpoints = {
  sm: "40rem",
  md: "48rem",
  lg: "64rem",
};

export const theme = {
  color: {
    white: "#000000",
    black: "#FFFFFF",
    yellow: "#FFE500",
    grey: {
      light: "#E8E8E8",
      soft: "F9F9F9",
    },
  },
  mq: {
    sm: `(min-width: ${breakpoints.sm})`,
    md: `(min-width: ${breakpoints.md})`,
    lg: `(min-width: ${breakpoints.lg})`,
  },
};
