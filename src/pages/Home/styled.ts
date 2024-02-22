import styled from "styled-components";

export const HomeContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border-radius: 32px;
  overflow: hidden;
  background-repeat: repeat;
  position: relative;

  & > div {
    position: relative;
    z-index: 3;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    max-height: calc(100dvh - 112px);
    min-height: 800px;
    padding-bottom: 30px;

    & > span {
      height: 36px;
      margin-top: 24%;
      border-radius: 200px;
      background: rgba(255, 255, 255, 0.2);
      color: #ffffff;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 8px;
      padding: 0 12px;
      margin-bottom: 20px;
      font-size: 16px;
      font-weight: 500;
      line-height: normal;
      letter-spacing: -0.8px;
    }

    p {
        color: #FFF;
        opacity: 0.6;
        font-size: 20px;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
        letter-spacing: -1px;
        margin: 32px 0 36px 0;
    }
  }

  & > img {
    position: absolute;
    left: 0;
    top: -13%;
    width: 100%;
    height: 60%;
    z-index: 2;

    &.bottom {
      top: 52%;
    }

    &.circle {
      left: auto;
      right: 0;
      width: 100%;
      height: 100%;
      z-index: 1;
      top: 0;
      background-size: cover;
    }
  }
`;
