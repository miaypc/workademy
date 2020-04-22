import React from "react";
import { YellowButton } from "../Components/styleButton";
import { styled } from "styled-components";

const CourseSummaryButton = ({ onClick }) => {
  return <YellowButton onClick={onClick}>Course summary</YellowButton>;
};
export default CourseSummaryButton;
