import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { CheckEmailRegister, login, register } from '../api/auth';

import { useDispatch } from 'react-redux'
import { userAuthenticated, userAuthenticationFailed, userRegisterFailed } from '../redux/reducers/userReducer';
import { useAppSelector } from '../redux/hooks/useAppSelector';

import * as C from './loginStyle'
import { LoginRounded, PersonOutline, LockOutlined, BadgeOutlined, HowToRegOutlined, ArrowBackOutlined } from '@mui/icons-material';
import { Box, Step, StepLabel, Stepper } from '@mui/material';
import { useTheme } from '@mui/material/styles';

export const Login = () => {
    const themeMaterial = useTheme();

    const dispatch = useDispatch(); // hook para disparar uma action
    const user = useAppSelector(state => state.user); // hook para acessar o usuário
    const theme = useAppSelector(state => state.theme); // hook para acessar o tema

    const navigate = useNavigate(); // hook para navegar entre as páginas

    const [emailLogin, setEmailLogin] = useState(''); // hook para armazenar o email do login
    const [passwordLogin, setPasswordLogin] = useState(''); // hook para armazenar a senha do login
    const [loadingLogin, setLoadingLogin] = useState(false) // hook para armazenar o estado de carregamento do login

    const [fullNameRegister, setFullNameRegister] = useState(''); // hook para armazenar o nome completo do cadastro
    const [emailRegister, setEmailRegister] = useState(''); // hook para armazenar o email do cadastro
    const [passwordRegister, setPasswordRegister] = useState(''); // hook para armazenar a senha do cadastro
    const [passwordRepeatRegister, setPasswordRepeatRegister] = useState(''); // hook para armazenar a senha de confirmação do cadastro
    const [loadingRegister, setLoadingRegister] = useState(false) // hook para armazenar o estado de carregamento do cadastro
    const [toogleSignIn, setToogleSignIn] = useState(false)
    const [toogleStepPassowrd, settoogleStepPassowrd] = useState(false)
    const [errorNextStep, setErrorNextStep] = useState('')



    // função para autenticar o usuário
    const handleButton = async () => {
        setLoadingLogin(true)
        // Faz a requisição para o servidor
        await login(emailLogin, passwordLogin)
            .then(userAuthenticated)
            .catch(userAuthenticationFailed)
            .then(dispatch)
        // Verifica se o usuário foi autenticado
        if (user.token) { navigate('/access') }
        setLoadingLogin(false)
    }
    // função para cadastrar o usuário
    const handleSaveRegister = async () => {
        setLoadingRegister(true)
        // Faz a requisição para o servidor
        await register(emailRegister, passwordRegister, passwordRepeatRegister, fullNameRegister)
            .then((userAuthenticated))
            .catch(userRegisterFailed)
            .then(dispatch)
        setLoadingRegister(false)
    }
    const handleNextStep = async () => {

        if (fullNameRegister !== '' && emailRegister !== '') {
            setLoadingRegister(true)
            setErrorNextStep('')
            const result = await CheckEmailRegister(emailRegister);
            if (result.status) {
                settoogleStepPassowrd(!toogleStepPassowrd)
                setErrorNextStep('')
            } else {
                setErrorNextStep(result.msg)
            }
            setLoadingRegister(false)
        } else {
            setErrorNextStep('Preencha os corretamente')
        }
    }

    // função para fazer o login ao apertar a tecla enter
    const hadleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            handleButton()
        }
    }
    const steps = [
        {
            "key": 1,
            "label": "Identificação"
        },
        {
            "key": 2,
            "label": "Segurança"
        },
    ]

    // hook para verificar se o usuário já está autenticado
    useEffect(() => {
        // Se estiver, redireciona para a página de acesso
        if (user.token) { navigate('/access') }
    }, [user.token])

    return (
        <C.Container>
            <C.FormAll>
                {!toogleSignIn ? (
                    <C.Login>
                        <C.Character>
                            <LoginRounded sx={{
                                fontSize: 70, color: 'white',
                                '@media (max-width: 500px)': {
                                    fontSize: 40,
                                }
                            }} />
                        </C.Character>
                        <C.signIn>
                            <C.Form>
                                <C.FormImg>
                                    <PersonOutline
                                        sx={{
                                            fontSize: 30,
                                            color: 'white',
                                            '@media (max-width: 500px)': {
                                                fontSize: 20,
                                            }
                                        }}
                                    />
                                </C.FormImg>
                                <C.FormInput
                                    onChange={(e) => setEmailLogin(e.target.value)}
                                    type='email'
                                    placeholder='Email...'
                                />
                            </C.Form>
                            <C.Form>
                                <C.FormImg>
                                    <LockOutlined sx={{
                                        fontSize: 30, color: 'white',
                                        '@media (max-width: 500px)': {
                                            fontSize: 20,
                                        }
                                    }} />
                                </C.FormImg>
                                <C.FormInput
                                    onChange={(e) => setPasswordLogin(e.target.value)}
                                    onKeyDown={hadleKeyDown}
                                    type='password'
                                    placeholder='Senha...'
                                />
                            </C.Form>
                            <C.Error>{user.errorLogin}</C.Error>
                            <C.Loading>
                                {loadingLogin && <C.Loading>Carregando...</C.Loading>}
                            </C.Loading>
                            <Box
                                sx={{
                                    color: 'white', cursor: 'pointer', marginTop: '15px',
                                    '@media (max-width: 500px)': {
                                        fontSize: 11,
                                        marginTop: '10px'
                                    }
                                }}
                                onClick={() => {
                                    setToogleSignIn(!toogleSignIn)
                                }}
                            >Não tem cadastro? Clique aqui!</Box>
                        </C.signIn>
                        <C.Button onClick={handleButton}>ENTRAR</C.Button>
                    </C.Login>
                ) : (
                    <C.FormRegister>
                        <C.Character>
                            <HowToRegOutlined sx={{
                                fontSize: 70, color: 'white',
                                '@media (max-width: 500px)': {
                                    fontSize: 40,
                                }
                            }} />
                        </C.Character>
                        <C.Register>
                            {!toogleStepPassowrd ? (
                                <>
                                    <Box sx={{ marginBottom: '15px' }}>
                                        <Stepper activeStep={0} alternativeLabel>
                                            {steps.map(({ key, label }) => (
                                                <Step sx={{
                                                    '& .MuiSvgIcon-root': { fill: '#00264D', }
                                                }} key={key}>
                                                    <StepLabel><Box sx={{ color: 'white' }} >{label}</Box></StepLabel>
                                                </Step>
                                            ))}
                                        </Stepper>
                                    </Box>
                                    <C.Form>
                                        <C.FormImg>
                                            <BadgeOutlined sx={{
                                                fontSize: 30, color: 'white',
                                                '@media (max-width: 500px)': {
                                                    fontSize: 20,
                                                }
                                            }} />
                                        </C.FormImg>
                                        <C.FormInput
                                            value={fullNameRegister}
                                            onChange={(e) => setFullNameRegister(e.target.value)}
                                            type='text'
                                            placeholder='Nome Completo...'
                                        />
                                    </C.Form>
                                    <C.Form>
                                        <C.FormImg>
                                            <PersonOutline sx={{
                                                fontSize: 30, color: 'white',
                                                '@media (max-width: 500px)': {
                                                    fontSize: 20,
                                                }
                                            }} />
                                        </C.FormImg>
                                        <C.FormInput
                                            value={emailRegister}
                                            onChange={(e) => setEmailRegister(e.target.value)}
                                            type='email'
                                            placeholder='Email...'
                                        />
                                    </C.Form>
                                    <C.Error>{errorNextStep}</C.Error>
                                    <C.Loading>
                                        {loadingRegister && <C.Loading>Carregando...</C.Loading>}
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
                                                onClick={() => { settoogleStepPassowrd(!toogleStepPassowrd) }}
                                                sx={{
                                                    fontSize: 40, color: 'white', cursor: 'pointer',
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
                                                        color: 'white', '@media (max-width: 500px)': {
                                                            fontSize: 11
                                                        }
                                                    }}>{label}</Box></StepLabel>
                                                </Step>
                                            ))}
                                        </Stepper>
                                    </Box>
                                    <C.Form>
                                        <C.FormImg>
                                            <LockOutlined sx={{
                                                fontSize: 30, color: 'white',
                                                '@media (max-width: 500px)': {
                                                    fontSize: 20,
                                                }
                                            }} />
                                        </C.FormImg>
                                        <C.FormInput
                                            value={passwordRegister}
                                            onChange={(e) => setPasswordRegister(e.target.value)}
                                            type='password'
                                            placeholder='Senha...'
                                        />
                                    </C.Form>
                                    <C.Form>
                                        <C.FormImg>
                                            <LockOutlined sx={{
                                                fontSize: 30, color: 'white',
                                                '@media (max-width: 500px)': {
                                                    fontSize: 20,
                                                }
                                            }} />
                                        </C.FormImg>
                                        <C.FormInput
                                            value={passwordRepeatRegister}
                                            onChange={(e) => setPasswordRepeatRegister(e.target.value)}
                                            type='password'
                                            placeholder='Repita a Senha...'
                                        />
                                    </C.Form>
                                    <C.Error>{user.errorRegister}</C.Error>
                                    <C.Loading>
                                        {loadingRegister && <C.Loading>Carregando...</C.Loading>}
                                    </C.Loading>
                                </>
                            )}
                            <Box
                                sx={{
                                    color: 'white', cursor: 'pointer', marginTop: '25px',
                                    '@media (max-width: 500px)': {
                                        fontSize: 11,
                                        marginTop: '10px'
                                    }
                                }}
                                onClick={() => {
                                    setToogleSignIn(!toogleSignIn)
                                    settoogleStepPassowrd(false)
                                    setEmailRegister('')
                                    setFullNameRegister('')
                                }}
                            >Já tem conta? Clique aqui!</Box>
                        </C.Register>
                        {!toogleStepPassowrd ? (
                            <C.Button onClick={handleNextStep}>Próxima Etapa</C.Button>
                        ) : (
                            <C.Button onClick={handleSaveRegister}>Cadastrar e Entrar</C.Button>
                        )}

                    </C.FormRegister>
                )}
            </C.FormAll>
            <C.message>site em atualização constante...</C.message>
        </C.Container>
    )
}