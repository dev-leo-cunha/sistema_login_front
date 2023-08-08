import { ArrowBackOutlined, BadgeOutlined, HowToRegOutlined, LockOutlined, PersonOutline } from '@mui/icons-material'
import * as C from '../Style/InitialStyle'
import { Box, Step, StepLabel, Stepper } from '@mui/material'
import { BadgeOutlinedStyle, BoxStyle, HowToRegOutlinedStyle, LockOutlinedStyle, PersonOutlineStyle } from '../Style/MuiStyle'
import { steps } from '../steps/Steps'
import { useAppSelector } from '../redux/hooks/useAppSelector'


type Props = {
    theme: string
    toogleStepPassowrd: boolean
    loadingRegister: boolean
    toogleSignIn: boolean
    errorNextStep: string
    fullNameRegister: string
    emailRegister: string
    passwordRegister: string
    passwordRepeatRegister: string
    setToogleSignIn: (e: boolean) => void
    setToogleStepPassowrd: (e: boolean) => void
    setPasswordRegister: (e: string) => void
    setFullNameRegister: (e: string) => void
    setPasswordRepeatRegister: (e: string) => void
    setEmailRegister: (e: string) => void
    handleNextStep: () => void
    handleSaveRegister: () => void
}

export const RegisterComponent = ({ theme, toogleStepPassowrd, fullNameRegister, setFullNameRegister,
    emailRegister, setEmailRegister, errorNextStep, loadingRegister, setToogleStepPassowrd,
    setPasswordRegister, passwordRegister, passwordRepeatRegister, setPasswordRepeatRegister,
    setToogleSignIn, toogleSignIn, handleNextStep, handleSaveRegister
}: Props) => {

    const user = useAppSelector(state => state.user); // hook para acessar o usuário

    return (
        <C.FormRegister>
            <C.Character theme={theme}>
                <HowToRegOutlined sx={HowToRegOutlinedStyle(theme)} />
            </C.Character>
            <C.Register theme={theme}>
                {!toogleStepPassowrd ? (
                    <>
                        <Box sx={{ marginBottom: '15px' }}>
                            <Stepper activeStep={0} alternativeLabel>
                                {steps.map(({ key, label }) => (
                                    <Step sx={{
                                        '& .MuiSvgIcon-root': { fill: theme === 'dark' ? '#00264D' : '#3995f1', }
                                    }} key={key}>
                                        <StepLabel><Box sx={{ color: theme === 'dark' ? 'white' : 'black' }} >{label}</Box></StepLabel>
                                    </Step>
                                ))}
                            </Stepper>
                        </Box>
                        <C.Form>
                            <C.FormImg theme={theme}>
                                <BadgeOutlined sx={BadgeOutlinedStyle(theme)} />
                            </C.FormImg>
                            <C.FormInput
                                theme={theme}
                                value={fullNameRegister}
                                onChange={(e) => setFullNameRegister(e.target.value)}
                                type='text'
                                placeholder='Nome Completo...'
                            />
                        </C.Form>
                        <C.Form>
                            <C.FormImg theme={theme}>
                                <PersonOutline sx={PersonOutlineStyle(theme)} />
                            </C.FormImg>
                            <C.FormInput
                                theme={theme}
                                value={emailRegister}
                                onChange={(e) => setEmailRegister(e.target.value)}
                                type='email'
                                placeholder='Email...'
                            />
                        </C.Form>
                        <C.Error theme={theme}>{errorNextStep}</C.Error>
                        <C.Loading theme={theme}>
                            {loadingRegister && <C.Loading theme={theme}>Carregando...</C.Loading>}
                        </C.Loading>
                    </>
                ) : (
                    <>
                        <Box sx={{ marginBottom: '15px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                            <Box sx={{
                                marginBottom: '15px',
                                '@media (max-width: 500px)': {
                                    marginBottom: '5px'
                                }
                            }}>
                                <ArrowBackOutlined
                                    onClick={() => { setToogleStepPassowrd(!toogleStepPassowrd) }}
                                    sx={{
                                        fontSize: 40, color: theme === 'dark' ? 'white' : 'black', cursor: 'pointer',
                                        '@media (max-width: 500px)': {
                                            fontSize: 25
                                        }
                                    }}
                                />
                            </Box>
                            <Stepper activeStep={1} alternativeLabel>
                                {steps.map(({ key, label }) => (
                                    <Step sx={{
                                        '& .MuiSvgIcon-root': { fill: '#00264D' }
                                    }} key={key}>
                                        <StepLabel><Box sx={{
                                            color: theme === 'dark' ? 'white' : 'black', '@media (max-width: 500px)': {
                                                fontSize: 11
                                            }
                                        }}>{label}</Box></StepLabel>
                                    </Step>
                                ))}
                            </Stepper>
                        </Box>
                        <C.Form>
                            <C.FormImg theme={theme}>
                                <LockOutlined sx={LockOutlinedStyle(theme)} />
                            </C.FormImg>
                            <C.FormInput
                                theme={theme}
                                value={passwordRegister}
                                onChange={(e) => setPasswordRegister(e.target.value)}
                                type='password'
                                placeholder='Senha...'
                            />
                        </C.Form>
                        <C.Form>
                            <C.FormImg theme={theme}>
                                <LockOutlined sx={LockOutlinedStyle(theme)} />
                            </C.FormImg>
                            <C.FormInput
                                theme={theme}
                                value={passwordRepeatRegister}
                                onChange={(e) => setPasswordRepeatRegister(e.target.value)}
                                type='password'
                                placeholder='Repita a Senha...'
                            />
                        </C.Form>
                        <C.Error theme={theme}>{user.errorRegister}</C.Error>
                        <C.Loading theme={theme}>
                            {loadingRegister && <C.Loading theme={theme}>Carregando...</C.Loading>}
                        </C.Loading>
                    </>
                )}
                <Box
                    sx={BoxStyle(theme)}
                    onClick={() => {
                        setToogleSignIn(!toogleSignIn)
                        setToogleStepPassowrd(false)
                        setEmailRegister('')
                        setFullNameRegister('')
                    }}
                >Já tem conta? Clique aqui!</Box>
            </C.Register>
            {!toogleStepPassowrd ? (
                <C.Button theme={theme} onClick={handleNextStep}>Próxima Etapa</C.Button>
            ) : (
                <C.Button theme={theme} onClick={handleSaveRegister}>Cadastrar e Entrar</C.Button>
            )}

        </C.FormRegister>
    )
}