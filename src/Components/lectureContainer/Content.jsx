import React from "react";
import styled from "styled-components";
import Color from "../../Utils/Color";

// styles
const Container = styled.div`
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
`;

function Content() {
  return (
    <Container>
      <Text>Content</Text>
    </Container>
  );
}

export default Content;
