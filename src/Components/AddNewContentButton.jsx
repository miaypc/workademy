import React from "react";
import Color from "../Utils/Color";
import styled from "styled-components";
import { SignButton } from "./styleButton";
import BinYellow from "../Components/Images/BinYellow.svg";

const Li = styled.li`
  color: ${({ theme }) => theme.text};
  font-size: 25px;
  text-align: center;
  font-weight: bold;
  margin-left: 0.5em;
  margin-right: 0.5em;
`;

const ContentBin = styled.img`
  display: flex;
  align-items: flex-start;
  width: 18px;
  cursor: pointer;
`;

const ContentTextField = styled.div`
  display: flex;
  flex-direction: row;
`;

const ContentList = styled.div`
  color: ${({ theme }) => theme.text};
  font-size: 25px;
  text-align: center;
  font-weight: bold;
  margin-bottom: 1em;
`;

const ContentDetails = styled.p`
  color: ${({ theme }) => theme.text};
  font-size: 15px;
`;

function AddNewContentButton({
  contents,
  handleDeleteContent,
  ContentText,
  handleDeleteTextContent,
  textContents,
  renderContent,
}) {
  return (
    <div>
      <ContentList>Here is the list of your {ContentText}</ContentList>
      {contents.map((content) => {
        return (
          <div>
            <ContentTextField>
              <Li>{ContentText} </Li>
              <ContentBin
                onClick={() => handleDeleteContent(content)}
                src={BinYellow}
              />
            </ContentTextField>
            <ContentDetails>
              {renderContent
                ? renderContent(content).slice(0, 30)
                : content.slice(0, 30)}
            </ContentDetails>
          </div>
        );
      })}
      {textContents.map((textContent) => {
        return (
          <div>
            <ContentTextField>
              <Li>{ContentText} </Li>
              <ContentBin
                onClick={() => handleDeleteTextContent(textContent)}
                src={BinYellow}
              />
            </ContentTextField>
            <ContentDetails>{textContent.slice(0, 30)}</ContentDetails>
          </div>
        );
      })}
    </div>
  );
}

export default AddNewContentButton;
