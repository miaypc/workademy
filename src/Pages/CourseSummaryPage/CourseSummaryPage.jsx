import React from "react";
import "./CourseSummaryPage.scss";

// importing styled components for page setup
import {
  PageContainer,
  LeftBar,
  RightSection,
  ButtonsContainer
} from "../StylePages";

function CourseSummaryPage(props) {
  return (
    <PageContainer>
      <LeftBar>Summary</LeftBar>
      <RightSection>
        <ButtonsContainer>
          <button onClick={props.previousStep}>Previous Step</button>
          <button onClick={props.nextStep}>Publish</button>
        </ButtonsContainer>
      </RightSection>
    </PageContainer>
  );
}

export default CourseSummaryPage;
