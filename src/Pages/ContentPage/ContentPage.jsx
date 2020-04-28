import React, { useState } from "react";
import "./style.js";
import styled from "styled-components";
import AddNewContentButton from "../../Components/AddNewContentButton";
import ContentContainer from "../../Components/ContentContainer/ContentContainer";
// import CourseSummaryButton from "../../Components/CourseSummaryButton";
import { RightSection, ButtonsContainer, BlueTobBar } from "../StylePages";
import QuestionSelect from "../../Components/Select/QuestionSelect";
import { NavigationButton } from "../../Components/styleButton";

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
  const [questionId, setQuestionId] = useState(10);

  //for select
  const handleSelectChange = (event) => {
    setQuestionId(event.target.value);
  };

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
    if (
      !link.match(
        /(http|https):\/\/(\w+:{0,1}\w*)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%!\-\/]))?/
      )
    ) {
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
      {/* <BlueTobBar>Question 1: Blended Learning is... </BlueTobBar> */}
      <QuestionSelect
        handleSelectChange={handleSelectChange}
        questionId={questionId}
      />
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
            ContentText="Content"
            handleDeleteTextContent={handleDeleteTextContent}
            textContents={textContents}
          />
        </ol>
      </ContentField>

      <ButtonsContainer>
        <NavigationButton onClick={props.previousStep}>
          Previous Step
        </NavigationButton>
        <NavigationButton onClick={() => props.goToStep(2)}>
          Next Step
        </NavigationButton>
      </ButtonsContainer>
    </RightSection>
  );
}

export default ContentPage;
