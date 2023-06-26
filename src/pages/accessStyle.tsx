import styled from "styled-components";
import Background from "../img/background.jpg"

type themeProps = {
    theme?: 'dark' | 'light'
}
export const Container = styled.div<themeProps>`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: calc(100vh - 50px);
    background-image: url(${Background});
    color: white;
    font-family: 'Courier New', Courier, monospace;
    padding-bottom: 50px;
`
export const Access = styled.div<themeProps>`
    display: flex;
    align-items: center;
    flex-direction: column;
`
export const Welcome = styled.div<themeProps>`
    background-color: rgba(255, 255, 255, 0.2);
    margin-top: 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
    transition: color 1s ease;
    border-radius: 40px;
    padding: 30px;
    box-shadow: 0 0 15px 0 rgba(0, 0, 0, 0.2);
    font-family: 'Courier New', Courier, monospace;
`
export const H1 = styled.h1<themeProps>`
    color: white;
    font-family: 'Courier New', Courier, monospace;
`
export const Buttons = styled.div<themeProps>`
    width: 450px;
    display: flex;
    justify-content: space-between;
`

export const Button = styled.button<themeProps>`
    font-size: 17px;
    color: white;
    padding: 10px 20px;
    width: 180px;
    border: 0;
    background-color: rgba(255, 255, 255, 0.2);
    border-radius: 0px 0px 20px 20px;
    cursor: pointer;
    box-shadow: 0 0 15px 0 rgba(0, 0, 0, 0.2);
    font-family: 'Courier New', Courier, monospace;
`

export const ListBox = styled.div<themeProps>`
    width: 420px;
    height: 400px;
`
export const List = styled.ul<themeProps>`
    border: 1px solid white;
    max-height: 420px;
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
export const OrderBy = styled.div<themeProps>`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px 0;
    border-bottom: 1px solid white;
`
export const Select = styled.select<themeProps>`
    border: 1px solid white;
    background-color: transparent;
    color: white;
    padding: 5px;
    border-radius: 10px;
    margin-left: 10px;
`
export const Option = styled.option<themeProps>`
    color: white;
    background-color: #00264D;
`
