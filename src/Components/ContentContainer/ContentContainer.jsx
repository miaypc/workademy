import React, { useState } from "react";
import ContentInput from "./ContentInput";
import { TextSmallHeader } from "../../Pages/StylePages";
import _Card from "@material-ui/core/Card";
import styled from "styled-components";
import Color from "../../Utils/Color";
import ContentType from "./ContentType";
import types from "./Type";
import { ReactTinyLink } from "react-tiny-link";

const Card = styled(_Card)`
  width: 80%;
  margin-top: 5%;
  margin-left: 1%;
  border: 5px solid ${Color.mainNavy};
`;
const LinkField = styled.div`
  margin: 5%;
`;

function ContentContainer() {
  const [selectedType, setSelectedType] = useState();
  const [articles, setArticles] = useState([]);

  const handleSelectType = (type) => {
    setSelectedType(type);
  };
  const handleCreateArticle = (link) => {
    console.log(link);
    setArticles([...articles, link]);
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
        <ContentInput
          selectedType={selectedType}
          onCreateArticle={handleCreateArticle}
        />
        <LinkField>
          {articles.map((article) => {
            return (
              <ReactTinyLink
                cardSize="small"
                showGraphic={true}
                maxLine={2}
                minLine={1}
                url={article}
              />
            );
          })}
        </LinkField>
      </Card>
    </div>
  );
}

export default ContentContainer;
