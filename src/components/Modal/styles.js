import styled from "styled-components";

export const ModalContainer = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 15;

  background: rgba(46, 46, 46, .7);

  display: ${(props) => (props.open ? "flex" : "none")};
  justify-content: center;
  align-items: center;
`;

export const ModalContent = styled.div`
  width: 50rem;
  max-width: 100vw;
  height: auto;
  border-radius: 17px;
  background-color: var(--color-light);
  padding: 7rem;
`;
