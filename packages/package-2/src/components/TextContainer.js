import styled from "styled-components";

const Wrapper = styled.div`
  h1 {
    color: tomato;
  }
  p {
    color: rebeccapurple;
  }
`;

const TextContainer = ({ children }) => {
  // return 123;
  return <Wrapper>{children}</Wrapper>;
};

export default TextContainer;

// module.exports = {
//   Button,
// };
