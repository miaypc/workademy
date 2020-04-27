import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import Color from "../../Utils/Color";
import "./NewGoalPage.scss";
import AddNewGoalButton from "../../Components/AddNewGoalButton";
// importing styled components for page setup
import { ButtonsContainer, GoalsPage } from "../StylePages";
import Pencil from "../../Components/Images/PencilBG.svg";

//Styles
const Header = styled.div`
  width: 80%;
  display: flex;
  margin: 5%;
  justify-content: center;
  align-items: center;
  @media (max-width: 510px) {
    font-size: 10px;
    flex-direction: column;
  }
`;

const SmallText = styled.div`
  font-size: 20px;

  font-weight: bold;
  color: ${({ theme }) => theme.text};
  padding-right: 10px;
  @media (max-width: 650px) {
    font-size: 15px;
  }
`;

const TextHeader = styled.div`
  font-size: 40px;
  // text-align: center;

  font-weight: bold;
  color: ${({ theme }) => theme.text};
  @media (max-width: 650px) {
    font-size: 30px;
  }
`;

const Symbol = styled.span`
  padding: 15px;

  > img {
    width: 25px;
  }
`;

function NewGoalPage(props) {
  return (
    <GoalsPage>
      <Header>
        <SmallText>Course name:</SmallText>
        <TextHeader>
          {props.courseName}
          <Symbol onClick={props.previousStep}>
            <img src={Pencil}></img>
          </Symbol>
        </TextHeader>
      </Header>

      <ButtonsContainer>
        <AddNewGoalButton onClick={props.nextStep}></AddNewGoalButton>
      </ButtonsContainer>
    </GoalsPage>
  );
}

function mapStateToProps(state) {
  return {
    courseName: state.course.courseName,
  };
}

export default connect(mapStateToProps)(NewGoalPage);
