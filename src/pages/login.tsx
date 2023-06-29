import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { login, register } from '../api/auth';

import { useDispatch } from 'react-redux'
import { userAuthenticated, userAuthenticationFailed, userRegisterFailed } from '../redux/reducers/userReducer';
import { useAppSelector } from '../redux/hooks/useAppSelector';

import * as C from './loginStyle'

export const Login = () => {
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

    // função para fazer o login ao apertar a tecla enter
    const hadleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
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
                <C.Login>
                    <C.Character>
                        <C.CharacterHead></C.CharacterHead>
                        <C.CharacterBody></C.CharacterBody>
                    </C.Character>
                    <C.signIn>
                        <C.Form>
                            <C.FormImg>
                                <C.ImgHead></C.ImgHead>
                                <C.ImgBody></C.ImgBody>
                            </C.FormImg>
                            <C.FormInput
                                onChange={(e) => setEmailLogin(e.target.value)}
                                type='email'
                                placeholder='Email...'
                            />
                        </C.Form>
                        <C.Form>
                            <C.FormImg>
                                <C.FormImgPadlockTop></C.FormImgPadlockTop>
                                <C.FormImgPadlockDown></C.FormImgPadlockDown>
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
                    </C.signIn>
                    <C.Button onClick={handleButton}>ENTRAR</C.Button>
                </C.Login>

                <C.FormRegister>
                    <C.Register>
                        <C.TitleRegister>Cadastre-se</C.TitleRegister>
                        <C.Form>
                            <C.FormImg>
                                <C.ImgHead></C.ImgHead>
                                <C.ImgBody></C.ImgBody>
                            </C.FormImg>
                            <C.FormInput
                                onChange={(e) => setFullNameRegister(e.target.value)}
                                type='text'
                                placeholder='Nome Completo...'
                            />
                        </C.Form>
                        <C.Form>
                            <C.FormImg>
                                <C.ImgHead></C.ImgHead>
                                <C.ImgBody></C.ImgBody>
                            </C.FormImg>
                            <C.FormInput
                                onChange={(e) => setEmailRegister(e.target.value)}
                                type='email'
                                placeholder='Email...'
                            />
                        </C.Form>
                        <C.Form>
                            <C.FormImg>
                                <C.FormImgPadlockTop></C.FormImgPadlockTop>
                                <C.FormImgPadlockDown></C.FormImgPadlockDown>
                            </C.FormImg>
                            <C.FormInput
                                onChange={(e) => setPasswordRegister(e.target.value)}
                                type='password'
                                placeholder='Senha...'
                            />
                        </C.Form>
                        <C.Form>
                            <C.FormImg>
                                <C.FormImgPadlockTop></C.FormImgPadlockTop>
                                <C.FormImgPadlockDown></C.FormImgPadlockDown>
                            </C.FormImg>
                            <C.FormInput
                                onChange={(e) => setPasswordRepeatRegister(e.target.value)}
                                type='password'
                                placeholder='Repita a Senha...'
                            />
                        </C.Form>
                        <C.Error>{user.errorRegister}</C.Error>
                        <C.Loading>
                            {loadingRegister && <C.Loading>Carregando...</C.Loading>}
                        </C.Loading>
                    </C.Register>
                    <C.Button onClick={handleSaveRegister}>CADASTRAR E ENTRAR</C.Button>
                </C.FormRegister>
            </C.FormAll>
            <C.message>site em atualização constante...</C.message>
        </C.Container>
    )
}