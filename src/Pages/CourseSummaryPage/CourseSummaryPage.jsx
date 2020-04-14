import React from "react";
import "./CourseSummaryPage.scss";

// importing styled components for page setup
import { RightSection, ButtonsContainer } from "../StylePages";

function CourseSummaryPage(props) {
  return (
    <RightSection>
      <ButtonsContainer>
        <button onClick={props.previousStep}>Previous Step</button>
        <button onClick={props.nextStep}>Publish</button>
      </ButtonsContainer>
    </RightSection>
  );
}

export default CourseSummaryPage;
