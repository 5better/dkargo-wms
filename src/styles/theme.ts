import { DefaultTheme } from "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    common: {
      flex: string;
      flexColumn: string;
      flexCenter: string;
    };
    colors: {
      black: string;
      white: string;
      grey: string;
      green: string;
      orange10: string;
      orange20: string;
      orange30: string;
      ocean10: string;
      ocean20: string;
      ocean30: string;
      textDefault: string;
    };
  }
}

const utils = {
  hexToRgb: (hex: string, opacity: number) => {
    const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;

    hex = hex.replace(shorthandRegex, function (m, r, g, b) {
      return r + r + g + g + b + b;
    });

    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);

    return result
      ? `rgba(${parseInt(result[1], 16)}, ${parseInt(
          result[2],
          16
        )}, ${parseInt(result[3], 16)}, ${opacity})`
      : "rgb(0, 0, 0)";
  },
};

// pixel > rem
// export const pxToRem = (size: number) => `${size / 16}rem`;
const colors = {
  black: "#14042d",
  white: "#fff",
  textDefault: "#14042d",
  grey: "#f9f9f9",
  green: "#00cfc3",
  orange10: "#ff9c09",
  orange20: "#ff8906",
  orange30: "#ffb546",
  ocean10: "#00B5AA",
  ocean20: "#08978E",
  ocean30: "#009CBE",
};

// common property
const common = {
  flex: `
    display: flex;
    align-items: center;
  `,
  flexColumn: `
    display: flex;
    flex-direction: column;
  `,
  flexCenter: `
    display: flex;
    justify-content: center;
    align-items: center;
  `,
};

const theme: DefaultTheme = {
  colors,
  common,
};

export { theme, utils };
