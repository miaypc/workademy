import React from "react";
import { YellowButton } from "../Components/styleButton";
import { styled } from "styled-components";

const PublishCourseButton = ({ onClick }) => {
  return <YellowButton onClick={onClick}>Publish Your Course</YellowButton>;
};
export default PublishCourseButton;
