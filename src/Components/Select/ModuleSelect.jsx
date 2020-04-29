import React from "react";

import _FormHelperText from "@material-ui/core/FormHelperText";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import _Select from "@material-ui/core/Select";
import styled from "styled-components";
import Color from "../../Utils/Color";

const Container = styled.div`
  padding: 15px;
  max-width: 600px;
  margin: 0 auto;
`;

const FormHelperText = styled(_FormHelperText)`
  && {
    color: ${({ theme }) => theme.text};
  }
  > div {
    display: flex;
    justify-content: center;
  }
`;

const Select = styled(_Select)`
  > div {
    color: ${Color.mainNavy};
  }
  background-color: ${Color.mainYellow};
`;

function ModuleSelect({ goalId, handleChange }) {
  return (
    <Container>
      <FormControl variant="outlined" fullWidth>
        <Select value={goalId} onChange={handleChange}>
          <MenuItem value={10}>Module 1: Goal here</MenuItem>
          <MenuItem value={20}>Module 2: Goal here</MenuItem>
          <MenuItem value={30}>Module 3: Goal here</MenuItem>
        </Select>
        <FormHelperText>Click to select another goal</FormHelperText>
      </FormControl>
    </Container>
  );
}

export default ModuleSelect;
