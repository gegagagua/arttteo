import styled from "styled-components";

export const Title = styled.h2`
  color: #fff;
  text-align: center;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25);
  font-family: "Plus Jakarta Sans";
  font-size: 88px;
  font-style: normal;
  font-weight: 800;
  line-height: normal;
  letter-spacing: -4.4px;

  span {
    opacity: 1;
    transition: all 0.3s ease-in-out;

    &.show {
      opacity: 0;
    }
  }
`;
