import Color from "../Color";

export const lightTheme = {
  body: `${Color.mainWhite}`,
  text: `${Color.mainNavy}`,
  toggleBorder: `${Color.mainNavy}`,
  gradient: `"linear-gradient(${Color.mainWhiteGrey}, ${Color.mainBlue})"`,
};

export const darkTheme = {
  body: `${Color.mainNavy}`,
  text: `${Color.mainWhite}`,
  toggleBorder: `${Color.mainYellow}`,
  gradient: `"linear-gradient(${Color.mainBlue}, ${Color.mainWhiteGrey})"`,
};
