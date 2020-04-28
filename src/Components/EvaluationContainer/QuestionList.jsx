import React, { useState } from "react";
import styled from "styled-components";
import AddNewContentButton from "../AddNewContentButton";
// import Bin from "../Images/Bin.svg";

const Container = styled.div`
  display: flex;
  text-align: center;
`;

function QuestionList({ questions, deleteQuestion }) {
  // for others

  // for add content on the side

  const handlePlusSubmit = () => {
    // setHint("Please add a content");
    setInterval(() => {
      // setHint("");
    }, 3000);
  };
  return (
    <Container>
      {/* <ol>
        {questions.map((question) => (
          <li>Question</li>
        ))}
      </ol> */}

      <ol>
        <AddNewContentButton
          contents={questions}
          handleDeleteContent={deleteQuestion}
          handlePlusSubmit={handlePlusSubmit}
          ContentText={"Question"}
          handleDeleteTextContent={() => {}}
          textContents={[]}
        />
      </ol>
    </Container>
  );
}

export default QuestionList;
