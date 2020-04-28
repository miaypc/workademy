import React, { useState } from "react";
// import { Fragment, useState, useEffect } from "react";
import StepWizard from "react-step-wizard";
import CourseNamePage from "../CourseNamePage/CourseNamePage";
import NewGoalPage from "../NewGoalPage/NewGoalPage";
import EvaluationPage from "../EvaluationPage/EvaluationPage";
import ContentPage from "../ContentPage/ContentPage";
import DefineGoalPage from "../DefineGoalPage/DefineGoalPage";
import CourseSummaryPage from "../CourseSummaryPage/CourseSummaryPage";
// import transitions from "./transitions.less";
import { PageContainer } from "../StylePages";
import SideBar from "../../Components/Navbars/SideBar";

function NavigationWizard() {
  const [currentStep, setCurrentStep] = useState(0);
  let noTransitions = {
    enterRight: "",
    enterLeft: "",
    exitRight: "",
    exitLeft: "",
  };
  return (
    <>
      <PageContainer>
        {/* <LeftBar>
          <SideBar currentStep={currentStep} />
        </LeftBar> */}

        <StepWizard
          nav={<SideBar currentStep={currentStep} />}
          transitions={noTransitions}
          isHashEnabled
          onStepChange={(steps) => setCurrentStep(steps.activeStep)}
        >
          <CourseNamePage hashKey={"course-parameters"} />
          <NewGoalPage hashKey={"course-goals"} />
          <DefineGoalPage hashKey={"goal-definition"} />
          <EvaluationPage hashKey={"evaluation"} />
          <ContentPage hashKey={"goal-content"} />
          <CourseSummaryPage hashKey={"course-summary"} />
        </StepWizard>
      </PageContainer>
    </>
  );
}

export default NavigationWizard;
