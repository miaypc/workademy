import React from "react";
import styled from "styled-components";
import Color from "../../Utils/Color";
import Content from "./Content";
import Question from "./Question";

// styles
const Container = styled.div`
  width: 90%;
  max-width: 800px;
  margin: 10px auto;
  background-color: ${Color.mainNavy};
  text-align: center;
  color: ${Color.mainWhite};
  min-height: 300px;
  border-radius: 10px;
  padding: 1%;
`;
const Text = styled.div`
  padding: 3px;
`;
const LectureContent = styled.div`
  background-color: rgba(255, 255, 255, 0.3);
  width: 90%;
  margin: 0 auto;
  min-height: 250px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;
const ContentContainer = styled.div`
  display: flex;
  justify-content: space-around;
  text-align: center;
  flex-wrap: wrap;
`;
const QuestionContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  flex-wrap: wrap;
  width: 90%;
  margin: 0 auto;
  padding: 5px;
  border-radius: 5px;
  background-color: ${Color.mainYellow};
  height: 100px;
`;

const QuizText = styled.div`
  font-weight: bold;
  font-size: 25px;
  color: ${Color.mainNavy};
  @media (max-width: 570px) {
    font-size: 15px;
  }
`;

function Lecture() {
  return (
    <Container>
      <Text>Lecture 1</Text>
      <LectureContent>
        <ContentContainer>
          <Content />
          <Content />
          <Content />
        </ContentContainer>
        <QuestionContainer>
          <QuizText>Quiz</QuizText>
          <Question></Question>
          <Question></Question>
          <Question></Question>
        </QuestionContainer>
      </LectureContent>
    </Container>
  );
}

export default Lecture;
