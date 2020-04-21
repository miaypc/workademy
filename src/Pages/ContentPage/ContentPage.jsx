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
  const [contents, setContents] = useState([]);
  const [link, setLink] = useState("");
  const [error, setError] = useState(null);
  const [hint, setHint] = useState(null);
  const [text, setText] = useState("");
  const [textContents, setTextContents] = useState([]);

  //for Text
  const handleTextChange = (event) => {
    setText(event.target.value);
  };
  const handleTextSubmit = (event) => {
    console.log(text);
    event.preventDefault();
    handleCreateText(text);
    setText("");
  };
  const handleCreateText = (text) => {
    setTextContents([...textContents, text]);
  };

  // for others
  const handleValueChange = (event) => {
    setLink(event.target.value);
  };

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

  const handleCreateContent = (link) => {
    setContents([...contents, link]);
  };

  // for add content on the side
  const handleDeleteContent = (link) => {
    setContents(contents.filter((element) => element !== link));
  };

  const handleDeleteTextContent = (text) => {
    setTextContents(textContents.filter((element) => element !== text));
  };

  const handlePlusSubmit = () => {
    setHint("Please add a content");
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
            handleTextSubmit={handleTextSubmit}
            handleTextChange={handleTextChange}
            text={text}
            textContents={textContents}
          />
        </ContentLeft>
        <ol>
          <AddNewContentButton
            contents={contents}
            handleDeleteContent={handleDeleteContent}
            handlePlusSubmit={handlePlusSubmit}
            textContents={textContents}
            handleDeleteTextContent={handleDeleteTextContent}
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
