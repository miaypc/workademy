import React from "react";
import "./CreateCoursePage.scss";
import "../PageStyles.scss";

function CreateCoursePage(props) {
  return (
    <div className="pageContainer">
      <div>Create Course</div>
      <div>
        <div>
          <button onClick={props.nextStep}>Create your course</button>
        </div>
      </div>
    </div>
  );
}

export default CreateCoursePage;
