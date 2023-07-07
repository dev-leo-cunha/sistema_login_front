import styled, { css, keyframes } from "styled-components";

// Estilização da página de acesso

type themeProps = {
    theme?: 'dark' | 'light'
}
type updateProps = {
    openUpdate: boolean
}
type listProps = {
    openList: boolean
}
export const Container = styled.div<themeProps>`
    display: flex;
    flex-direction: column;
    padding: 30px;
    align-items: center;
    color: ${props => props.theme === 'dark' ? '#FFF' : '#000'};
    font-family: 'Courier New', Courier, monospace;
    box-sizing: border-box;
`
export const Access = styled.div<themeProps>`
    display: flex;
    align-items: center;
    flex-direction: column;
`
export const Welcome = styled.div<themeProps>`
    background-color: ${props => props.theme === 'dark' ? 'rgba(255, 255, 255, 0.2)' : 'rgba(255, 255, 255, 0.4)'};
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 40px;
    padding: 30px;
    box-shadow: 0 0 15px 0 rgba(0, 0, 0, 0.2);
    font-family: 'Courier New', Courier, monospace;
    font-size: 32px;
    font-weight: bold;
    @media (max-width: 950px) {
        padding: 20px;
        font-size: 22px;
    }
    @media (max-width: 500px) {
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
    color: ${props => props.theme === 'dark' ? '#FFF' : '#000'};
    padding: 10px 20px;
    width: 180px;
    border: 0;
    background-color: ${props => props.theme === 'dark' ? 'rgba(255, 255, 255, 0.2)' : 'rgba(255, 255, 255, 0.4)'};
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
export const ButtonReverse = styled.button<themeProps>`
    font-size: 17px;
    color: ${props => props.theme === 'dark' ? '#FFF' : '#000'};
    padding: 10px 20px;
    width: 180px;
    border: 0;
    background-color: ${props => props.theme === 'dark' ? 'rgba(255, 255, 255, 0.2)' : 'rgba(255, 255, 255, 0.4)'};
    border-radius: 20px 20px 0px 0px;
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
export const List = styled.ul<listProps>`
    border: 1px solid white;
    max-height: 420px;
    overflow: auto;
    padding: 20px;
    border-radius: 10px;
    width: 360px;
    display: flex;
    flex-direction: column;
    align-items: center;
    animation-fill-mode: forwards;
    animation: ${props => props.openList ? expandHeight : collapseHeight} 1s ease-in-out forwards;
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
    color: ${props => props.theme === 'dark' ? '#FFF' : '#000'};
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
    color: ${props => props.theme === 'dark' ? '#FFF' : '#000'};
    background-color: ${props => props.theme === 'dark' ? '#00264D' : '#3995f1'};
    @media (max-width: 950px) {
        font-size: 11px;
    }
    @media (max-width: 500px) {
        font-size: 8px;
    }
`
const expandHeight = keyframes`
    0% {max-height: 0; opacity: 0;}
    100% {max-height: 370px; opacity: 1;}
`
const collapseHeight = keyframes`
  0% {max-height: 370px; opacity: 1; }
  100% {max-height: 0; opacity: 0;}
`;

export const Update = styled.div<updateProps>`
    overflow: hidden;
    background-color: ${props => props.theme === 'dark' ? 'rgba(255, 255, 255, 0.2)' : 'rgba(255, 255, 255, 0.4)'};
    flex-direction: column;
    align-items: center;
    margin-bottom: 10px;
    border-radius: 40px;
    width: 420px;
    animation-fill-mode: forwards;
    animation: ${props => props.openUpdate ? expandHeight : collapseHeight} 1s ease-in-out forwards;
    opacity: ${props => props.openUpdate ? 1 : 0};
    max-height: ${props => props.openUpdate ? '370px' : '0'};
    padding-top: 20px;
    box-shadow: 0 0 15px 0 rgba(0, 0, 0, 0.2);
    font-family: 'Courier New', Courier, monospace;
    @media (max-width: 950px) {
        width: 350px;
        padding-bottom: 0px;
    }
    @media (max-width: 500px) {
        width: 300px;
        padding-bottom: 0px;
    }
`

export const Form = styled.div<themeProps>`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 20px;
    @media (max-width: 950px) {
        margin-bottom: 10px;
    }
`
export const FormImg = styled.div`
    width: 50px;
    height: 50px;
    border-right: 0;
    background-color: ${props => props.theme === 'dark' ? '#00264D' : '#3995f1'};
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    border-radius: 5px 0 0 5px;
    @media (max-width: 950px) {
        width: 40px;
        height: 40px;
    }
    @media (max-width: 500px) {
        width: 30px;
        height: 30px;
    }
`
export const FormInput = styled.input<themeProps>`
    font-family: 'Courier New', Courier, monospace;
    font-size: 16px;
    width: 300px;
    height: 48px;
    padding-left: 10px;
    border: 0;
    outline: none;
    background-color: ${props => props.theme === 'dark' ? '#3A5073' : '#6187c5'};
    color: ${props => props.theme === 'dark' ? '#FFF' : '#000'};
    border-radius: 0 5px 5px 0;
    ::placeholder {
        color: ${props => props.theme === 'dark' ? '#FFF' : '#000'}
    }
    @media (max-width: 950px) {
        width: 250px;
        height: 40px;
        font-size: 14px;
    }
    @media (max-width: 500px) {
        width: 200px;
        height: 30px;
        font-size: 12px;
    }
`
export const ButtonUpdate = styled.button<themeProps>`
    font-size: 17px;
    margin: 5px;
    color: ${props => props.theme === 'dark' ? '#FFF' : '#000'};
    padding: 8px 16px;
    margin-bottom: 20px;
    width: 150px;
    border: 0;
    background-color: rgba(255, 255, 255, 0.2);
    border-radius: 20px;
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
export const msgUpdate = styled.div`
    color: ${props => props.theme === 'dark' ? '#ff0202' : '#950909'};
    height: 40px;
    text-align: center;
    @media (max-width: 950px) {
        font-size: 12px;
    }
    @media (max-width: 500px) {
        font-size: 10px;
    }
`