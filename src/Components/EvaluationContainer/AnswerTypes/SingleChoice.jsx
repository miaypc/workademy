import React from "react";
import _Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import TextField from "@material-ui/core/TextField";
import styled from "styled-components";
import Color from "../../../Utils/Color";

const Radio = styled(_Radio)`
  > span {
    color: ${Color.mainNavy};
  }
`;

export default function SingleChoice() {
  const [correctAnswer, setCorrectAnswer] = React.useState();

  const handleChange = (event) => {
    setCorrectAnswer(event.target.value);
  };

  return (
    <FormControl component="fieldset">
      <FormLabel component="legend">
        Provide your answers and select the correct one
      </FormLabel>
      <RadioGroup
        aria-label="gender"
        name="gender1"
        value={correctAnswer}
        onChange={handleChange}
      >
        <FormControlLabel
          value="1"
          control={<Radio />}
          label={<TextField id="standard-basic" />}
        />
        <FormControlLabel
          value="2"
          control={<Radio />}
          label={<TextField id="standard-basic" />}
        />
        <FormControlLabel
          value="3"
          control={<Radio />}
          label={<TextField id="standard-basic" />}
        />
        <FormControlLabel
          value="4"
          control={<Radio />}
          label={<TextField id="standard-basic" />}
        />
      </RadioGroup>
    </FormControl>
  );
}
