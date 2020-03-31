import React from "react";
import "./EvaluationPage.scss";
import "../PageStyles.scss";

function EvaluationPage(props) {
  return (
    <div className="pageContainer">
      <div className="leftBar">Evaluation Page</div>
      <div className="rightSection">
        <div className="bottomButtons">
          <button onClick={props.previousStep}>Previous Step</button>
          <button onClick={props.nextStep}>Next Step</button>
        </div>
      </div>
    </div>
  );
}

export default EvaluationPage;
