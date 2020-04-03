import React from "react";
import NewClassButton from "../../Components/NewClassButton";
import BigNavbar from "../../Components/Navbars/BigNavbar";
import CreateCourseWrapper from "./styleCreateCoursePage";

function CreateCoursePage(props) {
  return (
    <CreateCourseWrapper>
      <BigNavbar />
      {/* <Header /> */}
      <div className="bottomButtons">
        <NewClassButton onClick={props.nextStep} />
        <button onClick={props.nextStep}>Create your course</button>
      </div>
    </CreateCourseWrapper>
  );
}

export default CreateCoursePage;
