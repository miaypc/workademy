import React from "react";
import "./CourseNamePage.scss";

function CourseNamePage(props) {
  return (
    <div>
      <div>Course Name Page</div>
      <div>
        <button onClick={props.previousStep}>Previous Step</button>
        <button onClick={props.nextStep}>Next Step</button>
      </div>
    </div>
  );
}

export default CourseNamePage;
