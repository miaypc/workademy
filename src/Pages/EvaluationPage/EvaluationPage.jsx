import React, { useState } from "react";
import { connect } from "react-redux";
import { MainContent, SmallParagraph, Card, Text } from "./EvaluationPage.js";
import { NavigationButton } from "../../Components/styleButton";
import { RightSection, ButtonsContainer, BlueTobBar } from "../StylePages";
import QuestionList from "../../Components/EvaluationContainer/QuestionList";
import QuestionTypes from "../../Components/EvaluationContainer/QuestionTypes";
import Answers from "../../Components/EvaluationContainer/Answers";

function EvaluationPage(props) {
  const [isErrorVisible, setIsErrorVisible] = useState(false); // Check if user filled all the fields if no - show error
  const [questionName, setQuestionName] = useState();
  const [qType, setQType] = useState(); //Three question types are possible: single-choice, multiple-choice, free-text
  const [answers, setAnswers] = useState(["", "", "", ""]); // Array with 4 answers or nothing for free text.
  const [correctAnswer, setCorrectAnswer] = useState([]); // Array of correct answers starting from 1 or nothing for free text

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
        goalId: props.selectedGoal.id,
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

  if (!props.selectedGoal) {
    return ""; // TODO  redirect to new goal page
  }
  return (
    <RightSection>
      <BlueTobBar>
        Goal: {props.selectedGoal.verb + " " + props.selectedGoal.name}
      </BlueTobBar>
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
        <QuestionList questions={props.questions}></QuestionList>
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
function mapStateToProps(state) {
  const { selectedGoal, questions } = state.course;
  return {
    selectedGoal: selectedGoal,
    questions:
      selectedGoal && questions
        ? questions.filter((q) => q.goalId === selectedGoal.id)
        : [],
  };
}
export default connect(mapStateToProps)(EvaluationPage);
