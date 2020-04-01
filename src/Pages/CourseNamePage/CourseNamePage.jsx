import React from "react";

// importing styled components for page setup
import {
  PageContainer,
  LeftBar,
  RightSection,
  ButtonsContainer
} from "../StylePages";
import CourseName from "../../Components/Input/CourseName";
import CourseDescription from "../../Components/Input/CourseDescription";

function CourseNamePage(props) {
  return (
    <PageContainer>
      <LeftBar>Course Name Page</LeftBar>
      <RightSection>
        <CourseName />
        <CourseDescription />
        <ButtonsContainer>
          <button onClick={props.previousStep}>Previous Step</button>
          <button onClick={props.nextStep}>Next Step</button>
        </ButtonsContainer>
      </RightSection>
    </PageContainer>
  );
}

export default CourseNamePage;
