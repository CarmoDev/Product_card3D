import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 80%;
  max-width: 700px;
  height: 100vh;
  align-items: center;
  justify-content: space-around;
  margin: 0 auto;

  @media screen and (max-width: 720px) {
    flex-direction: column;
  }
`;

export const ProductInformation = styled.div`
  span {
    font-weight: 300;
  }

  h2 {
    font-family: 'Crimson Pro', serif;
  }
`;

export const CardButton = styled.button`
  padding: 8px 16px;
  border: 1px solid #271A45;
  border-radius: 20px;
  font-family: 'Lato', sans-serif;
  font-weight: 400;
  background: transparent;
`;