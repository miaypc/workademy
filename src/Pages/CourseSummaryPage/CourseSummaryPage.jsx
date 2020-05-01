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
import { Device } from "../../Utils/Device";
import { useState } from "react";

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

function CourseSummaryPage(props) {
  const [summary, setSummary] = React.useState(oneGoal);

  const [goalId, setGoalId] = React.useState(props.goals && props.goals[0].id);

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
    const start = summary.columns[source.droppableId];
    const finish = summary.columns[destination.droppableId];

    if (start === finish) {
      const newQuestionId = Array.from(start.questionsId);
      newQuestionId.splice(source.index, 1);
      newQuestionId.splice(destination.index, 0, draggableId);
      const newColumn = {
        ...start,
        questionsId: newQuestionId,
      };
      const newState = {
        ...summary,
        columns: {
          ...summary.columns,
          [newColumn.id]: newColumn,
        },
      };
      setSummary(newState);
      return;
    }
    const startQuestionsId = Array.from(start.questionsId);
    startQuestionsId.splice(source.index, 1);
    const newStart = {
      ...start,
      questionsId: startQuestionsId,
    };
    const finishQuestionsId = Array.from(finish.questionsId);
    finishQuestionsId.splice(destination.index, 0, draggableId);
    const newFinish = {
      ...finish,
      questionsId: finishQuestionsId,
    };
    const newState = {
      ...summary,
      columns: {
        ...summary.columns,
        [newStart.id]: newStart,
        [newFinish.id]: newFinish,
      },
    };
    setSummary(newState);
    return;
  };

  return (
    <RightSection>
      <BlueTobBar>This is how your course can look like</BlueTobBar>
      <ModuleSelect
        handleChange={handleChange}
        goalId={goalId}
        goals={props.goals}
      ></ModuleSelect>
      {/* Drag and drop section where user can move content */}

      <LecturesContainer>
        {/* // onDragStart // onDragUpdate */}
        <DragDropContext onDragEnd={onDragEnd}>
          {summary.columnOrder.map((columnId) => {
            const column = summary.columns[columnId];
            const questions = column.questionsId.map(
              (qId) => summary.questions[qId]
            );
            console.log(column, "here is column");
            console.log(questions, "here are questions");
            return (
              <Lecture
                key={column.id}
                column={column}
                questions={questions}
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
  const { goals } = state.course;
  return {
    goals: goals,
  };
}
export default connect(mapStateToProps)(CourseSummaryPage);
