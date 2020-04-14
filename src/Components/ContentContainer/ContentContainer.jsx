import React, { useState } from "react";
import ContentInput from "./ContentInput";
import { TextSmallHeader } from "../../Pages/StylePages";
import _Card from "@material-ui/core/Card";
import styled from "styled-components";
import Color from "../../Utils/Color";
import ContentType from "./ContentType";
import types from "./Type";

const Card = styled(_Card)`
  width: 80%;
  margin-top: 5%;
  margin-left: 1%;
  border: 5px solid ${Color.mainNavy};
`;

function ContentContainer({ toSave, showErrorMessage, checkIsGoalEmpty }) {
  const [selectedType, setSelectedType] = useState();

  function handleSelectType(type) {
    setSelectedType(type);
  }

  return (
    <div>
      <Card>
        <TextSmallHeader>Related Content</TextSmallHeader>

        <ContentType
          types={types}
          handleSelectType={handleSelectType}
          selectedType={selectedType}
        />
        <ContentInput
          toSave={toSave}
          showErrorMessage={showErrorMessage}
          checkIsGoalEmpty={checkIsGoalEmpty}
          selectedType={selectedType}
        />
        <div>{link}</div>
      </Card>
    </div>
  );
}

export default ContentContainer;
