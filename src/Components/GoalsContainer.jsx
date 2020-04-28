import React, { useState } from "react";
import Color from "../Utils/Color";
import styled from "styled-components";
import _Card from "@material-ui/core/Card";
import _Typography from "@material-ui/core/Typography";
import ThreeDots from "./Images/ThreeDots.svg";

const Card = styled(_Card)`
  && {
    background-color: ${Color.mainNavy};
  }
  padding: 2em;
  width: 68%;
  margin: 0 auto;
  max-width: 600px;
  margin-bottom: 1em;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  @media (max-width: 800px) {
    padding: 1em;
  }
`;

const Typography = styled(_Typography)`
  color: ${Color.mainWhite};
  font-size: 15px;
`;

const ThreeDotsContainer = styled.img`
  width: 5px;
  cursor: pointer;
`;

function GoalsContainer({ goal }) {
  return (
    <Card>
      <Typography>{goal}</Typography>
      <ThreeDotsContainer src={ThreeDots} />
    </Card>
  );
}

export default GoalsContainer;
