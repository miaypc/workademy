import React from "react";
import "./EvaluationPage.scss";

// importing styled components for page setup
import {
  PageContainer,
  LeftBar,
  RightSection,
  ButtonsContainer,
} from "../StylePages";

function EvaluationPage(props) {
  return (
    <RightSection>
      <ButtonsContainer>
        <button onClick={props.previousStep}>Previous Step</button>
        <button onClick={props.nextStep}>Next Step</button>
      </ButtonsContainer>
    </RightSection>
  );
}

export default EvaluationPage;
