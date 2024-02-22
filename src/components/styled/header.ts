import styled from "styled-components";

export const HeaderContainer = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 32px 0;
}
`

export const HeaderMenu = styled.div`
    display: flex;
    gap: 32px;

    a {
        color: #2A3342;
        font-family: "Plus Jakarta Sans";
        font-size: 16px;
        font-style: normal;
        font-weight: 600;
        line-height: normal;
        letter-spacing: -0.8px;
        padding-bottom: 5px;
        border-bottom: 1px solid transparent;

        &:hover {
            color: #009fa8;
            border-bottom-color: #2A3342;
        }
    }
`

export const HeaderLogo = styled.div``
