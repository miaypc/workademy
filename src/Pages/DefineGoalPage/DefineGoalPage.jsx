import React from "react";
import "./DefineGoalPage.scss";
import "../PageStyles.scss";

function DefineGoalPage(props) {
  return (
    <div className="pageContainer">
      <div className="leftBar">Define Goals</div>
      <div className="rightSection">
        <div className="bottomButtons">
          <button onClick={props.previousStep}>Previous Step</button>
          <button onClick={props.nextStep}>Next Step</button>
        </div>
      </div>
    </div>
  );
}

export default DefineGoalPage;
