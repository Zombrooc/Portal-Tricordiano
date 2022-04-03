import styled from "styled-components";

export const FABWrapper = styled.button`
  width: 50px;
  height: 50px;

  position: fixed;
  right: 10px;
  bottom: 10px;

  border-radius: 99999px;

  background: var(--color-info);

  display: flex;
  justify-content: center;
  align-items: center;

  
  svg {
    color: var(--color-light);
  }

  z-index: 15;

  cursor: pointer;
`;
