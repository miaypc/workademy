import React from "react";
import "./NewGoalPage.scss";
import "../PageStyles.scss";

function NewGoalPage(props) {
  return (
    <div className="pageContainer">
      <div className="leftBar">New Goal Page</div>
      <div className="rightSection">
        <div className="bottomButtons">
          <button onClick={props.previousStep}>Previous Step</button>
          <button onClick={props.nextStep}>Next Step</button>
        </div>
      </div>
    </div>
  );
}

export default NewGoalPage;
