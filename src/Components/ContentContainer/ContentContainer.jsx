import React, { useState } from "react";
import ContentInput from "./ContentInput";
import { TextSmallHeader } from "../../Pages/StylePages";
import _Card from "@material-ui/core/Card";
import styled from "styled-components";
import Color from "../../Utils/Color";
import ContentType from "./ContentType";
import types from "./Type";
import { ReactTinyLink } from "react-tiny-link";
import { HintMessage } from "../../Pages/StylePages";
import _Box from "@material-ui/core/Box";
import _Typography from "@material-ui/core/Typography";

const Card = styled(_Card)`
  width: 95%;
  margin-top: 5%;
  margin-left: 1%;
  border: 5px solid ${Color.mainNavy};
`;
const LinkField = styled.div`
  margin: 5%;
`;
const Typography = styled(_Typography)`
  border: 1px solid ${Color.mainWhiteGrey};
  width: 81%;
  height: 50px;
  overflow: scroll;
`;
// const TextCard = styled(_Card)`
//   width: 81%;
//   border: 1px solid ${Color.mainWhiteGrey};
//   margin-left: 5%;
//   margin-top: 2%;
//   padding-top: 2%;
// `;

function ContentContainer({
  contents,
  link,
  error,
  handleValueSubmit,
  handleValueChange,
  hint,
  handleTextSubmit,
  handleTextChange,
  text,
  textContents,
}) {
  const [selectedType, setSelectedType] = useState();

  const handleSelectType = (type) => {
    setSelectedType(type);
  };

  return (
    <div>
      <Card>
        <TextSmallHeader>Related Content</TextSmallHeader>

        <ContentType
          types={types}
          handleSelectType={handleSelectType}
          selectedType={selectedType}
        />
        {hint && <HintMessage>{hint}</HintMessage>}
        <ContentInput
          selectedType={selectedType}
          handleValueSubmit={handleValueSubmit}
          handleValueChange={handleValueChange}
          link={link}
          error={error}
          handleTextSubmit={handleTextSubmit}
          handleTextChange={handleTextChange}
          text={text}
        />

        {textContents.map((textContent) => {
          return (
            <LinkField>
              <Typography> {textContent}</Typography>
            </LinkField>
          );
        })}
        <LinkField>
          {contents.map((content) => {
            return (
              <ReactTinyLink
                cardSize="small"
                showGraphic={true}
                maxLine={2}
                minLine={1}
                url={content}
              />
            );
          })}
        </LinkField>
      </Card>
    </div>
  );
}

export default ContentContainer;
