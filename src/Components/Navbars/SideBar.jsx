import React from "react";
import Logo from "../Images/Logo.svg";
import styled from "styled-components";
import { Device } from "../../Utils/Device";
import ProgressBar from "./ProgressBar";

const SideBarContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  flex-shrink: 1;
  min-width: 150px;
  background-color: #f0f0f0;
`;

const LogoSmall = styled.img`
  min-width: 60px;
  margin: 0.5em;
  justify-self: flex-start;
  padding: 0;

  /* @media ${Device.mobileL} {
    display: none;
  } */
`;

const SideBar = () => (
  <SideBarContainer>
    <LogoSmall src={Logo} />
    <ProgressBar />
  </SideBarContainer>
);

export default SideBar;
