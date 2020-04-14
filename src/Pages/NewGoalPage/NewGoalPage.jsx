import React from "react";
import "./NewGoalPage.scss";
import AddNewGoalButton from "../../Components/AddNewGoalButton";
import SideBar from "../../Components/Navbars/SideBar";
import styled from "styled-components";

// importing styled components for page setup
import {
  PageContainer,
  LeftBar,
  RightSection,
  ButtonsContainer,
} from "../StylePages";

function NewGoalPage(props) {
  return (
    <PageContainer>
      <LeftBar>
        <SideBar />
      </LeftBar>
      <RightSection>
        <ButtonsContainer>
          <AddNewGoalButton onClick={props.nextStep}></AddNewGoalButton>
        </ButtonsContainer>
      </RightSection>
    </PageContainer>
  );
}

export default NewGoalPage;
