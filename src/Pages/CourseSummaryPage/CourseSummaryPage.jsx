import React from "react";

// importing styled components for page setup
import { RightSection, ButtonsContainer, BlueTobBar } from "../StylePages";
import ModuleSelect from "../../Components/Select/ModuleSelect";
import "./CourseSummaryPage.scss";
import Lecture from "../../Components/lectureContainer/Lecture";
import { NavigationButton } from "../../Components/styleButton";

import styled from "styled-components";
const LecturesContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

function CourseSummaryPage(props) {
  const [goalId, setGoalId] = React.useState(10);

  const handleChange = (event) => {
    setGoalId(event.target.value);
  };
  return (
    <RightSection>
      <BlueTobBar>This is how your course can look like</BlueTobBar>
      <ModuleSelect handleChange={handleChange} goalId={goalId}></ModuleSelect>
      <LecturesContainer>
        <Lecture></Lecture>
        <Lecture></Lecture>
        <Lecture></Lecture>
      </LecturesContainer>
      <ButtonsContainer>
        <NavigationButton onClick={props.previousStep}>
          Previous Step
        </NavigationButton>
        <button onClick={props.nextStep}>Publish</button>
      </ButtonsContainer>
    </RightSection>
  );
}

export default CourseSummaryPage;
