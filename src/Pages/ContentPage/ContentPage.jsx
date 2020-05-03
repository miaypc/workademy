import React, { useState, useMemo } from "react";
import "./style.js";
import styled from "styled-components";
import AddNewContentButton from "../../Components/AddNewContentButton";
import ContentContainer from "../../Components/ContentContainer/ContentContainer";
import { RightSection, ButtonsContainer } from "../StylePages";
import QuestionSelect from "../../Components/Select/QuestionSelect";
import { NavigationButton } from "../../Components/styleButton";
import { connect } from "react-redux";
import { useEffect } from "react";

const ContentField = styled.div`
  display: flex;
  flex-direction: row;
`;

const ContentLeft = styled.div`
  width: 90%;
`;

function ContentPage(props) {
  const [error, setError] = useState(null);
  const [link, setLink] = useState("");
  const [text, setText] = useState("");
  const [questionId, setQuestionId] = useState("");
  const [contents, textContents] = useMemo(() => {
    const links = [];
    const texts = [];
    (props.contents || []).forEach((item) => {
      if (item.questionId !== questionId) return;
      if (item.type === "URL") {
        links.push(item);
      } else {
        texts.push(item);
      }
    });
    return [links, texts];
  }, [props.contents, questionId]);

  useEffect(() => {
    setQuestionId(
      props.questions && props.questions.length ? props.questions[0].id : ""
    );
  }, [props.questions]);
  //for select
  const handleSelectChange = (event) => {
    setQuestionId(event.target.value);
  };

  //for Text

  const handleTextChange = (event) => {
    setText(event.target.value);
  };
  const handleTextSubmit = (event) => {
    event.preventDefault();
    handleCreateText(text);
    setText("");
  };

  const handleCreateText = (text) => {
    props.dispatch({
      type: "CREATE_CONTENT",
      contentValue: text,
      questionId: questionId,
      contentType: "HTML",
    });
  };

  // for others
  const handleValueChange = (event) => {
    setLink(event.target.value);
  };

  const handleCreateContent = (link) => {
    props.dispatch({
      type: "CREATE_CONTENT",
      contentValue: link,
      questionId: questionId,
      contentType: "URL",
    });
  };

  const handleValueSubmit = (event) => {
    event.preventDefault();
    if (
      !link.match(
        /(http|https):\/\/(\w+:{0,1}\w*)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%!\-/]))?/
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
  const handleDeleteContent = (content) => {
    //setContents(contents.filter((element) => element !== link));
    props.dispatch({
      type: "DELETE_CONTENT",
      id: content.id,
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
            handleDeleteTextContent={handleDeleteContent}
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
  const { selectedGoal, questions } = state.course;
  return {
    selectedGoal: selectedGoal,
    questions:
      selectedGoal && questions
        ? questions.filter((q) => q.goalId === selectedGoal.id)
        : [],
    contents: state.course.contents,
  };
}
export default connect(mapStateToProps)(ContentPage);
