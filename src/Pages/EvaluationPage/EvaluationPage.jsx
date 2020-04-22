import React from "react";
import styled from "styled-components";
import "./EvaluationPage.scss";
import { NavigationButton } from "../../Components/styleButton";

// importing styled components for page setup
import { RightSection, ButtonsContainer } from "../StylePages";
import QAContainer from "../../Components/EvaluationContainer/QAContainer";
import QuestionList from "../../Components/EvaluationContainer/QuestionList";

const MainContent = styled.div`
  display: flex;
  margin-top: 5%;
`;

function EvaluationPage(props) {
  return (
    <RightSection>
      <MainContent>
        <QAContainer></QAContainer>
        <QuestionList></QuestionList>
      </MainContent>
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
