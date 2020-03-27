import React from "react";
import "./CourseNamePage.scss";
import "../PageStyles.scss";

function CourseNamePage(props) {
  return (
    <div className="pageContainer">
      <div className="leftBar">Course Name Page</div>
      <div className="rightSection">
        <div className="bottomButtons">
          <button onClick={props.previousStep}>Previous Step</button>
          <button onClick={props.nextStep}>Next Step</button>
        </div>
      </div>
    </div>
  );
}

export default CourseNamePage;
