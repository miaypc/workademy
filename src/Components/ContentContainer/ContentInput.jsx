import React from "react";
import TextField from "@material-ui/core/TextField";
import Color from "../../Utils/Color";
import styled from "styled-components";
import { SaveButton } from "../styleButton";

const Form = styled.form`
  margin: 5px;
  display: flex;
  justify-content: center;
`;
const Text = styled.div`
  display: flex;
  padding: 3px;
  margin-right: 1em;
  font-size: 1.5em;
  align-items: center;
  color: ${Color.mainNavy};
`;

const ButtonField = styled.div`
  display: flex;
  justify-content: flex-end;
  padding-right: 10%;
  padding-top: 5px;
`;
function ContentInput({ toSave, showErrorMessage, checkIsGoalEmpty }) {
  return (
    <div>
      <Form>
        <Text>Link to article:</Text>
        {showErrorMessage()}
        <TextField
          required
          id="standard-required outlined-basic"
          label="Paste your link here"
          variant="outlined"
          style={{ width: "60%" }}
          onChange={checkIsGoalEmpty}
        />
      </Form>
      <ButtonField>
        <SaveButton onClick={toSave}>Save</SaveButton>
      </ButtonField>
    </div>
  );
}

export default ContentInput;
