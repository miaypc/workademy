import React from "react";
import "./EvaluationPage.scss";

function EvaluationPage(props) {
  return (
    <div>
      <div>Evaluation Page</div>
      <div>
        <button onClick={props.previousStep}>Previous Step</button>
        <button onClick={props.nextStep}>Next Step</button>
      </div>
    </div>
  );
}

export default EvaluationPage;
