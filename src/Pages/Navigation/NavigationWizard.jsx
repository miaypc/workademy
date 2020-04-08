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
    <StepWizard transitions={noTransitions}>
      {/* <CreateCoursePage />
      <CourseNamePage />
      <NewGoalPage /> */}
      <DefineGoalPage />
      <EvaluationPage />
      <ContentPage />
      <CourseSummaryPage />
    </StepWizard>
  );
}

export default NavigationWizard;
