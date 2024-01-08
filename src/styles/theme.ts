import { DefaultTheme } from "styled-components";

const color = {
  primary100: "#DB4D6E",
  primary200: "rgb(219 77 110)",

  white100: "#fff",
  white200: "#E9ECEF",
  white300: "rgb(65 66 71)",
  white400: "#FAFAFA",

  black100: "#35363A",
  black200: "#27272B",
  black300: "#343A40",

  gray100: "#929292",
  gray200: "rgb(65 66 71)",
  gray300: "rgb(222 226 230)",

  brown100: "#603C47",

  gradient100:
    "linear-gradient(90deg, #A8164A 0%, #A8164A 0.01%, #C2255C 45.83%, #F0365C 100%)",

  tableHeaderBg: "#f8f9fa",
};

const hover = {
  primary100: "#DB4D6E",
  sencondary100: "#27272B",
};

const spacing = {
  padding100: "8px 16px",
  margin000: "8px",
  margin100: "16px",
  margin200: "24px",
  margin300: "32px",

  sidebarLargeDesktop: {
    left: "215px",
    top: "52px",
    margin: "52px 0 0 215px",
  },
  sidebarDesktop: {
    left: "45px",
    top: "52px",
    margin: "52px 0 0 45px",
  },
  sidebarTablet: {
    left: "0px",
    top: "0px",
    margin: "52px 0 0 0",
  },
};

const font = {
  getSize: (size: number) => `${size}px`,
};

const media = {
  tabletS: "768px",
  tabletB: "992px",
  desktop: "1200px",
};

const theme: DefaultTheme = {
  color,
  hover,
  spacing,
  font,
  media,
};

export default theme;
