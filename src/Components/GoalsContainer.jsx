import React, { useState } from "react";
import Color from "../Utils/Color";
import styled from "styled-components";
import _Card from "@material-ui/core/Card";
import _Typography from "@material-ui/core/Typography";
//import ThreeDots from "./Images/ThreeDots.svg";
import _MoreIcon from "@material-ui/icons/MoreVert";
import IconButton from "@material-ui/core/IconButton";
import MenuItem from "@material-ui/core/MenuItem";

const Card = styled(_Card)`
  && {
    background-color: ${Color.mainNavy};
  }
  padding: 1.5em;
  width: 68%;
  margin: 0 auto;
  max-width: 600px;
  margin-bottom: 1em;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 800px) {
    padding: 1em;
  }
`;

const Typography = styled(_Typography)`
  color: ${Color.mainWhite};
  font-size: 20px;
`;

const ThreeDotsContainer = styled.img`
  width: 5px;
  cursor: pointer;
`;

const MoreIcon = styled(_MoreIcon)`
  color: ${Color.mainWhite};
`;

function GoalsContainer({ goal }) {
  return (
    <Card>
      <Typography>{goal.verb + "" + goal.name}</Typography>
      {/* <ThreeDotsContainer src={ThreeDots} /> */}
      <IconButton edge="end" size="large" aria-label="display more actions">
        <MoreIcon size="large">
          <MenuItem>Edit</MenuItem>
          <MenuItem>Delete</MenuItem>
        </MoreIcon>
      </IconButton>
    </Card>
  );
}

export default GoalsContainer;
