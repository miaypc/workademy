import React, { useState } from "react";
import { connect } from "react-redux";

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

function DefineGoalPage(props) {
  const [isErrorVisible, setIsErrorVisible] = useState(false);

  const [selectedVerbs, setSelectedVerbs] = useState();
  const [goalName, setGoalName] = useState();

  function showErrorMessage() {
    if (isErrorVisible) {
      return <SmallParagraph>Please provide a goal</SmallParagraph>;
    }
  }
  function goToNextStep() {
    if (!goalName || !selectedVerbs) {
      setIsErrorVisible(true);
    } else {
      setIsErrorVisible(false);
      addGoal();
      props.nextStep();
    }
  }

  function handleSelectVerb(verb) {
    setSelectedVerbs(verb);
  }
  function addGoal() {
    props.dispatch({
      type: "CREATE_GOAL",
      verb: selectedVerbs,
      name: goalName,
    });
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
        selectedVerbs={selectedVerbs}
        onChange={(event) => setGoalName(event.target.value)}
        value={goalName}
      />

      {showErrorMessage()}
      <ButtonsContainer>
        <button onClick={props.previousStep}>Previous Step</button>

        <button onClick={goToNextStep}>Next Step</button>
      </ButtonsContainer>
    </RightSection>
  );
}

export default connect()(DefineGoalPage);
