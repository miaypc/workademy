import React from "react";
import "./DefineGoalPage.scss";
import VerbContainer from "../../Components/VerbContainer/VerbContainer";
function DefineGoalPage(props) {
  return (
    <div className="pageContainer">
      <div className="leftBar">Define Goals</div>
      <div className="rightSection">
        <div className="bottomButtons">
          <button onClick={props.previousStep}>Previous Step</button>
          <VerbContainer />
          <button onClick={props.nextStep}>Next Step</button>
        </div>
      </div>
    </div>
  );
}
export default DefineGoalPage;
