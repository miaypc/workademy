import React, { useState, useEffect } from "react";
import "./style.js";
import styled from "styled-components";
import AddNewContentButton from "../../Components/AddNewContentButton";
import ContentContainer from "../../Components/ContentContainer/ContentContainer";
import { RightSection, ButtonsContainer } from "../StylePages";
import QuestionSelect from "../../Components/Select/QuestionSelect";
import { NavigationButton } from "../../Components/styleButton";
import { connect } from "react-redux";

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
  const [text, setText] = useState("");
  const [textContents, setTextContents] = useState([]);
  const [questionId, setQuestionId] = useState(2);

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
    props.dispatch({
      type: "CREATE_CONTENT",
      contentValue: text,
      questionId: questionId,
    });
  };

  //using useEffect
  // useEffect(() => {
  //   handleTextChange();
  //   handleCreateText();
  //   handleTextSubmit();
  // }, [questionId]);

  // for others
  const handleValueChange = (event) => {
    setLink(event.target.value);
  };

  const handleCreateContent = (link) => {
    setContents([...contents, link]);
    props.dispatch({
      type: "CREATE_CONTENT",
      contentValue: link,
      questionId: questionId,
    });
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

  // for delete content on the side
  const handleDeleteContent = (link) => {
    setContents(contents.filter((element) => element !== link));
    props.dispatch({
      type: "DELETE_CONTENT",
      value: link,
    });
  };

  const handleDeleteTextContent = (text) => {
    setTextContents(textContents.filter((element) => element !== text));
    props.dispatch({
      type: "DELETE_CONTENT",
      value: text,
    });
  };

  return (
    <RightSection>
      <QuestionSelect
        handleSelectChange={handleSelectChange}
        questionId={questionId}
        questions={props.questions}
      />
      <ContentField>
        <ContentLeft>
          <ContentContainer
            contents={contents}
            handleValueSubmit={handleValueSubmit}
            handleValueChange={handleValueChange}
            link={link}
            error={error}
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

function mapStateToProps(state) {
  return {
    questions: state.course.questions,
    contents: state.course.contents,
  };
}
export default connect(mapStateToProps)(ContentPage);
