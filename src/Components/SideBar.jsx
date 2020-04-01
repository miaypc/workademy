import React from "react";
import Logo from "./Images/Logo.svg";
import styled from "styled-components";
import { Device } from "../Utils/Device";

const Sidebar

const SideBar = () => (
  <SideBarContainer>
    <SideLogoContainer>
      <LogoSmall src={Logo} />
    </SideLogoContainer>
    <Progressbar />
  </SideBarContainer>
);

export default Sidebar;
