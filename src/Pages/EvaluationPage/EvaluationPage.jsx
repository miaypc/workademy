import React, { useState } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import "./EvaluationPage.scss";
import { NavigationButton } from "../../Components/styleButton";
import { RightSection, ButtonsContainer, BlueTobBar } from "../StylePages";
import QuestionList from "../../Components/EvaluationContainer/QuestionList";
import _Card from "@material-ui/core/Card";
import Color from "../../Utils/Color";
import QuestionTypes from "../../Components/EvaluationContainer/QuestionTypes";
import Answers from "../../Components/EvaluationContainer/Answers";

const MainContent = styled.div`
  display: flex;
  margin-top: 5%;
`;

const SmallParagraph = styled.p`
  color: red;
  font-size: 8px;
  display: flex;
  justify-content: flex-end;
  padding-right: 10px;
`;

const Card = styled(_Card)`
  width: 75%;

  margin-left: 1%;
  border: 5px solid ${Color.mainNavy};
  display: flex;
  flex-direction: column;
`;
const Text = styled.div`
  color: ${Color.mainNavy};
  font-size: 1.5em;
  text-align: center;
  margin: 10px;
`;

function EvaluationPage(props) {
  const [isErrorVisible, setIsErrorVisible] = useState(false); // Check if user filled all the fields if no - show error
  const [questionName, setQuestionName] = useState();
  const [qType, setQType] = useState(); //Three question types are possible: single-choice, multiple-choice, free-text
  const [answers, setAnswers] = useState(["", "", "", ""]); // Array with 4 answers or nothing for free text.
  const [correctAnswer, setCorrectAnswer] = useState([]); // Array of correct answers starting from 1

  function showErrorMessage() {
    if (isErrorVisible) {
      return <SmallParagraph>Some info is missing</SmallParagraph>;
    }
  }

  function addQuestion() {
    if (
      !questionName ||
      !qType ||
      (qType !== "free-text" &&
        (answers.some((answer) => answer === "") || !correctAnswer.length))
    ) {
      setIsErrorVisible(true);
    } else {
      setIsErrorVisible(false);

      props.dispatch({
        type: "CREATE_QUESTION",
        name: questionName,
        questionType: qType,
        ...(qType !== "free-text" && {
          // We add answers and correct answer in case question-type is not a free text
          answers: answers,
          correct: correctAnswer,
        }),
      });
      //Setting all fields to empty after adding submiting question-answer.
      setQuestionName("");
      setQType("");
      setAnswers(["", "", "", ""]);
      setCorrectAnswer([]);
    }
  }
  return (
    <RightSection>
      <BlueTobBar>Goal 1: Define Blended Learning </BlueTobBar>
      <MainContent>
        <Card>
          <QuestionTypes
            qType={qType}
            setQType={setQType}
            setQuestionName={setQuestionName}
            questionName={questionName}
          />
          <Text>Answer Choices</Text>
          <Answers
            qType={qType}
            addQuestion={addQuestion}
            answers={answers}
            setAnswers={setAnswers}
            setCorrectAnswer={setCorrectAnswer}
            correctAnswer={correctAnswer}
          />
          {showErrorMessage()}
        </Card>
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

export default connect()(EvaluationPage);
