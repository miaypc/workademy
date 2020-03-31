import React from "react";
import "./style.js";

// importing styled components for page setup
import {
  PageContainer,
  LeftBar,
  RightSection,
  ButtonsContainer
} from "../StylePages";

function ContentPage(props) {
  return (
    <PageContainer>
      <LeftBar>Content Page</LeftBar>
      <RightSection>
        <ButtonsContainer>
          <button onClick={props.previousStep}>Previous Step</button>
          <button onClick={() => props.goToStep(3)}>add new goal</button>
          <button onClick={props.nextStep}>Summary</button>
        </ButtonsContainer>
      </RightSection>
    </PageContainer>
  );
}

export default ContentPage;
