import { ButtonHTMLAttributes, FC } from "react"
import styled from "styled-components"

const StyledButton = styled.button``

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

const Button: FC<ButtonProps> = ({ children, ...props }) => {
    return (
        <StyledButton {...props}>{children}</StyledButton>
    )
}

export default Button