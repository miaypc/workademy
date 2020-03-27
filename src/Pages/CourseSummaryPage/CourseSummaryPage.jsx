import React from "react";
import "./CourseSummaryPage.scss";
import "../PageStyles.scss";

function CourseSummaryPage(props) {
  return (
    <div className="pageContainer">
      <div className="leftBar">Summary</div>
      <div className="rightSection">
        <div className="bottomButtons">
          <button onClick={props.previousStep}>Previous Step</button>
          <button onClick={props.nextStep}>Publish</button>
        </div>
      </div>
    </div>
  );
}

export default CourseSummaryPage;
