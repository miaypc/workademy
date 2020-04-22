import React from "react";
import styled from "styled-components";
// importing styled components for page setup
import { RightSection, ButtonsContainer } from "../StylePages";
import ModuleSelect from "../../Components/Select/ModuleSelect";
import "./CourseSummaryPage.scss";
import Lecture from "../../Components/lectureContainer/Lecture";
import PublishCourseButton from "../../Components/PublishCourseButton";

const LecturesContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const CenterButtonContainer = styled.div`
  text-align: center;
  width: 40%;
  margin: 0 auto;
  padding: 0;
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
      <CenterButtonContainer>
        <PublishCourseButton onClick={props.nextStep}></PublishCourseButton>
      </CenterButtonContainer>
    </RightSection>
  );
}

export default CourseSummaryPage;
