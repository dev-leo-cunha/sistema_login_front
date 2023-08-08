
export const LoginRoundedStyle = (theme: string) => {
    return {
        fontSize: 70, color: theme === 'dark' ? 'white' : 'black',
        '@media (max-width: 500px)': {
            fontSize: 40,
        }
    }
}
export const PersonOutlineStyle = (theme: string) => {
    return {
        fontSize: 30,
        color: theme === 'dark' ? 'white' : 'black',
        '@media (max-width: 500px)': {
            fontSize: 20,
        }
    }
}

export const LockOutlinedStyle = (theme: string) => {
    return {
        fontSize: 30, color: theme === 'dark' ? 'white' : 'black',
        '@media (max-width: 500px)': {
            fontSize: 20,
        }
    }
}

export const BoxStyle = (theme: string) => {
    return {
        color: theme === 'dark' ? 'white' : 'black',
        cursor: 'pointer', marginTop: '15px',
        '@media (max-width: 500px)': {
            fontSize: 11,
            marginTop: '10px'
        }
    }
}
export const HowToRegOutlinedStyle = (theme: string) => {
    return {
        fontSize: 70, color: theme === 'dark' ? 'white' : 'black',
        '@media (max-width: 500px)': {
            fontSize: 40,
        }
    }
}

export const BadgeOutlinedStyle = (theme: string) => {
    return {
        fontSize: 30, color: theme === 'dark' ? 'white' : 'black',
        '@media (max-width: 500px)': {
            fontSize: 20,
        }
    }
}