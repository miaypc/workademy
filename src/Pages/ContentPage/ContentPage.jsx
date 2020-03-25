import React from "react";
import "./ContentPage.scss";

function ContentPage(props) {
  return (
    <div>
      <div>Content Page</div>
      <div>
        <button onClick={props.previousStep}>Previous Step</button>
        <button onClick={() => props.goToStep(3)}>add new goal</button>
        <button onClick={props.nextStep}>Summary</button>
      </div>
    </div>
  );
}

export default ContentPage;
