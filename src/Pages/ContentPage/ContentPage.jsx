import React, { useState } from "react";
import "./style.js";
import { SmallParagraph } from "../DefineGoalPage/styleDefineGoalPage";
import ContentContainer from "../../Components/ContentContainer/ContentContainer";
import {
  PageContainer,
  LeftBar,
  RightSection,
  ButtonsContainer,
} from "../StylePages";

function ContentPage(props) {
  const [isErrorVisible, setIsErrorVisible] = useState(false);
  const [isGoalEmpty, setIsGoalEmpty] = useState(true);

  function checkIsGoalEmpty(event) {
    if (event.target.value) {
      setIsGoalEmpty(false);
      setIsErrorVisible(false);
    } else {
      setIsGoalEmpty(true);
      setIsErrorVisible(true);
    }
  }
  function showErrorMessage() {
    if (isErrorVisible) {
      return <SmallParagraph>Please provide a link </SmallParagraph>;
    }
  }
  function toSave(event) {
    if (isGoalEmpty) {
      setIsErrorVisible(true);
    } else {
    }
  }
  return (
    <PageContainer>
      <LeftBar>Content Page</LeftBar>
      <RightSection>
        <ContentContainer
          toSave={toSave}
          showErrorMessage={showErrorMessage}
          checkIsGoalEmpty={checkIsGoalEmpty}
        />
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
