import React from "react";
import Color from "../Utils/Color";
import styled from "styled-components";
<<<<<<< HEAD
import { SignButton } from "./styleButton";
import BinYellow from "../Components/Images/BinYellow.svg";
=======
import Bin from "./Images/Bin.svg";
>>>>>>> 20c1b91d424a23a9ea2a9e7bb0950886ddf26fd2

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
  color: ${Color.mainNavy};
  font-size: 25px;
  text-align: center;
  font-weight: bold;
  margin-bottom: 1em;
`;

const ContentDetails = styled.p`
  color: ${Color.mainNavy};
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
<<<<<<< HEAD
          <ContentTextField>
            <Li>{ContentText} </Li>
            <ContentBin
              onClick={() => handleDeleteContent(content)}
              src={BinYellow}
            />
          </ContentTextField>
=======
          <div>
            <ContentTextField>
              <Li>{ContentText} </Li>
              <ContentBin
                onClick={() => handleDeleteContent(content)}
                src={Bin}
              />
            </ContentTextField>
            <ContentDetails>
              {renderContent
                ? renderContent(content).slice(0, 30)
                : content.slice(0, 30)}
            </ContentDetails>
          </div>
>>>>>>> 20c1b91d424a23a9ea2a9e7bb0950886ddf26fd2
        );
      })}
      {textContents.map((textContent) => {
        return (
<<<<<<< HEAD
          <ContentTextField>
            <Li>Content </Li>
            <ContentBin
              onClick={() => handleDeleteTextContent(textContent)}
              src={BinYellow}
            />
          </ContentTextField>
=======
          <div>
            <ContentTextField>
              <Li>{ContentText} </Li>
              <ContentBin
                onClick={() => handleDeleteTextContent(textContent)}
                src={Bin}
              />
            </ContentTextField>
            <ContentDetails>{textContent.slice(0, 30)}</ContentDetails>
          </div>
>>>>>>> 20c1b91d424a23a9ea2a9e7bb0950886ddf26fd2
        );
      })}
    </div>
  );
}

export default AddNewContentButton;
