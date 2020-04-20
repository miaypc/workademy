import React from "react";
import Color from "../Utils/Color";
import styled from "styled-components";
import { Device } from "../Utils/Device";

const Button = styled.button`
  display: flex;
  justify-self: center;
  font-family: sans-serif;
  text-align: left;
  text-decoration: none;
  border: 0em;
  border-radius: 5px;
  padding: 1em;
  /* margin: 0.5; */
  margin: 5em 0em 5em;
  background-color: ${Color.mainNavy};
  color: ${Color.mainWhite};
  cursor: pointer;
  font-size: 1em;

  @media ${Device.tablet} {
    padding: 1.5em;
    font-size: 2em;
    margin: 4em;
    border-radius: 10px;
  }

  @media ${Device.laptop} {
    padding: 1em 4em 1em 4em;
    background-image: url(${require(`../Components/Images/Plus.svg`)});
    background-position: right 20px top 20px;
    background-size: 10%;
    background-repeat: no-repeat;
  }
`;

const AddNewGoalButton = ({ onClick }) => {
  return <Button onClick={onClick}>Add a new goal 🎯</Button>;
};
export default AddNewGoalButton;
