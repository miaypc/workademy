import React from "react";
import _FormHelperText from "@material-ui/core/FormHelperText";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import _Select from "@material-ui/core/Select";
import styled from "styled-components";
import Color from "../../Utils/Color";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const FormHelperText = styled(_FormHelperText)`
  display: flex;
  justify-content: center;
`;

const Select = styled(_Select)`
  > div {
    color: ${Color.mainWhite};
    font-size: 20px;
    padding: 1.5em;
    display: flex;
    justify-content: center;
  }

  background-color: ${Color.mainNavy};
`;

function QuestionSelect({ questionId, handleSelectChange }) {
  return (
    <Container>
      <FormControl variant="outlined" fullWidth>
        <Select value={questionId} onChange={handleSelectChange}>
          <MenuItem value={10}>Question 1: Question here</MenuItem>
          <MenuItem value={20}>Question 2: Question here</MenuItem>
          <MenuItem value={30}>Question 3: Question here</MenuItem>
        </Select>
        <FormHelperText>Click to select another question</FormHelperText>
      </FormControl>
    </Container>
  );
}

export default QuestionSelect;
