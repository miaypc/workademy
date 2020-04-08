import React from "react";
import NewClassButton from "../../Components/NewClassButton";
import BigNavbar from "../../Components/Navbars/BigNavbar";

import {
  CreateCourseWrapper,
  CreateCourseHeader,
} from "./styleCreateCoursePage";

import { TextHeader, TextSmallHeader } from "../StylePages";

function CreateCoursePage(props) {
  return (
    <CreateCourseWrapper>
      <BigNavbar />
      <CreateCourseHeader>
        <TextHeader>
          Welcome to the Workademy Course Builder!
          <TextSmallHeader>
            To start creating your class, click on the button below
          </TextSmallHeader>
        </TextHeader>
        <div className="bottomButtons">
          <NewClassButton onClick={props.nextStep} />
        </div>
      </CreateCourseHeader>
    </CreateCourseWrapper>
  );
}

export default CreateCoursePage;
