import React, { useState } from "react";
import "./style.js";
import styled from "styled-components";

import ContentContainer from "../../Components/ContentContainer/ContentContainer";
import { RightSection, ButtonsContainer } from "../StylePages";

function ContentPage(props) {
  return (
    <RightSection>
      <ContentContainer />
      <ButtonsContainer>
        <button onClick={props.previousStep}>Previous Step</button>
        <button onClick={() => props.goToStep(3)}>add new goal</button>
        <button onClick={props.nextStep}>Summary</button>
      </ButtonsContainer>
    </RightSection>
  );
}

export default ContentPage;
