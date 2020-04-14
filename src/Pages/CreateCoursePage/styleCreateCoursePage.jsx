import styled from "styled-components";
import Color from "../../Utils/Color";
import { LeftCorner } from "./styleCreateCoursePage";

export const CreateCourseWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-grow: 1;
  max-width: 100%;
  max-height: 100%;
  margin: 0;
  background-image: url(${require(`../../Components/Images/DownGreyCorner.svg`)});
  background-position: left bottom;
  background-size: 250px;
  background-repeat: no-repeat;
`;

export const CreateCourseHeader = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 100%;
  max-height: 50%;
  text-align: center;
  margin: 0;
`;
