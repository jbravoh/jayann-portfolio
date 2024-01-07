// import original module declarations
import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    color: {
      white: string;
      black: string;
      yellow: string;
      grey: {
        light: string;
        soft: string;
      };
    };
    mq: {
      small: string;
      medium: string;
      large: string;
    };
  }
}
