import styled from "styled-components";

export const Navbar = styled.div`
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

  .brandName {
    p {
      font-size: 1.9rem;
      font-weight: 600;
      font-family: "Roboto", sans-serif;
      color: var(--color-light);
      margin: 0;
      line-height: 0.8;
    }
  }

  .menu {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    margin-right: 1rem;
    font-size: 1rem;
    font-weight: 600;
    font-family: "Roboto", sans-serif;
    color: var(--color-dark);
    cursor: pointer;
    transition: all 0.2s ease-in-out;

    a {
      margin-left: 1rem;
      text-decoration: none;
      color: var(--color-dark);
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

      @media (max-width: 768px) {
        flex-direction: column;
      }

      &:hover {
        color: var(--color-primary-dark);

        span {
          color: var(--color-primary-dark);
        }
      }
    }
  }

  .hamburger {

    display: none;

    label {
      display: flex;
      flex-direction: column;
      width: 28px;
      cursor: pointer;
    }

    label span {
      background: var(--color-dark);
      border-radius: 10px;
      height: 4px;
      margin: 3px 0;
      transition: 0.4s cubic-bezier(0.68, -0.6, 0.32, 1.6);
    }

    span:nth-of-type(1) {
      width: 50%;
    }

    span:nth-of-type(2) {
      width: 100%;
    }

    span:nth-of-type(3) {
      width: 75%;
    }

    input[type="checkbox"] {
      display: none;
    }

    input[type="checkbox"]:checked ~ span:nth-of-type(1) {
      transform-origin: bottom;
      transform: rotatez(45deg) translate(3px, 2px);
    }

    input[type="checkbox"]:checked ~ span:nth-of-type(2) {
      transform-origin: top;
      transform: rotatez(-45deg);
    }

    input[type="checkbox"]:checked ~ span:nth-of-type(3) {
      transform-origin: bottom;
      width: 50%;
      transform: translate(12px, -6px) rotatez(45deg);
    }
  }
`;