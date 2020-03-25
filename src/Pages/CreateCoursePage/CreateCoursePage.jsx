import React from "react";
import "./CreateCoursePage.scss";

function CreateCoursePage(props) {
  return (
    <div>
      <div>Create Course</div>
      <div>
        <button onClick={props.previousStep}>Previous Step</button>
        <button onClick={props.nextStep}>Next Step</button>
      </div>
    </div>
  );
}

export default CreateCoursePage;
