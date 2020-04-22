import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import FormLabel from "@material-ui/core/FormLabel";
import FormControl from "@material-ui/core/FormControl";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";

import _Checkbox from "@material-ui/core/Checkbox";
import TextField from "@material-ui/core/TextField";
import styled from "styled-components";
import Color from "../../../Utils/Color";

// .MuiCheckbox-colorSecondary.Mui-checked
const Checkbox = styled(_Checkbox)`
  > span {
    color: ${Color.mainNavy};
  }
`;

export default function MultipleChoice() {
  const [state, setState] = React.useState({
    gilad: true,
    jason: false,
    antoine: false,
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  const { gilad, jason, antoine, jason2 } = state;

  return (
    <div>
      <FormControl component="fieldset">
        <FormLabel component="legend">
          Provide your answers and click on checkbox for all correct ones.
        </FormLabel>
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox checked={gilad} onChange={handleChange} name="gilad" />
            }
            label={<TextField id="standard-basic" />}
          />
          <FormControlLabel
            control={
              <Checkbox checked={jason} onChange={handleChange} name="jason" />
            }
            label={<TextField id="standard-basic" />}
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={jason2}
                onChange={handleChange}
                name="jason2"
              />
            }
            label={<TextField id="standard-basic" />}
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={antoine}
                onChange={handleChange}
                name="antoine"
              />
            }
            label={<TextField id="standard-basic" />}
          />
        </FormGroup>
      </FormControl>
    </div>
  );
}
