import styled from "styled-components";
import Color from "../Utils/Color";
import { createGlobalStyle } from "styled-components";

export const GlobalColor = createGlobalStyle`
 
  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    transition: all 0.25s linear;
  }`;


export const PageContainer = styled.div`
  > div {
    flex-direction: row;
    display: flex;
    > div:nth-child(2) {
      flex-grow: 1;
    }
  }
`;

export const LeftBar = styled.div`
  flex-basis: 190px;
  flex-grow: 0;
  flex-shrink: 0;
`;

//I will leave right section here in case we will need to add some theme to it later
export const RightSection = styled.div``;

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 5px 10px;
`;

export const Header = styled.div`
  font-size: 30px;
  text-align: center;
`;

export const TextHeader = styled.div`
  font-size: 40px;
  text-align: center;
  font-weight: bold;
  color: ${Color.mainNavy};
  margin-top: 2em;
`;

export const TextSmallHeader = styled(TextHeader)`
  font-size: 30px;
  margin: 2em 3em;
`;
