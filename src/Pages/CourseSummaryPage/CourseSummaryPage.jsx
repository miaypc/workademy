import React from "react";
import "./CourseSummaryPage.scss";

// importing styled components for page setup
import { RightSection, ButtonsContainer } from "../StylePages";

import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import _FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

import styled from "styled-components";
import Color from "../../Utils/Color";

const FormControl = styled(_FormControl)`
  > div {
    color: ${Color.mainNavy};
  }
  min-width: 80%;
  background-color: ${Color.mainYellow};
`;

function CourseSummaryPage(props) {
  const [goalName, setGoalName] = React.useState("");

  const handleChange = (event) => {
    setGoalName(event.target.value);
  };
  return (
    <RightSection>
      <FormControl variant="outlined">
        <InputLabel id="goal-name">Age</InputLabel>
        <Select
          labelId="goal-name"
          value={goalName}
          onChange={handleChange}
          label="Age"
        >
          <MenuItem value={10}>Module 1: Goal here</MenuItem>
          <MenuItem value={20}>Module 2: Goal here</MenuItem>
          <MenuItem value={30}>Module 2: Goal here</MenuItem>
        </Select>
      </FormControl>
      <ButtonsContainer>
        <button onClick={props.previousStep}>Previous Step</button>
        <button onClick={props.nextStep}>Publish</button>
      </ButtonsContainer>
    </RightSection>
  );
}

export default CourseSummaryPage;
