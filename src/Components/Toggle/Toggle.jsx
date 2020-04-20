import React from "react";
import styled from "styled-components";

const ToggleContainer = styled.div`
  display: flex;
  background: ${({ theme }) => theme.gradient};
  border: 1px solid ${({ theme }) => theme.toggleBorder};
  border-radius: 5px;
  cursor: pointer;

  margin: 0;
  padding: 0.2rem;
  position: absolute;
  right: 0;
  z-index: 1;
  width: 1.6rem;
  height: 1.6rem;
  &:focus {
    outline: none;
  }
`;

const ToggleButton = styled.button`
  background: ${({ theme }) => theme.gradient};
  border-radius: 5px;
  width: 18px;
  height: 18px;
`;

const Toggle = ({ theme, toggleTheme }) => {
  const isLight = theme === "light";
  return (
    <div>
      <ToggleContainer>
        <ToggleButton onClick={toggleTheme} />
      </ToggleContainer>
    </div>
  );
};

export default Toggle;
