import React, { useState } from "react";

// Dependencies
import { useHistory } from "react-router-dom";

// Styled-Components
import { withTheme } from "styled-components";
import { ThemeProvider } from "styled-components";
import styled from "styled-components";
import {
  CreateCourseWrapper,
  CreateCourseHeader,
} from "./styleCreateCoursePage";
import { GlobalColor, TextHeader, TextSmallHeader } from "../StylePages";

// Components
import NewClassButton from "../../Components/NewClassButton";
import Toggle from "../../Components/Toggle/Toggle";

// Images
import bgcorner from "../../Components/Images/DownGreyCorner.svg";
import bgcornerTop from "../../Components/Images/GreyCorner.svg";
import Logo from "../../Components/Images/Logo.svg";
import WhiteLogo from "../../Components/Images/LogoDark.svg";

// Utils
import { useDarkMode } from "../../Utils/Themes/UseDarkMode";
import { lightTheme, darkTheme } from "../../Utils/Themes/Theme";
import { Device } from "../../Utils/Device";

function CreateCoursePage() {
  const [theme, toggleTheme] = useDarkMode();

  const themeMode = theme === "light" ? lightTheme : darkTheme;
  const history = useHistory();

  const LogoBig = styled.img`
  position:absolute;
  padding:20px;
    // min-width: 60px;
    // margin: 0em;
    // justify-self: flex-start;

    // @media ${Device.tablet} {
    //   min-height: 80px;
    // }
  `;

  return (
    <ThemeProvider theme={themeMode}>
      <GlobalColor />
      <Toggle theme={theme} toggleTheme={toggleTheme} />

      <div
        style={{
          backgroundImage: `url(${bgcorner}`,
          height: "300px",
          width: "300px",
          bottom: "0",
          position: "absolute",
          zIndex: "-1",
          left: 0,
        }}
      />
      <div
        style={{
          backgroundImage: `url(${bgcornerTop}`,
          height: "214px",
          width: "300px",
          top: 0,
          right: 0,
          position: "absolute",
          zIndex: "-1",
        }}
      />

      <CreateCourseWrapper>
        <LogoBig src={theme === "dark" ? WhiteLogo : Logo} />
        <CreateCourseHeader>
          <TextHeader>
            Welcome to the Workademy Course Builder!
            <TextSmallHeader>
              To start creating your class, click on the button below
            </TextSmallHeader>
          </TextHeader>
          <div className="bottomButtons">
            <NewClassButton onClick={() => history.push("/wizard")} />
          </div>
        </CreateCourseHeader>
      </CreateCourseWrapper>
    </ThemeProvider>
  );
}

export default CreateCoursePage;
