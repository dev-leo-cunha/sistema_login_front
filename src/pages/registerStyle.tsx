import styled from "styled-components";
type themeProps = {
    theme?:'dark'|'light'
}
export const Register = styled.div<themeProps>`
    color: ${props => props.theme === 'dark' ? '#CCC' : '#000'};
`;

export const StyleLink = {
    textDecoration: "none",
    color: '#786161'
  };