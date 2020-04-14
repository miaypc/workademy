import React from "react";
import ContentInput from "./ContentInput";

function ContentContainer({ toSave, showErrorMessage, checkIsGoalEmpty }) {
  return (
    <div>
      <ContentInput
        toSave={toSave}
        showErrorMessage={showErrorMessage}
        checkIsGoalEmpty={checkIsGoalEmpty}
      />
    </div>
  );
}

export default ContentContainer;
