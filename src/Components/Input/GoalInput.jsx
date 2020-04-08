import React from "react";
//Material UI input field
import TextField from "@material-ui/core/TextField";

// Styled-components
import styled from "styled-components";

const Form = styled.form`
  margin: 5px;
  display: flex;
  justify-content: center;
`;
const Verb = styled.div`
  display: flex;
  padding: 3px;
  align-items: center;
`;

function GoalInput({ checkIsGoalEmpty, selectedVerbs }) {
  return (
    <Form>
      <Verb>{selectedVerbs ? selectedVerbs : ""}</Verb>
      <TextField
        required
        id="standard-required outlined-basic"
        label="Goal name"
        variant="outlined"
        style={{ width: "50%" }}
        onChange={checkIsGoalEmpty}
      />
    </Form>
  );
}

export default GoalInput;
