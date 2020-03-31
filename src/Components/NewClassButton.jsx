import React from "react";
import Color from "../Utils/Color";
import styled from "styled-components";

const Button = styled.button`
  font-family: sans-serif;
  text-align: center;
  text-decoration: none;
  border: none;
  border-radius: 5px;
  background-color: ${Color.mainYellow};
  color: ${Color.mainNavy};
  padding: 0.3em 1.5em;
  cursor: pointer;
  font-size: 2em;
`;

const NewClassButton = () => {
  return <Button>Create New Class</Button>;
};
export default NewClassButton;
