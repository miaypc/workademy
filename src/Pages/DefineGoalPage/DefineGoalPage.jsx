import React from "react";
import "./DefineGoalPage.scss";
import GoalInput from "../../Components/Input/GoalInput";

// importing styled components for page setup
import {
  PageContainer,
  LeftBar,
  RightSection,
  ButtonsContainer,
  Header
} from "../StylePages";
import { useState } from "react";

function DefineGoalPage(props) {
  //check if input is empty or not. If the goal isn't provided, we won't give user to access the next page
  const [isGoalEmpty, setIsGoalEmpty] = useState(true);

  function checkIsGoalEmpty(event) {
    event.target.value ? setIsGoalEmpty(false) : setIsGoalEmpty(true);
  }

  return (
    <PageContainer>
      <LeftBar>Define Goals</LeftBar>
      <RightSection>
        <Header>Goal</Header>
        <GoalInput checkIsGoalEmpty={checkIsGoalEmpty} />
        <ButtonsContainer>
          <button onClick={props.previousStep}>Previous Step</button>
          <button onClick={!isGoalEmpty && props.nextStep}>Next Step</button>
        </ButtonsContainer>
      </RightSection>
    </PageContainer>
  );
}

export default DefineGoalPage;
