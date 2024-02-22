import { ButtonHTMLAttributes, FC } from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  border-radius: 31px;
  background: #fff;
  display: inline-flex;
  padding: 12px 20px;
  justify-content: center;
  align-items: center;
  color: #2a3342;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: -0.8px;
  cursor: pointer;
  outline: none;

  &:hover {
    background: #2a3342;
    color: #fff;
  }

  &.withoutBorder {
    border: none;
  }
`;

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  withoutBorder?: boolean;
}

const Button: FC<ButtonProps> = ({ children, withoutBorder, ...props }) => {
  return (
    <StyledButton className={withoutBorder ? "withoutBorder" : ""} {...props}>
      {children}
    </StyledButton>
  );
};

export default Button;
