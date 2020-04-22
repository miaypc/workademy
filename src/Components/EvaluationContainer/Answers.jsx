import React from "react";

import _Card from "@material-ui/core/Card";
import styled from "styled-components";
import Color from "../../Utils/Color";
import SingleChoice from "./AnswerTypes/SingleChoice";
import MultipleChoice from "./AnswerTypes/MultipleChoice";

const Card = styled(_Card)`
  width: 90%;
  padding-left: 5%;

  background-color: green;
`;
const Text = styled.div`
  font-size: 20px;
  color: ${Color.mainNavy};
  text-align: center;
`;

function Answers({ qType }) {
  return (
    <Card>
      {(qType === "single-choice" && <SingleChoice />) ||
        (qType === "multiple-choice" && <MultipleChoice />) ||
        (qType === "free-text" && (
          <Text>We will ask user to submit a free form answer</Text>
        )) || <Text>Choose the question type</Text>}
    </Card>
  );
}

export default Answers;
