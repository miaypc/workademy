import React, { useState } from "react";

import _Card from "@material-ui/core/Card";
import styled from "styled-components";
import Color from "../../Utils/Color";
import QuestionTypes from "./QuestionTypes";
import Answers from "./Answers";

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

function QAContainer({
  qType,
  setQType,
  addQuestion,
  setQuestionName,
  answers,
  setAnswers,
  setCorrectAnswer,
  correctAnswer,
  showErrorMessage,
  questionName,
}) {
  //Three question types are possible: single-choice, multiple-choice, free-text

  return (
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
  );
}

export default QAContainer;
