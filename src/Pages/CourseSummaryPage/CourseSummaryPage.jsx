import React from "react";

// importing styled components for page setup
import { RightSection, ButtonsContainer } from "../StylePages";
import ModuleSelect from "../../Components/Select/ModuleSelect";
import "./CourseSummaryPage.scss";
import Lecture from "../../Components/lectureContainer/Lecture";

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
      <ModuleSelect handleChange={handleChange} goalId={goalId}></ModuleSelect>
      <LecturesContainer>
        <Lecture></Lecture>
        <Lecture></Lecture>
        <Lecture></Lecture>
      </LecturesContainer>
      <ButtonsContainer>
        <button onClick={props.previousStep}>Previous Step</button>
        <button onClick={props.nextStep}>Publish</button>
      </ButtonsContainer>
    </RightSection>
  );
}

export default CourseSummaryPage;
