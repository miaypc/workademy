import React from "react";
import "../PageStyles.scss";
import BigNavbar from "../../Components/BigNavbar";
import CreateCourseWrapper from "./CreateCourseStyle";

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
