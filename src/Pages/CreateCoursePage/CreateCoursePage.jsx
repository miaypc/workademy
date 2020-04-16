import React from "react";
import NewClassButton from "../../Components/NewClassButton";
import BigNavbar from "../../Components/Navbars/BigNavbar";

import {
  PageContainer,
  CreateCourseWrapper,
  CreateCourseHeader,
} from "./styleCreateCoursePage";

import { TextHeader, TextSmallHeader } from "../StylePages";
import { useHistory } from "react-router-dom";

function CreateCoursePage() {
  const history = useHistory();
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
          <NewClassButton onClick={() => history.push("/wizard")} />
        </div>
      </CreateCourseHeader>
    </CreateCourseWrapper>
  );
}

export default CreateCoursePage;
