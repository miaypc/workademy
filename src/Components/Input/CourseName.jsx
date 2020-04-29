import React from "react";

// ----- importing TextField from Material ui WITH UNDERSCORE as I will put my own styles to this component
import _TextField from "@material-ui/core/TextField";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import styled from "styled-components";

// styles
const TextField = styled(_TextField)`
  > div {
    background-color: #e8e8e8;
  }
  width: 70%;
`;

const theme = createMuiTheme({
  overrides: {
    MuiInputLabel: {
      root: {
        color: "#6B6B6B",
        "&$focused": {
          color: "#FCB536",
        },
      },
    },
  },
});

const Container = styled.div`
  margin: 10px;
  display: flex;
  justify-content: center;
`;

function CourseName({ onChange, value }) {
  return (
    <Container>
      <ThemeProvider theme={theme}>
        <TextField
          id="outlined-textarea"
          label="Course Name"
          placeholder=""
          multiline
          variant="outlined"
          value={value}
          onChange={onChange}
        />
      </ThemeProvider>
    </Container>
  );
}

export default CourseName;
