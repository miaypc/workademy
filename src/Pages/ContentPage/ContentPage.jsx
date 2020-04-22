import React, { useState } from "react";
import "./style.js";
import styled from "styled-components";
import AddNewContentButton from "../../Components/AddNewContentButton";
import ContentContainer from "../../Components/ContentContainer/ContentContainer";
import { RightSection, ButtonsContainer } from "../StylePages";

const ContentField = styled.div`
  display: flex;
  flex-direction: row;
`;

const ContentLeft = styled.div`
  width: 90%;
`;

function ContentPage(props) {
  // const [content, setContent]=useState([]);
  // const handleContentSaveClick=(element)=>{
  //   setContent(content.concat(element))
  // }
  const [contents, setContents] = useState([]);
  const [link, setLink] = useState("");
  const [error, setError] = useState(null);
  const [hint, setHint] = useState(null);

  const handleValueSubmit = (event) => {
    event.preventDefault();
    if (!link) {
      setError("Please provide a link");
    } else if (!link.includes("http")) {
      setError("Please provide a valid link");
    } else {
      handleCreateContent(link);
      setLink("");
      setError(null);
    }
  };

  const handleValueChange = (event) => {
    console.log("value of link", event.target.value);
    setLink(event.target.value);
  };

  const handleCreateContent = (link) => {
    setContents([...contents, link]);
  };

  const handleDeleteContent = (link) => {
    console.log("test", link);
    setContents(contents.filter((element) => element !== link));
  };

  const handlePlusSubmit = () => {
    setHint("Please add a link for the content");
    setInterval(() => {
      setHint("");
    }, 3000);
  };

  return (
    <RightSection>
      <ContentField>
        <ContentLeft>
          <ContentContainer
            contents={contents}
            handleValueSubmit={handleValueSubmit}
            handleValueChange={handleValueChange}
            link={link}
            error={error}
            hint={hint}
          />
        </ContentLeft>
        <ol>
          <AddNewContentButton
            contents={contents}
            handleDeleteContent={handleDeleteContent}
            handlePlusSubmit={handlePlusSubmit}
            ContentText="Content"
          />
        </ol>
      </ContentField>
      <ButtonsContainer>
        <button onClick={props.previousStep}>Previous Step</button>
        <button onClick={() => props.goToStep(3)}>add new goal</button>
        <button onClick={props.nextStep}>Summary</button>
      </ButtonsContainer>
    </RightSection>
  );
}

export default ContentPage;
