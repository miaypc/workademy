import React from "react";
import styled from "styled-components";
import { DragDropContext } from "react-beautiful-dnd";
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
  lectures: {
    "lecture-1": { id: "lecture-1", question: "some question here" },
    "lecture-2": { id: "lecture-2", question: "some question here" },
    "lecture-3": { id: "lecture-3", question: "some question here" },
  },
  columns: {
    "column-1": {
      id: "column-1",
      title: "To Do",
      lectureIds: ["lecture-1", "lecture-2", "lecture-3"],
    },
  },
  columnOrder: ["column-1"],
};

function CourseSummaryPage(props) {
  const [summary, setSummary] = React.useState(oneGoal);

  const [goalId, setGoalId] = React.useState(10);

  const handleChange = (event) => {
    setGoalId(event.target.value);
  };

  return (
    <RightSection>
      <BlueTobBar>This is how your course can look like</BlueTobBar>
      <ModuleSelect handleChange={handleChange} goalId={goalId}></ModuleSelect>
      {/* Drag and drop section where user can move content */}

      {/* <DragDropContext> */}
      <LecturesContainer>
        {summary.columnOrder.map((columnId) => {
          const column = summary.columns[columnId];
          const lectures = column.lectureIds.map(
            (lecId) => summary.lectures[lecId]
          );
          return (
            <Lecture
              key={column.id}
              column={column}
              lectures={lectures}
            ></Lecture>
          );
        })}

        {/* <Lecture></Lecture>
          <Lecture></Lecture> */}
        {/* {oneGoal.columnOrder.map()} */}
      </LecturesContainer>
      {/* </DragDropContext> */}
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

export default CourseSummaryPage;
