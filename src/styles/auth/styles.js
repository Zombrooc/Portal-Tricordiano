import styled from "styled-components";

export const Middlebox = styled.div`
  width: 550px;

  background: rgba(255, 255, 255, 0.35);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.18);
  border-radius: 25px;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  transition: all 0.5s ease-in-out;

  font-style: bold;

  padding: 2rem 3rem;

  @media (max-width: 824px) {
    padding: 2rem;
    border-radius: 0;
    width: 100vw;
  }
`;

export const BrandName = styled.div`
  font-size: 2rem;
  font-weight: 600;
  font-family: "Roboto", sans-serif;
  color: var(--color-dark);
  margin: 0 auto;
  line-height: 0.8;
`;
