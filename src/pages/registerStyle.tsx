import styled from "styled-components";
type themeProps = {
    theme?:'dark'|'light'
}

export const Container = styled.div<themeProps>`
    background-color: ${props => props.theme === 'dark' ? '#383838' : '#FFF'};
    border-top: ${props => props.theme === 'dark' ? '1px solid #CCC' : '1px solid #000'};
    height: calc(100vh - 141px);
    transition: background-color 1s ease;
`
export const Fieldset = styled.fieldset<themeProps>`
    max-width: 500px;
    margin: auto;
    margin-top: 40px;
    padding: 20px;
    border: ${props => props.theme === 'dark' ? '1px solid #CCC' : '1px solid #000'};
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const Legend = styled.legend`
    font-size: 26px;
    font-weight: bold;
    color: ${props => props.theme === 'dark' ? '#CCC' : '#000'};
`;

export const Input = styled.input<themeProps>`
    width: 80%;
    margin: 5px 0px;
    font-size: 20px;
    padding: 8px;
    background-color: transparent;
    border: ${props => props.theme === 'dark' ? '1px solid #CCC' : '1px solid #000'};
    border-radius: 10px;
    color: ${props => props.theme === 'dark' ? '#CCC' : '#000'};
    transition: color 1s ease;
    ::placeholder {
        color: ${props => props.theme === 'dark' ? '#CCC' : '#000'};
    }
`;

export const Button = styled.button<themeProps>`
    width: 40%;
    background-color: transparent;
    padding: 10px 0px;
    font-size: 20px;
    cursor: pointer;
    border: ${props => props.theme === 'dark' ? '1px solid #CCC' : '1px solid #000'};
    border-radius:10px;
    margin-top: 10px;
    color: ${props => props.theme === 'dark' ? '#CCC' : '#000'};
`;

export const P = styled.p`
    color: #786161;
    text-decoration: underline;
`;

export const Register = styled.div<themeProps>`
    color: ${props => props.theme === 'dark' ? '#CCC' : '#000'};
`;

export const StyleLink = {
    textDecoration: "none",
    color: '#786161'
  };