import React from "react";
import NewClassButton from "../../Components/NewClassButton";
import BigNavbar from "../../Components/Navbars/BigNavbar";
import styled from "styled-components";
import Typography from "@material-ui/core/Typography";

import {
  CreateCourseWrapper,
  CreateCourseHeader,
} from "./styleCreateCoursePage";

function CreateCoursePage(props) {
  return (
    <CreateCourseWrapper>
      <BigNavbar />
      <CreateCourseHeader>
        <Typography variant="h1" component="h1" color="primary">
          Welcome to the Workademy Course Builder !
        </Typography>
        <Typography variant="h2" component="h2" color="primary">
          To start creating your class, click on the button below
        </Typography>
        <div className="bottomButtons">
          <NewClassButton onClick={props.nextStep} />
        </div>
      </CreateCourseHeader>
    </CreateCourseWrapper>
  );
}

export default CreateCoursePage;
