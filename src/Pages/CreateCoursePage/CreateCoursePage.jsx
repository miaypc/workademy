import React from "react";
import "./CreateCoursePage.scss";
import "../PageStyles.scss";

function CreateCoursePage(props) {
  return (
    <div className="pageContainer">
      <div className="leftBar">Create Course</div>
      <div className="rightSection">
        <div className="bottomButtons">
          <button onClick={props.nextStep}>Create your course</button>
        </div>
      </div>
    </div>
  );
}

export default CreateCoursePage;
