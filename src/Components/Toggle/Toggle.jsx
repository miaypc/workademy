import React from "react";
import styled from "styled-components";
import { ReactComponent as SunIcon } from "../Images/SunIcon.svg";
import { ReactComponent as MoonIcon } from "../Images/MoonIcon.svg";

const ToggleContainer = styled.div`
  display: flex;
  flex-direction: row;
  background-color: #006fb9;
  border: 1.8px solid ${({ theme }) => theme.toggleBorder};
  justify-content: space-between;
  border-radius: 15px;
  cursor: pointer;
  margin: 0 auto;
  font-size: 0.5rem;
  padding: 0.5rem;
  position: relative;
  position: absolute;
  right: 0;
  z-index: 1;
  width: 5rem;
  height: 2.5rem;
  &:focus {
    outline: none;
  }
  svg {
    height: auto;
    width: 1.5rem;
    transition: all 0.3s linear;
    transition: transform 300ms ease-in-out;
  }
`;

const Toggle = ({ theme, toggleTheme }) => {
  const isLight = theme === "light";
  return (
    <div>
      <ToggleContainer onClick={toggleTheme}>
<<<<<<< HEAD
        <MoonIcon />
=======
        <MoonIcon sr />
>>>>>>> 9fe9e75cd1125beec8d59ed0479d58f1b90e3967
        <SunIcon />
      </ToggleContainer>
    </div>
  );
};

export default Toggle;
