import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { CheckEmailRegister, login, register } from '../api/auth';

import { useDispatch } from 'react-redux'
import { userAuthenticated, userAuthenticationFailed, userRegisterFailed } from '../redux/reducers/userReducer';
import { useAppSelector } from '../redux/hooks/useAppSelector';

import * as C from '../Style/InitialStyle'

import { LoginComponent } from '../components/Login';
import { RegisterComponent } from '../components/Register';

export const Login = () => {
    const dispatch = useDispatch(); // hook para disparar uma action
    const user = useAppSelector(state => state.user); // hook para acessar o usuário
    const theme = useAppSelector(state => state.theme.theme); // hook para acessar o tema

    const navigate = useNavigate(); // hook para navegar entre as páginas

    const [emailLogin, setEmailLogin] = useState(''); // hook para armazenar o email do login
    const [passwordLogin, setPasswordLogin] = useState(''); // hook para armazenar a senha do login
    const [loadingLogin, setLoadingLogin] = useState(false) // hook para armazenar o estado de carregamento do login

    const [fullNameRegister, setFullNameRegister] = useState(''); // hook para armazenar o nome completo do cadastro
    const [emailRegister, setEmailRegister] = useState(''); // hook para armazenar o email do cadastro
    const [passwordRegister, setPasswordRegister] = useState(''); // hook para armazenar a senha do cadastro
    const [passwordRepeatRegister, setPasswordRepeatRegister] = useState(''); // hook para armazenar a senha de confirmação do cadastro
    const [loadingRegister, setLoadingRegister] = useState(false) // hook para armazenar o estado de carregamento do cadastro
    const [toogleSignIn, setToogleSignIn] = useState(false) // hook para armazenar o estado de carregamento do cadastro
    const [toogleStepPassowrd, setToogleStepPassowrd] = useState(false)  // hook para avazenar o estado de carregamento do cadastro
    const [errorNextStep, setErrorNextStep] = useState('') // hook para salvar o erro de cadastro



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
                setToogleStepPassowrd(!toogleStepPassowrd)
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
    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            handleButton()
        }
    }

    // hook para verificar se o usuário já está autenticado
    useEffect(() => {
        // Se estiver, redireciona para a página de acesso
        if (user.token) { navigate('/access') }
    }, [user.token])

    return (
        <C.Container>
            <C.FormAll>
                {!toogleSignIn ? (
                    <LoginComponent
                        theme={theme}
                        handleKeyDown={handleKeyDown}
                        handleButton={handleButton}
                        setEmailLogin={setEmailLogin}
                        setPasswordLogin={setPasswordLogin}
                        loadingLogin={loadingLogin}
                        setToogleSignIn={setToogleSignIn}
                        toogleSignIn={toogleSignIn}
                    />
                ) : (
                    <RegisterComponent
                        theme={theme}
                        toogleStepPassowrd={toogleStepPassowrd}
                        loadingRegister={loadingRegister}
                        toogleSignIn={toogleSignIn}
                        errorNextStep={errorNextStep}
                        fullNameRegister={fullNameRegister}
                        emailRegister={emailRegister}
                        passwordRegister={passwordRegister}
                        passwordRepeatRegister={passwordRepeatRegister}
                        setToogleSignIn={setToogleSignIn}
                        setToogleStepPassowrd={setToogleStepPassowrd}
                        setPasswordRegister={setPasswordRegister}
                        setFullNameRegister={setFullNameRegister}
                        setPasswordRepeatRegister={setPasswordRepeatRegister}
                        setEmailRegister={setEmailRegister}
                        handleNextStep={handleNextStep}
                        handleSaveRegister={handleSaveRegister}
                    />
                )}
            </C.FormAll>
            <C.message theme={theme}>site em atualização constante...</C.message>
        </C.Container>
    )
}