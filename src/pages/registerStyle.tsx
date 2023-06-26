import styled from "styled-components";
import Background from "../img/background.jpg"
type themeProps = {
    theme?: 'dark' | 'light'
}
export const Container = styled.div<themeProps>`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 100vh;
    background-image: url(${Background});
`
export const Register = styled.div<themeProps>`
    background-color: rgba(255, 255, 255, 0.2);
    margin-top: 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
    transition: color 1s ease;
    border-radius: 40px;
    width: 420px;
    padding: 30px 0;
    box-shadow: 0 0 15px 0 rgba(0, 0, 0, 0.2);
    font-family: 'Courier New', Courier, monospace;
`
export const Input = styled.input<themeProps>`
    font-family: 'Courier New', Courier, monospace;
    font-size: 16px;
    width: 300px;
    height: 48px;
    padding-left: 10px;
    border: 0;
    outline: none;
    background-color: #3A5073;
    color: white;
    margin: 10px 0;
    border-radius: 5px;
    ::placeholder {
        color: white
    }
`
export const Buttons = styled.div<themeProps>`
    width: 340px;
    display: flex;
    justify-content: space-between;
`
export const Button = styled.button<themeProps>`
    font-size: 17px;
    color: white;
    padding: 10px 20px;
    width: 155px;
    border: 0;
    background-color: rgba(255, 255, 255, 0.2);
    border-radius: 0px 0px 20px 20px;
    cursor: pointer;
    box-shadow: 0 0 15px 0 rgba(0, 0, 0, 0.2);
    font-family: 'Courier New', Courier, monospace;
`
export const Error = styled.div<themeProps>`
    color: #e99191d0;
    font-size: 16px;
    height: 20px;
`