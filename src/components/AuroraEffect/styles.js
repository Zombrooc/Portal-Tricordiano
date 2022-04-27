import styled, { keyframes } from "styled-components";

const fly = keyframes`
  100% {
    transform: rotate(1turn) translate(100px) rotate(-1turn);
  }
  `;

const flyPlus = keyframes`
  100% {
    transform: rotate(-1turn) translate(100px) rotate(1turn);
  }
`;

export const AuroraEffect = styled.div`
  width: 100vw;
  height: 100vh;
  background: #fff;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  overflow: hidden;
  z-index: -1;
`;

const Ball = styled.div`
  position: absolute;
  filter: blur(60px);
  opacity: 0.8;
`;

export const FirstBall = styled(Ball)`
  border-radius: 100%;
  width: 600px;
  height: 600px;
  background-color: var(--color-info);
  left: -50px;
  top: -300px;
  z-index: 3;
  animation: ${fly} 12s linear infinite;
  transform: rotate(0) translate(80px) rotate(0);
`;

export const SecondBall = styled(Ball)`
  width: 500px;
  height: 800px;
  background-color: var(--color-success);
  bottom: -30px;
  left: -80px;
`;

export const ThirdBall = styled(Ball)`
  border-radius: 100%;
  width: 450px;
  height: 450px;
  bottom: -80px;
  right: -100px;
  background-color: var(--color-danger);
  animation: ${flyPlus} 8s linear infinite;
  transform: rotate(0) translate(100px) rotate(0);
`;
