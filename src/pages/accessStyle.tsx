import styled from "styled-components";
import Background from "../img/background.jpg"

// Estilização da página de acesso

type themeProps = {
    theme?: 'dark' | 'light'
}
export const Container = styled.div<themeProps>`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background-image: url(${Background});
    background-size: cover;
    color: white;
    font-family: 'Courier New', Courier, monospace;
    padding-bottom: 150px;
    box-sizing: border-box;
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
    font-size: 32px;
    font-weight: bold;
    @media (max-width: 950px) {
        margin-top: 50px;
        padding: 20px;
        font-size: 22px;
    }
    @media (max-width: 500px) {
        margin-top: 20px;
        padding: 10px;
        font-size: 16px;
    }
`
export const Buttons = styled.div<themeProps>`
    width: 450px;
    display: flex;
    justify-content: space-between;
    @media (max-width: 950px) {
        width: 300px;
    }
    @media (max-width: 500px) {
        width: 200px;
    }
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
    @media (max-width: 950px) {
        font-size: 12px;
        padding: 5px 10px;
        width: 140px;
    }
    @media (max-width: 500px) {
        font-size: 10px;
        padding: 3px 5px;
        width: 100px;
    }
`

export const ListBox = styled.div<themeProps>`
    max-width: 420px;
    height: 400px;
    display: flex;
    justify-content: center;
    @media (max-width: 950px) {
        max-width: 300px;
        height: 300px;
    }
    @media (max-width: 500px) {
        max-width: 200px;
        height: 200px;
    }
`
export const List = styled.ul<themeProps>`
    border: 1px solid white;
    max-height: 420px;
    overflow: auto;
    padding: 20px;
    border-radius: 10px;
    width: 360px;
    display: flex;
    flex-direction: column;
    align-items: center;
    transition: all 2s;
    @media (max-width: 950px) {
        width: 317px;
        height: 300px;
    }
    @media (max-width: 500px) {
        width: 200px;
        height: 200px;
    }
`;
export const ListLi = styled.li`
    list-style: none;
    font-size: 20px;
    margin-top: 5px;
    @media (max-width: 950px) {
        font-size: 15px;
        margin-top: 3px;
    }
    @media (max-width: 500px) {
        font-size: 10px;
        margin-top: 2px;
    }
`;
export const OrderBy = styled.div<themeProps>`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px 0;
    border-bottom: 1px solid white;
    @media (max-width: 950px) {
        padding: 5px 0;
        font-size: 13px;
    }
    @media (max-width: 500px) {
        padding: 3px 0;
        font-size: 9px;
    }
`
export const Select = styled.select<themeProps>`
    border: 1px solid white;
    background-color: transparent;
    color: white;
    padding: 5px;
    border-radius: 10px;
    margin-left: 10px;
    @media (max-width: 950px) {
        font-size: 11px;
        width: 60px;
    }
    @media (max-width: 500px) {
        font-size: 8px;
        width: 52px;
    }
`
export const Option = styled.option<themeProps>`
    color: white;
    background-color: #00264D;
    @media (max-width: 950px) {
        font-size: 11px;
    }
    @media (max-width: 500px) {
        font-size: 8px;
    }
`
