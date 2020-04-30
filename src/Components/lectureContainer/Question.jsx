import React from "react";
import styled from "styled-components";
import { Draggable } from "react-beautiful-dnd";
import Color from "../../Utils/Color";

// styles
const Container = styled.div`
  margin: 2px;
  width: 25%;
  background-color: ${Color.mainWhite};
  color: ${Color.mainNavy};
  height: 50px;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-content: center;
  flex-direction: column;
`;
const Text = styled.div`
  padding: 3px;
  text-align: center;
  @media (max-width: 570px) {
    font-size: 10px;
  }
`;

function Question(props) {
  return (
    <Draggable draggableId={props.question.id} index={props.index}>
      {(provided) => (
        <Container
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
          {props.question.question}
          {/* <Text>Question</Text> */}
        </Container>
      )}
    </Draggable>
  );
}

export default Question;
