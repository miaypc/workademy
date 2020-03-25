import React, { Fragment, useState, useEffect } from "react";
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
  // const [state, updateState] = useState({
  //   form: {},
  //   transitions: {
  //     enterRight: `${transitions.animated} ${transitions.enterRight}`,
  //     enterLeft: `${transitions.animated} ${transitions.enterLeft}`,
  //     exitRight: `${transitions.animated} ${transitions.exitRight}`,
  //     exitLeft: `${transitions.animated} ${transitions.exitLeft}`,
  //     intro: `${transitions.animated} ${transitions.intro}`
  //   }
  // });
  return (
    <StepWizard>
      <CreateCoursePage />
      <CourseNamePage />
      <NewGoalPage />
      <DefineGoalPage />
      <EvaluationPage />
      <ContentPage />
      <CourseSummaryPage />
    </StepWizard>
  );
}

export default NavigationWizard;
