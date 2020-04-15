import React from "react";
import Logo from "../Images/Logo.svg";
import styled from "styled-components";
import { Device } from "../../Utils/Device";
import ProgressBar from "./ProgressBar";
import { LeftBar } from "../../Pages/StylePages";

const SideBarContainer = styled.div`
  display: flex;
  flex-shrink: 1;
  flex-direction: column;
  position: relative;
  min-width: 150px;
  background-color: #f0f0f0;
  @media only screen and (max-width: 500px) {
    min-width: 100px;
  }
`;

const LogoSmall = styled.img`
  min-width: 60px;
  margin: 0.5em;
  justify-self: flex-start;
  padding: 0;
  max-width: 100%;
`;

const SideBar = ({ currentStep }) => (
  <LeftBar>
    <SideBarContainer>
      <LogoSmall src={Logo} />
      <ProgressBar currentStep={currentStep} />
    </SideBarContainer>
  </LeftBar>
);

export default SideBar;
