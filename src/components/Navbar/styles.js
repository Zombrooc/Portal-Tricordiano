import styled from "styled-components";

export const Header = styled.div`
  background: rgba(255, 255, 255, 0.35);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.18);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
`;

export const BrandName = styled.span`
  font-size: 1.9rem;
  font-weight: 600;
  font-family: "Roboto", sans-serif;
  color: var(--color-light);
  margin: 0;
  line-height: 0.8;
`;

export const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-right: 1rem;
  font-size: 1rem;
  font-weight: 600;
  font-family: "Roboto", sans-serif;
  color: var(--color-grey);
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  a {
    margin-left: 1rem;
    text-decoration: none;
    color: var(--color-grey);
    display: flex;
    align-items: center;
    justify-content: center;

    width: 100%;
    height: 100%;
    padding: 0.5rem;
    transition: all 0.2s ease-in-out;

    span {
      margin-left: 0.5rem;
    }

    &:hover {
      color: var(--color-success);

      span {
        color: var(--color-success);
      }
    }
  }

  @media (max-width: 824px) {
    position: fixed;
    top: 0;
    left: 0;
    
    flex-direction: column;
    justify-content: flex-start;

    background: rgba(255, 255, 255, 0.7);
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);
    border-radius: 0px 20px 20px 0px;
    border: 1px solid rgba(255, 255, 255, 0.18);

    width: ${(props) => (props.menuOpen ? "15rem"  : "0")};
    max-width: 100vw;
    height: 100vh !important;
    overflow: hidden;
    padding: ${(props) => (props.menuOpen ? "1.2rem" : "0")};

    a {
      justify-content: flex-start;
      text-align: center;
      color: var(--color-grey);
      width: 100%;
      height: 60px;
    }
  }
`;

export const HamburgerButton = styled.div`
  display: none;

  @media (max-width: 824px) {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 0.7rem;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
  }

  div {
    display: flex;
    flex-direction: column;
    width: 28px;
    cursor: pointer;

    span {
      background: var(--color-grey);
      border-radius: 10px;
      height: 4px;
      margin: 3px 0;
      transition: 0.4s cubic-bezier(0.68, -0.6, 0.32, 1.6);

      &:nth-child(1) {
        width: 50%;

        ${(props) =>
          props.active
            ? "transform-origin: bottom;transform: rotatez(45deg) translate(3px, 2px);"
            : null}
      }

      &:nth-child(2) {
        width: 100%;

        ${(props) =>
          props.active
            ? "transform-origin: top;transform: rotatez(-45deg);"
            : null}
      }

      &:nth-child(3) {
        width: 75%;
        ${(props) =>
          props.active
            ? "transform-origin: bottom;width: 50%;transform: translate(12px, -6px) rotatez(45deg);"
            : null}
      }
    }
  }
`;

export const AuthActions = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;

  a:nth-child(2) {
    color: var(--color-success);
  }

  @media (max-width: 824px) {
    flex-direction: column;
    justify-content: flex-end;
    a {
      margin-left: 1rem;
      width: 100%;
      height: 40px;

      span {
        margin-left: 0.5rem;
      }

      &:nth-child(2) {
        margin-bottom: 1.5rem;
      }
    }
  }
`;

export const UserAvatar = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 1.5rem;

  .text {
    width: 8rem;
    display: flex;
    flex-direction: column;

    .name {
      font-size: 1rem;
      font-weight: 600;
    }

    .username {
      font-size: 0.7rem;
      font-weight: 400;
    }
  }

  .signoutButton {
    width: auto;
    padding-left: 3rem;
    padding-right: 3rem;
    margin-left: 1rem;
    margin-right: 1rem;
    background: var(--color-danger);
    color: var(--color-light);
    border-radius: 99999px;
    height: 2.5rem;
    display: flex;
    justify-content: center;
    align-items: center;

    &:hover {
      background: var(--color-dark-danger);
    }
  }

  @media (max-width: 824px) {
    flex-direction: column;
    justify-content: flex-end;
    
    margin-left: 0;

    .signoutButton {
      margin-top: 1rem;
    }
  }
`;
