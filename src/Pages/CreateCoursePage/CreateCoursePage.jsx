import React from "react";
import NewClassButton from "../../Components/NewClassButton";
import BigNavbar from "../../Components/Navbars/BigNavbar";
import LightTheme from "../../Utils/LightTheme";
import styled from "styled-components";

import {
  CreateCourseWrapper,
  CreateCourseHeader,
  CreateCourseH1,
  CreateCourseH2,
} from "./styleCreateCoursePage";

function CreateCoursePage(props) {
  return (
    <CreateCourseWrapper>
      <BigNavbar />
      <CreateCourseHeader>
        <CreateCourseH1>
          Welcome to the Workademy Course Builder !
        </CreateCourseH1>
        <CreateCourseH2>
          To start creating your class, click on the button below
        </CreateCourseH2>
        <div className="bottomButtons">
          <NewClassButton onClick={props.nextStep} />
        </div>
      </CreateCourseHeader>
    </CreateCourseWrapper>
  );
}

export default CreateCoursePage;
