import React from "react";
import BigNavbar from "../../Components/Navbars/BigNavbar";
import CreateCourseWrapper from "./styleCreateCoursePage";

function CreateCoursePage(props) {
  return (
    <CreateCourseWrapper>
      <BigNavbar />
      <div className="bottomButtons">
        <button onClick={props.nextStep}>Create your course</button>
      </div>
    </CreateCourseWrapper>
  );
}

export default CreateCoursePage;
