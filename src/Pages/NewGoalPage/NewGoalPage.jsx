import React from "react";
import "./NewGoalPage.scss";

function NewGoalPage(props) {
  return (
    <div>
      <div>New Goal Page</div>
      <div>
        <button onClick={props.previousStep}>Previous Step</button>
        <button onClick={props.nextStep}>Next Step</button>
      </div>
    </div>
  );
}

export default NewGoalPage;
