import React from "react";

// ----- importing TextField from Material ui WITH UNDERSCORE as I will put my own styles to this component
import _TextField from "@material-ui/core/TextField";
import styled from "styled-components";

// styles
const TextField = styled(_TextField)`
  > div {
    background-color: #e8e8e8;
  }
  width: 70%;
`;

const Container = styled.div`
  margin: 10px;
  display: flex;
  justify-content: center;
`;

function CourseName({ onChange, value }) {
  return (
    <Container>
      <TextField
        id="outlined-textarea"
        label="Course Name"
        placeholder=""
        multiline
        variant="outlined"
        value={value}
        onChange={onChange}
      />
    </Container>
  );
}

export default CourseName;
