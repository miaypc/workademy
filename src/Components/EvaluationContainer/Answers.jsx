import React from "react";

import _Card from "@material-ui/core/Card";
import styled from "styled-components";
import Color from "../../Utils/Color";
import SingleChoice from "./AnswerTypes/SingleChoice";
import MultipleChoice from "./AnswerTypes/MultipleChoice";
import { SaveButton } from "../styleButton";

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

const ButtonField = styled.div`
  display: flex;
  justify-content: flex-end;
  padding-right: 10%;
  padding-top: 5px;
  margin: 10px;
`;

function Answers({ qType }) {
  return (
    <Card>
      {(qType === "single-choice" && <SingleChoice />) ||
        (qType === "multiple-choice" && <MultipleChoice />) ||
        (qType === "free-text" && (
          <Text>We will ask user to submit a free form answer</Text>
        )) || <Text>Choose the question type</Text>}

      {qType && (
        <ButtonField>
          <SaveButton type="submit">Save</SaveButton>
        </ButtonField>
      )}
    </Card>
  );
}

export default Answers;
