import { LockOutlined, LoginRounded, PersonOutline } from '@mui/icons-material'
import * as C from '../Style/InitialStyle'
import { Box } from '@mui/material'
import { BoxStyle, LockOutlinedStyle, LoginRoundedStyle, PersonOutlineStyle } from '../Style/MuiStyle'
import { useAppSelector } from '../redux/hooks/useAppSelector'

type Props = {
    theme: string
    loadingLogin: boolean
    toogleSignIn: boolean
    handleKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void
    handleButton: () => void
    setEmailLogin: (e: string) => void
    setPasswordLogin: (e: string) => void
    setToogleSignIn: (e: boolean) => void

}

export const LoginComponent = ({
    theme, handleKeyDown, handleButton,
    setEmailLogin, setPasswordLogin, loadingLogin,
    setToogleSignIn, toogleSignIn
}: Props) => {

    const user = useAppSelector(state => state.user); // hook para acessar o usuário
    return (
        <C.Login>
            <C.Character theme={theme} >
                <LoginRounded sx={LoginRoundedStyle(theme)} />
            </C.Character>
            <C.signIn theme={theme}>
                <C.Form>
                    <C.FormImg theme={theme}>
                        <PersonOutline
                            sx={PersonOutlineStyle(theme)} />
                    </C.FormImg>
                    <C.FormInput
                        theme={theme}
                        onChange={(e) => setEmailLogin(e.target.value)}
                        type='email'
                        placeholder='Email...'
                    />
                </C.Form>
                <C.Form>
                    <C.FormImg theme={theme}>
                        <LockOutlined sx={LockOutlinedStyle(theme)} />
                    </C.FormImg>
                    <C.FormInput
                        theme={theme}
                        onChange={(e) => setPasswordLogin(e.target.value)}
                        onKeyDown={handleKeyDown}
                        type='password'
                        placeholder='Senha...'
                    />
                </C.Form>
                <C.Error theme={theme}>{user.errorLogin}</C.Error>
                <C.Loading>
                    {loadingLogin && <C.Loading theme={theme}>Carregando...</C.Loading>}
                </C.Loading>
                <Box sx={BoxStyle(theme)}
                    onClick={() => {
                        setToogleSignIn(!toogleSignIn)
                    }}
                >Não tem cadastro? Clique aqui!</Box>
            </C.signIn>
            <C.Button theme={theme} onClick={handleButton}>ENTRAR</C.Button>
        </C.Login>
    )
}


