import styled from "styled-components";

type themeProps = {
    theme?:'dark'|'light'
}
export const Container = styled.div`
    background-color: ${props => props.theme === 'dark' ? '#383838' : '#FFF'};;
    border-top: ${props => props.theme === 'dark' ? '1px solid #CCC' : '1px solid #000'};
    height: calc(100vh - 141px);
    color: ${props => props.theme === 'dark' ? '#CCC' : '#000'};
    display: flex;
    flex-direction: column;
    align-items: center;
    transition: background-color 1s ease;
`

export const Button = styled.button<themeProps>`
    background-color: transparent;
    padding: 10px 10px;
    font-size: 20px;
    cursor: pointer;
    border: ${props => props.theme === 'dark' ? '1px solid #CCC' : '1px solid #000'};
    border-radius:10px;
    margin-top: 10px;
    color: ${props => props.theme === 'dark' ? '#CCC' : '#000'};
`;

export const List = styled.ul<themeProps>`
    border: ${props => props.theme === 'dark' ? '1px solid #CCC' : '1px solid #000'};
    max-height: 300px;
    overflow: auto;
    padding: 20px;
    border-radius: 10px;
    min-width: 360px;
    display: flex;
    flex-direction: column;
    align-items: center;
    transition: all 2s;
`;
export const ListLi = styled.li`
    list-style: none;
    font-size: 20px;
    margin-top: 5px;
`;