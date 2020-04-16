import React, { useState } from "react";
import styled from "styled-components";
import NewClassButton from "../../Components/NewClassButton";
import BigNavbar from "../../Components/Navbars/BigNavbar";
import { withTheme } from "styled-components";
import { ThemeProvider } from "styled-components";
import { useDarkMode } from "../../Utils/Themes/UseDarkMode";
import { lightTheme, darkTheme } from "../../Utils/Themes/Theme";
import Toggle from "../../Components/Toggle/Toggle";
import {
  CreateCourseWrapper,
  CreateCourseHeader,
} from "./styleCreateCoursePage";
import { GlobalColor, TextHeader, TextSmallHeader } from "../StylePages";
import { useHistory } from "react-router-dom";

function CreateCoursePage() {
  const [theme, toggleTheme] = useDarkMode();

  const themeMode = theme === "light" ? lightTheme : darkTheme;
  const history = useHistory();

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalColor />
      <CreateCourseWrapper>
        <BigNavbar />
        <CreateCourseHeader>
          <Toggle theme={theme} toggleTheme={toggleTheme} />
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
