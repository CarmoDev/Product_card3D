import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 60%;

  iframe {
    width: 450px;
    height: 300px;
  }

  button {
    background: transparent;
    height: fit-content;
    padding: 8px;
    border: none;
    cursor: pointer;
    

    @media screen and (max-width: 720px) {
      position: absolute;
      right: 20px;
    }
  }

  img {
    align-self: flex-start;
  }
`;