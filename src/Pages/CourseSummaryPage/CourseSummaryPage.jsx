import React from "react";
import styled from "styled-components";
// importing styled components for page setup
import { RightSection, ButtonsContainer, BlueTobBar } from "../StylePages";
import ModuleSelect from "../../Components/Select/ModuleSelect";
import "./CourseSummaryPage.scss";
import Lecture from "../../Components/lectureContainer/Lecture";
import {
  ResponsiveYellowButton,
  CenterButtonContainer,
} from "../../Components/ResponsiveYellowButton";
import { NavigationButton } from "../../Components/styleButton";
import Color from "../../Utils/Color";

const LecturesContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const SummaryBlueTobBar = styled.div`
  height: 70px;
  font-size: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${Color.mainNavy};
  color: ${Color.mainWhite};
`;

function CourseSummaryPage(props) {
  const [goalId, setGoalId] = React.useState(10);

  const handleChange = (event) => {
    setGoalId(event.target.value);
  };
  return (
    <RightSection>
      <SummaryBlueTobBar>
        This is how your course can look like
      </SummaryBlueTobBar>
      <ModuleSelect handleChange={handleChange} goalId={goalId}></ModuleSelect>
      <LecturesContainer>
        <Lecture></Lecture>
        <Lecture></Lecture>
        <Lecture></Lecture>
      </LecturesContainer>
      <CenterButtonContainer>
        <ResponsiveYellowButton onClick={props.nextStep}>
          Publish your course
        </ResponsiveYellowButton>
      </CenterButtonContainer>
      <ButtonsContainer>
        <NavigationButton onClick={props.previousStep}>
          Previous Step
        </NavigationButton>
      </ButtonsContainer>
    </RightSection>
  );
}

export default CourseSummaryPage;
