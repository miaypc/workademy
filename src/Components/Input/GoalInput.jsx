import React from "react";
//Material UI input field
import _TextField from "@material-ui/core/TextField";
import Color from "../../Utils/Color";

// Styled-components
import styled from "styled-components";

const TextField = styled(_TextField)`
  > div {
    color: ${({ theme }) => theme.InputText};
  }
`;

const Form = styled.form`
  margin: 5px;
  display: flex;
  justify-content: center;
  color: ${({ theme }) => theme.InputText};
`;
const Verb = styled.div`
  display: flex;
  padding: 3px;
  align-items: center;
`;

function GoalInput({ selectedVerbs, value, onChange }) {
  return (
    <Form>
      <Verb>{selectedVerbs ? selectedVerbs : ""}</Verb>
      <TextField
        required
        id="standard-required outlined-basic"
        label="Goal name"
        variant="outlined"
        style={{ width: "50%" }}
        value={value}
        onChange={onChange}
      />
    </Form>
  );
}

export default GoalInput;
