import React from "react";
import NewClassButton from "../../Components/NewClassButton";
import BigNavbar from "../../Components/Navbars/BigNavbar";
import {
  CreateCourseWrapper,
  CreateCourseHeader,
  CreateCourseH1,
  CreateCourseH2,
  NewClassButtonContainer
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
        <NewClassButtonContainer>
          <NewClassButton onClick={props.nextStep} />
          <button onClick={props.nextStep}>Create your course</button>
        </NewClassButtonContainer>
      </CreateCourseHeader>
    </CreateCourseWrapper>
  );
}

export default CreateCoursePage;
