import React, { useState } from "react";
import "./CourseNamePage.scss";
import SideBar from "../../Components/Navbars/SideBar";

// importing styled components for page setup
import {
  PageContainer,
  LeftBar,
  RightSection,
  ButtonsContainer
} from "../StylePages";
import CourseName from "../../Components/Input/CourseName";
import CourseDescription from "../../Components/Input/CourseDescription";
import styled from "styled-components";
import { useEffect } from "react";

const SmallParagraph = styled.p`
  color: red;
  font-size: 8px;
  display: flex;
  justify-content: flex-end;
  padding-right: 10px;
`;

function CourseNamePage(props) {
  const [isErrorVisible, setIsErrorVisible] = useState(false);
  const [courseName, setCourseName] = useState("");
  const [courseDescription, setCourseDescription] = useState("");

  function showErrorMessage() {
    if (isErrorVisible) {
      return <SmallParagraph>Please fill all the fields</SmallParagraph>;
    }
  }
  function goToNextStep() {
    if (courseName && courseDescription) {
      props.nextStep();
    } else {
      setIsErrorVisible(true);
    }
  }
  useEffect(() => {
    if (courseName && courseDescription) {
      setIsErrorVisible(false);
    }
  }, [courseName, CourseDescription]);

  return (
    <PageContainer>
      <LeftBar>
        <SideBar />
      </LeftBar>
      <RightSection>
        <CourseName onChange={event => setCourseName(event.target.value)} />
        <CourseDescription
          onChange={event => setCourseDescription(event.target.value)}
        />
        {showErrorMessage()}
        <ButtonsContainer>
          <button onClick={props.previousStep}>Previous Step</button>
          <button onClick={goToNextStep}>Next Step</button>
        </ButtonsContainer>
      </RightSection>
    </PageContainer>
  );
}

export default CourseNamePage;
