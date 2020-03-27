import React from "react";
import "./ContentPage.scss";
import "../PageStyles.scss";

function ContentPage(props) {
  return (
    <div className="pageContainer">
      <div className="leftBar">Content Page</div>
      <div className="rightSection">
        <div className="bottomButtons">
          <button onClick={props.previousStep}>Previous Step</button>
          <button onClick={() => props.goToStep(3)}>add new goal</button>
          <button onClick={props.nextStep}>Summary</button>
        </div>
      </div>
    </div>
  );
}

export default ContentPage;
