import React, { useState } from "react";
import styled from "styled-components";
import AddNewContentButton from "../AddNewContentButton";

const Container = styled.div`
  display: flex;
  text-align: center;
`;

function QuestionList({ questions, deleteQuestion }) {
  const handlePlusSubmit = () => {
    // setHint("Please add a content");
    setInterval(() => {
      // setHint("");
    }, 3000);
  };
  return (
    <Container>
      <ol>
        <AddNewContentButton
          contents={questions}
          handleDeleteContent={deleteQuestion}
          ContentText={"Question"}
          handlePlusSubmit={handlePlusSubmit}
          // Add two epmty props (handleDeleteTextContent and textContents) so I can use the same component as on the content page
          handleDeleteTextContent={() => {}}
          textContents={[]}
        />
      </ol>
    </Container>
  );
}

export default QuestionList;
