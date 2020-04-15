import React from "react";
import "./NewGoalPage.scss";
import AddNewGoalButton from "../../Components/AddNewGoalButton";

// importing styled components for page setup

import { RightSection, ButtonsContainer } from "../StylePages";

function NewGoalPage(props) {
  return (
    <RightSection>
      <ButtonsContainer>
        <AddNewGoalButton onClick={props.nextStep}></AddNewGoalButton>
      </ButtonsContainer>
    </RightSection>
  );
}

export default NewGoalPage;
