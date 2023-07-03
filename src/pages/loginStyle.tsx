import styled from "styled-components";
import Background from "../img/background.jpg"

// Estilização da página de login
type themeProps = {
    theme?: 'dark' | 'light'
}
export const Container = styled.div<themeProps>`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    min-height: 100vh;
    background-image: url(${Background});
    background-size: cover;
    box-sizing: border-box;
`
export const FormAll = styled.div<themeProps>`
    display: flex;
    align-items: center;
    @media (max-width: 950px) {
        flex-direction: column;
    }
`
export const Login = styled.div<themeProps>`
    display: flex;
    flex-direction: column;
    align-items: center;
    @media (max-width: 950px) {
        margin-right: 0;
    }
`
export const Character = styled.div<themeProps>`
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 40px;
    width: 120px;
    height: 120px;
    border-radius: 50%;
    background-color: #00264D;
    box-shadow: 0 0 15px 0 rgba(0, 0, 0, 0.2);
    @media (max-width: 500px) {
        width: 80px;
        height: 80px;
        margin-top: 58px;
    }
`
export const signIn = styled.div<themeProps>`
    background-color: rgba(255, 255, 255, 0.2);
    margin-top: 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
    transition: color 1s ease;
    border-radius: 40px;
    width: 420px;
    padding-top: 100px;
    padding-bottom: 30px;
    box-shadow: 0 0 15px 0 rgba(0, 0, 0, 0.2);
    font-family: 'Courier New', Courier, monospace;
    @media (max-width: 500px) {
        width: 300px;
        padding-top: 60px;
        padding-bottom: 20px;
    }
`
export const Form = styled.div<themeProps>`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 20px;
    @media (max-width: 500px) {
        margin-bottom: 10px;
    }
`
export const FormImg = styled.div`
    width: 50px;
    height: 50px;
    border-right: 0;
    background-color: #00264D;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    border-radius: 5px 0 0 5px;
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
    background-color: #3A5073;
    color: white;
    border-radius: 0 5px 5px 0;
    ::placeholder {
        color: white
    }
    @media (max-width: 500px) {
        width: 200px;
        height: 30px;
        font-size: 12px;
    }
`
export const Error = styled.div<themeProps>`
    color: #7d0000d0;
    font-size: 16px;
    height: 20px;
    @media (max-width: 500px) {
        font-size: 12px;
    }
`
export const Loading = styled.div<themeProps>`
    margin-top: 10px;
    color: #CCC;
    height: 20px;
    @media (max-width: 500px) {
        font-size: 12px;
    }
`
export const Button = styled.button<themeProps>`
    font-size: 17px;
    color: white;
    padding: 10px 20px;
    width: 285px;
    border: 0;
    background-color: rgba(255, 255, 255, 0.2);
    border-radius: 0px 0px 20px 20px;
    cursor: pointer;
    box-shadow: 0 0 15px 0 rgba(0, 0, 0, 0.2);
    font-family: 'Courier New', Courier, monospace;
    @media (max-width: 500px) {
        width: 200px;
        height: 30px;
        font-size: 12px;
    }
`
export const FormRegister = styled.div<themeProps>`
    display: flex;
    flex-direction: column;
    align-items: center;
`
export const Register = styled.div<themeProps>`
    background-color: rgba(255, 255, 255, 0.2);
    margin-top: 100px;
    padding-top: 80px;
    display: flex;
    flex-direction: column;
    align-items: center;
    transition: color 1s ease;
    border-radius: 40px;
    width: 420px;
    padding-bottom: 30px;
    box-shadow: 0 0 15px 0 rgba(0, 0, 0, 0.2);
    font-family: 'Courier New', Courier, monospace;
    @media (max-width: 500px) {
        width: 300px;
        padding-bottom: 20px;
    }
`
export const TitleRegister = styled.div<themeProps>`
    font-size: 20px;
    color: white;
    font-weight: bold;
    padding: 30px 0;
`
export const message = styled.div<themeProps>`
    color: white;
    font-size: 18px;
    font-family: 'Courier New', Courier, monospace;
    margin: 20px 0;
    @media (max-width: 500px) {
        font-size: 12px;
    }
`