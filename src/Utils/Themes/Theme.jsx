import Color from "../Color";
import Bin from "../../Components/Images/Bin.svg";
import BinWhite from "../../Components/Images/BinWhite.svg";

export const lightTheme = {
  body: `${Color.mainWhite}`,
  text: `${Color.mainNavy}`,
  ButtonBody: `${Color.mainNavy}`,
  ButtonText: `${Color.mainWhite}`,
  VerbText: `${Color.mainNavy}`,
  toggleBorder: `${Color.mainBlue}`,
  Bin: `${Bin}`,
  FormHelperText: "#000000",
};

export const darkTheme = {
  body: `${Color.mainNavy}`,
  text: `${Color.mainWhite}`,
  ButtonBody: `${Color.mainWhiteGrey}`,
  ButtonText: `${Color.mainNavy}`,
  VerbText: `${Color.mainWhite}`,
  toggleBorder: `${Color.mainYellow}`,
  Bin: `${BinWhite}`,
  FormHelperText: `${Color.mainWhite}`,
};
