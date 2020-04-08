import React from "react";
// import { Fragment, useState, useEffect } from "react";
import StepWizard from "react-step-wizard";
import CreateCoursePage from "../CreateCoursePage/CreateCoursePage";
import CourseNamePage from "../CourseNamePage/CourseNamePage";
import NewGoalPage from "../NewGoalPage/NewGoalPage";
import EvaluationPage from "../EvaluationPage/EvaluationPage";
import ContentPage from "../ContentPage/ContentPage";
import DefineGoalPage from "../DefineGoalPage/DefineGoalPage";
import CourseSummaryPage from "../CourseSummaryPage/CourseSummaryPage";
// import transitions from "./transitions.less";

function NavigationWizard() {
  let noTransitions = {
    enterRight: "",
    enterLeft: "",
    exitRight: "",
    exitLeft: "",
  };
  return (
    <StepWizard transitions={noTransitions} isHashEnabled>
      <CreateCoursePage hashKey={"create-course"} />
      <CourseNamePage hashKey={"course-parameters"} />
      <NewGoalPage hashKey={"course-goals"} />
      <DefineGoalPage hashKey={"goal-definition"} />
      <EvaluationPage hashKey={"evaluation"} />
      <ContentPage hashKey={"goal-content"} />
      <CourseSummaryPage hashKey={"course-summary"} />
    </StepWizard>
  );
}

export default NavigationWizard;
