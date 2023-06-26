import styled from 'styled-components';

type themeProps = {
    theme?:'dark'|'light'
}

// export const Container = styled.div<themeProps>`
//     background-color: ${props => props.theme === 'dark' ? '#383838' : '#FFF'};
//     height: 140px;
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     transition: background-color 1s ease;
// `;

// export const Title = styled.h1<themeProps>`
//     font-size: 40px;
//     margin: 0;
//     color: ${props => props.theme === 'dark' ? '#FFF' : '#000'};
//     transition: color 1s ease;
//     @media (max-width: 570px) {
//         font-size: 25px;
//     }
// `
// export const theme = styled.div<themeProps>`
//     width: 50px;
//     height: 26px;
//     background-color: transparent;
//     position: absolute;
//     right: 0;
//     top: 0;
//     margin: 10px;
//     border: ${props => props.theme === 'dark' ? '1px solid #FFF' : '1px solid #000'};
//     border-radius: 15px;
//     cursor: pointer;
//     transition: border 1s ease;
// `
// export const themeCircle = styled.div<themeProps>`
//     width: 22px;
//     height: 22px;
//     background-color: ${props => props.theme === 'dark' ? '#FFF' : '#000'};
//     border-radius: 11px;
//     margin-top: 2px;
//     margin-left: ${props => props.theme === 'dark' ? '0px' : '27px'};
//     transition: margin-left 1s ease;
// `

export const message = styled.div<themeProps>`
    left: 40%;
    position: absolute;
    bottom: 0;
    color: white;
    font-size: 18px;
    font-family: 'Courier New', Courier, monospace;
    margin-bottom: 20px;
`