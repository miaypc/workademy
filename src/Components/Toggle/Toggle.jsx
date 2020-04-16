import React from "react";
import styled from "styled-components";

const ToggleContainer = styled.div`
  background: ${({ theme }) => theme.gradient};
  border: 1px solid ${({ theme }) => theme.toggleBorder};
  border-radius: 5px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  margin: 0;
  padding: 0.2rem;
  position: relative;
  width: 2rem;
  height: 1.6rem;
  &:focus {
    outline: none;
  }
`;

const ToggleButton = styled.button`
  border-radius: 10px;
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
