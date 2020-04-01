import React from "react";
import "./NewGoalPage.scss";

// importing styled components for page setup
import {
  PageContainer,
  LeftBar,
  RightSection,
  ButtonsContainer
} from "../StylePages";

function NewGoalPage(props) {
  return (
    <PageContainer>
      <LeftBar>New Goal Page</LeftBar>
      <RightSection>
        <ButtonsContainer>
          <button onClick={props.previousStep}>Previous Step</button>
          <button onClick={props.nextStep}>Next Step</button>
        </ButtonsContainer>
      </RightSection>
    </PageContainer>
  );
}

export default NewGoalPage;
