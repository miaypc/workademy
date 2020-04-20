import styled from "styled-components";
import Color from "../Utils/Color";

const Button = styled.button`
  cursor: pointer;
  font-family: sans-serif;
  text-align: center;
  text-decoration: none;
  border: none;

  &:focus {
    outline: none;
  }
`;

const VerbsButton = styled(Button)`
  color: ${Color.mainNavy};
  background: ${Color.mainWhiteGrey};
  font-size: 0.9em;
  padding: 0.5em 1em;
  border-radius: 25px;
`;

const NavigationButton = styled(Button)`
  color: ${Color.mainWhite};
  background: ${Color.mainNavy};
  font-size: 1.2em;
  padding: 0.3em 1.3em;
  border-radius: 25px;
`;

const SignButton = styled(Button)`
  color: ${Color.mainWhite};
  background: ${Color.mainNavy};
  font-size: 3em;
  padding: 0.01em 0.8em 0.08em 0.8em;
  border-radius: 14px;
`;

const YellowButton = styled(Button)`
  color: ${Color.mainNavy};
  background: ${Color.mainYellow};
  font-size: 1.6em;
  padding: 0.4em 1.5em;
  border-radius: 7px;
`;

const SaveButton = styled(YellowButton)`
  font-size: 0.9em;
  padding: 0.7em 0.7em;
`;

const ContentButton = styled(VerbsButton)`
  font-size: 1.2em;
  border-radius: 1px;
  margin-left: 3%;
  padding: 0.8em 0.8em;
`;

export {
  Button,
  VerbsButton,
  NavigationButton,
  SignButton,
  YellowButton,
  SaveButton,
  ContentButton,
};
