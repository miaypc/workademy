import React from "react";
import styled from "styled-components";
import { DragDropContext } from "react-beautiful-dnd";
import { connect } from "react-redux";
// importing styled components for page setup
import { RightSection, ButtonsContainer, BlueTobBar } from "../StylePages";
import ModuleSelect from "../../Components/Select/ModuleSelect";
import "./CourseSummaryPage.scss";
import Lecture from "../../Components/lectureContainer/Lecture";
import {
  ResponsiveYellowButton,
  CenterButtonContainer,
} from "../../Components/ResponsiveYellowButton";
import { NavigationButton } from "../../Components/styleButton";
import Color from "../../Utils/Color";

const LecturesContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

// This object should be removed after connecting redux. For now I use it to check if drag and drop works
const oneGoal = {
  questions: {
    "question-1": { id: "question-1", question: "first question here" },
    "question-2": { id: "question-2", question: "second question here" },
    "question-3": { id: "question-3", question: "third question here" },
    "question-4": { id: "question-4", question: "third question here" },
    "question-5": { id: "question-5", question: "third question here" },
  },
  columns: {
    "column-1": {
      id: "column-1",
      title: "Lecture 1",
      questionsId: [
        "question-1",
        "question-2",
        "question-3",
        "question-4",
        "question-5",
      ],
    },
    "column-2": {
      id: "column-2",
      title: "Lecture 2",
      questionsId: [],
    },
    "column-3": {
      id: "column-3",
      title: "Lecture 3",
      questionsId: [],
    },
  },
  columnOrder: ["column-1", "column-2", "column-3"],
};
const SummaryBlueTobBar = styled.div`
  height: 70px;
  font-size: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${Color.mainNavy};
  color: ${Color.mainWhite};
`;

function CourseSummaryPage(props) {
  const [summary, setSummary] = React.useState(oneGoal);

  const [goalId, setGoalId] = React.useState(
    props.goals && props.goals.length && props.goals[0].id
  );

  const handleChange = (event) => {
    setGoalId(event.target.value);
  };

  const onDragEnd = (result) => {
    const { destination, source, draggableId } = result;
    if (!destination) {
      return;
    }
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    props.dispatch({
      type: "MOVE_QUESTION",
      questionId: +draggableId,
      sourceLectureId: +source.droppableId,
      destinationLectureId: +destination.droppableId,
    });
  };

  const questionsById = props.questions.reduce((acc, question) => {
    return { ...acc, [question.id]: question };
  }, {});
  const contentsByQuestionId = props.contents.reduce((acc, content) => {
    return {
      ...acc,
      [content.questionId]: [...(acc[content.questionId] || []), content],
    };
  });
  return (
    <RightSection>
      <SummaryBlueTobBar>
        This is how your course can look like
      </SummaryBlueTobBar>

      <ModuleSelect
        handleChange={handleChange}
        goalId={goalId}
        goals={props.goals}
      ></ModuleSelect>
      {/* Drag and drop section where user can move content */}

      <LecturesContainer>
        {/* // onDragStart // onDragUpdate */}
        <DragDropContext onDragEnd={onDragEnd}>
          {props.lectures.map((lecture, index) => {
            const questions = lecture.questions.map(
              (qId) => questionsById[qId]
            );
            const contents = lecture.questions.flatMap(
              (qId) => contentsByQuestionId[qId]
            );
            return (
              <Lecture
                key={lecture.id}
                lecture={lecture}
                index={index}
                questions={questions}
                contents={contents}
              ></Lecture>
            );
          })}
        </DragDropContext>
      </LecturesContainer>

      <CenterButtonContainer>
        <ResponsiveYellowButton onClick={props.nextStep}>
          Publish your course
        </ResponsiveYellowButton>
      </CenterButtonContainer>
      <ButtonsContainer>
        <NavigationButton onClick={props.previousStep}>
          Previous Step
        </NavigationButton>
      </ButtonsContainer>
    </RightSection>
  );
}

function mapStateToProps(state) {
  const { goals, lectures, questions, contents } = state.course;
  return {
    goals,
    lectures,
    questions,
    contents,
  };
}
export default connect(mapStateToProps)(CourseSummaryPage);
