import styled from "styled-components";
import { Device } from "../../Utils/Device";

export const CreateCourseWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-shrink: 1;
  height: 100vh;
  margin: 0;
`;

export const LogoBig = styled.img`
  min-width: 80px;
  margin: 1em;

  @media ${Device.tablet} {
    min-width: 200px;
    min-height: 100px;
    margin-right: 30em;
  }

  @media ${Device.laptop} {
    margin-right: 50em;
  }
`;

export const TopGreyCorner = styled.div`
  @media ${Device.tablet} {
    height: 214px;
    width: 250px;
    background-image: url(${require(`../../Components/Images/TopGreyCorner.svg`)});
    position: absolute;
    top: 0;
    right: 0;
    z-index: -1;
    margin: 0;
  }
`;

export const DownGreyCorner = styled.div`
  background-image: url(${require(`../../Components/Images/DownGreyCorner.svg`)});
  height: 220px;
  width: 150px;
  position: absolute;
  bottom: 0;
  z-index: -1;
  left: 0;
  margin: 0;
  padding: 0;

  @media ${Device.tablet} {
    height: 300px;
    width: 300px;
  }
`;

export const CreateCourseHeader = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  text-align: center;
  justify-content: center;
`;
