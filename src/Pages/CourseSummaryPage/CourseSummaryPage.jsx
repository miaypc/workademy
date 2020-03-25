import React from "react";
import "./CourseSummaryPage.scss";

function CourseSummaryPage(props) {
  return (
    <div>
      <div>Summary</div>
      <div>
        <button onClick={props.previousStep}>Previous Step</button>
        <button onClick={props.nextStep}>Next Step</button>
      </div>
    </div>
  );
}

export default CourseSummaryPage;
