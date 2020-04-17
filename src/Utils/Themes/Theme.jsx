import Color from "../Color";

export const lightTheme = {
  body: `${Color.mainWhite}`,
  text: `${Color.mainNavy}`,
  toggleBorder: `${Color.mainBlue}`,
  gradient: `"linear-gradient(${Color.mainWhiteGrey}, ${Color.mainBlue})"`,
};

export const darkTheme = {
  body: `${Color.mainNavy}`,
  text: `${Color.mainWhite}`,
  toggleBorder: `${Color.mainWhiteGrey}`,
  gradient: `"linear-gradient(${Color.mainBlue}, ${Color.mainWhiteGrey})"`,
};
