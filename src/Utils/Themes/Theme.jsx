import Color from "../Color";
import Pensil from "../../Components/Images/Pensil.svg";
import PensilWhite from "../../Components/Images/PensilWhite.svg";

export const PensilLight = `${Pensil}`;
export const PensilDark = `${PensilWhite}`;

export const lightTheme = {
  body: `${Color.mainWhite}`,
  text: `${Color.mainNavy}`,
  ButtonBody: `${Color.mainNavy}`,
  ButtonText: `${Color.mainWhite}`,
  NavButtonBody: `${Color.mainNavy}`,
  VerbText: `${Color.mainNavy}`,
  InputText: `${Color.mainNavy}`,
  toggleBorder: `${Color.mainBlue}`,
};

export const darkTheme = {
  body: `${Color.mainNavy}`,
  text: `${Color.mainWhite}`,
  NavButtonBody: `${Color.mainYellow}`,
  ButtonBody: `${Color.mainWhiteGrey}`,
  ButtonText: `${Color.mainNavy}`,
  VerbText: `${Color.mainWhite}`,
  InputText: `${Color.mainWhite}`,
  toggleBorder: `${Color.mainYellow}`,
  FormHelperText: `${Color.mainWhite}`,
};
