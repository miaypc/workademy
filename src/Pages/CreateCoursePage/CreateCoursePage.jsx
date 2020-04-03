import React from "react";
import NewClassButton from "../../Components/NewClassButton";
import BigNavbar from "../../Components/Navbars/BigNavbar";
import CreateCourseWrapper from "./styleCreateCoursePage";

function CreateCoursePage(props) {
  return (
    <CreateCourseWrapper>
      <BigNavbar />
      <div className="bottomButtons">
        <NewClassButton onClick={props.nextStep} />
      </div>
    </CreateCourseWrapper>
  );
}

export default CreateCoursePage;
