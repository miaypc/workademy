import styled from "styled-components";
import Color from "../Utils/Color";

export const PageContainer = styled.div`
  background-color: pink;
  display: flex;
`;

export const LeftBar = styled.div`
  background-color: rgb(215, 250, 215);
  width: 20%;
`;

export const RightSection = styled.div`
  background-color: rgb(245, 199, 214);
  width: 80%;
`;

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
