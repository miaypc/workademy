import React from "react";
import "./CreateCoursePage.scss";
import "../PageStyles.scss";
import BigNavbar from "../../Components/BigNavbar";

function CreateCoursePage(props) {
  return (
    <div className="pageContainer">
      <BigNavbar />
      <div className="bottomButtons">
        <button onClick={props.nextStep}>Create your course</button>
      </div>
    </div>
  );
}

export default CreateCoursePage;
