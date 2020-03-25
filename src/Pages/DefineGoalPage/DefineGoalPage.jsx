import React from "react";
import "./DefineGoalPage.scss";

function DefineGoalPage(props) {
  return (
    <div>
      <div>Define Goals</div>
      <div>
        <button onClick={props.previousStep}>Previous Step</button>
        <button onClick={props.nextStep}>Next Step</button>
      </div>
    </div>
  );
}

export default DefineGoalPage;
