import React from "react";
import VerbContainer from "../../Components/VerbContainer/VerbContainer";
import GoalInput from "../../Components/Input/GoalInput";
import { SmallParagraph } from "./styleDefineGoalPage";

// importing styled components for page setup
import {
  ButtonsContainer,
  TextHeader,
  TextSmallHeader,
  RightSection,
} from "../StylePages";

import { useState } from "react";

function DefineGoalPage(props) {
  const [isErrorVisible, setIsErrorVisible] = useState(false);
  const [isGoalEmpty, setIsGoalEmpty] = useState(true);
  const [selectedVerbs, setSelectedVerbs] = useState();

  //check if input is empty or not. If the goal isn't provided,
  //we won't give user to access the next page and show error message
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
      return <SmallParagraph>Please provide a goal</SmallParagraph>;
    }
  }
  function goToNextStep() {
    if (isGoalEmpty) {
      setIsErrorVisible(true);
    } else {
      props.nextStep();
    }
  }

  function handleSelectVerb(verb) {
    setSelectedVerbs(verb);
  }

  return (
    <RightSection>
      <TextHeader>Let's define the new goal 🎯</TextHeader>
      <TextSmallHeader>
        Please type here the name of your goal and the type of goal. For
        example: Learn HTML - Define
      </TextSmallHeader>
      <VerbContainer
        handleSelectVerb={handleSelectVerb}
        selectedVerbs={selectedVerbs}
      />

      <TextHeader>Goal</TextHeader>

      <GoalInput
        checkIsGoalEmpty={checkIsGoalEmpty}
        selectedVerbs={selectedVerbs}
      />

      {showErrorMessage()}
      <ButtonsContainer>
        <button onClick={props.previousStep}>Previous Step</button>

        <button onClick={goToNextStep}>Next Step</button>
      </ButtonsContainer>
    </RightSection>
  );
}

export default DefineGoalPage;
