import React from "react";
import "./CourseNamePage.scss";

// importing styled components for page setup
import {
  PageContainer,
  LeftBar,
  RightSection,
  ButtonsContainer,
  TextHeader
} from "../StylePages";

function CourseNamePage(props) {
  return (
    <PageContainer>
      <LeftBar>Course Name Page</LeftBar>
      <RightSection>
        <TextHeader>
          Hey Olga! 👋
          <br />
          What's the name of your course?
        </TextHeader>
        <ButtonsContainer>
          <button onClick={props.previousStep}>Previous Step</button>
          <button onClick={props.nextStep}>Next Step</button>
        </ButtonsContainer>
      </RightSection>
    </PageContainer>
  );
}

export default CourseNamePage;
