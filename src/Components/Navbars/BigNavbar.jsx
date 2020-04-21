import React from "react";
import Logo from "../Images/Logo.svg";
import styled from "styled-components";
import { Device } from "../../Utils/Device";

const BigNavContainer = styled.div`
  display: flex;
  position: relative;
  flex-grow: 1;
  flex-flow: row nowrap;
  align-items: center;
  margin: 0;
  max-width: 100%;
  max-height: 25%;
  background-color: #ffffff;
`;
const LogoContainer = styled.div`
  display: flex;
  position: relative;
  flex-grow: 1;
  flex-direction: column;
  min-width: 200px;
  margin: 0.5em;

  @media ${Device.tablet} {
    min-width: 300px;
    flex-direction: row;
  }
  @media ${Device.laptop} {
    min-width: 400px;
  }
`;
const LogoBig = styled.img`
  min-width: 60px;
  margin: 0em;
  justify-self: flex-start;

  @media ${Device.tablet} {
    min-height: 80px;
  }
`;

const RightCorner = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  float: right;
  margin: 0em;
  padding: 0em;
  margin-left: 40px;
  min-height: 150px;
  width: 200px;
  background-image: url(${require(`../Images/GreyCorner.svg`)});
  background-size: cover;
  background-repeat: no-repeat;

  @media ${Device.laptop} {
    margin-left: 250px;
  }
`;

const BigNavbar = () => (
  <BigNavContainer>
    <LogoContainer>
      <LogoBig src={Logo} />
    </LogoContainer>
    <RightCorner />
  </BigNavContainer>
);

export default BigNavbar;
