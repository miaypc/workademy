import React from "react";
import "./EvaluationPage.scss";
import { NavigationButton } from "../../Components/styleButton";

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
        <NavigationButton onClick={props.previousStep}>
          Previous Step
        </NavigationButton>
        <NavigationButton onClick={props.nextStep}>Next Step</NavigationButton>
      </ButtonsContainer>
    </RightSection>
  );
}

export default EvaluationPage;
