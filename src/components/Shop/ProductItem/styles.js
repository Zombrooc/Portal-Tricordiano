import styled from "styled-components";

export const ProductCard = styled.div`
  width: 210px;
  /* width: 18rem; */
  border-radius: 10px;
  overflow: hidden;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  background-color: #fff;
  color: var(--color-grey);

  margin: 12px;

  img {
    width: 100%;
    height: 200px;
  }

  @media (min-width: 1080px) {
    margin: 24px;
  }

  @media (max-width: 320px) {
    width: 100%;
    margin: 5px;
  }
`;

export const ProductPrice = styled.div`
  font-size: 1.6rem;
  font-weight: bold;
  color: var(--color-success);

`;

export const ProductTitle = styled.div`
  font-size: 1.3rem;
  font-weight: bold;
`;

export const ProductInfo = styled.div`
  padding: 1.2rem;

  & div:nth-child(1) {
    display: flex;
    justify-content: space-between;
  }
`;

export const ProductButton = styled.div`
  width: 100%;
  height: 50px;
  background: var(--color-success);
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--color-light);
  font-size: 1.4rem;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    background: var(--color-dark-success);
  }
`;

export const ProductOwner = styled.div`
  font-size: 0.9rem;

  span {
    font-weight: bold;
  }
`;