import styled from "styled-components";
type themeProps = {
    theme?:'dark'|'light'
}
export const Register = styled.div<themeProps>`
    color: ${props => props.theme === 'dark' ? '#CCC' : '#000'};
    transition: color 1s ease;
    @media (max-width: 570px) {
        font-size: 15px;
    }
`;

export const LinkRegister = styled.button`
    border: 0;
    background-color: transparent;
    color: #786161;
    font-size: 14px;
    cursor: pointer;
    @media (max-width: 570px) {
        font-size: 12px;
    }
`
export const Loading = styled.div<themeProps>`
    color: ${props => props.theme === 'dark' ? '#CCC' : '#000'};
    font-size: 20px;
    margin-top: 10px;
    @media (max-width: 570px) {
        font-size: 12px;
    }
`