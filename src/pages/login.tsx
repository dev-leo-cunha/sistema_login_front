import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { login, register } from '../api/auth';

import { useDispatch } from 'react-redux'
import { userAuthenticated, userAuthenticationFailed, userRegisterFailed } from '../redux/reducers/userReducer';
import { useAppSelector } from '../redux/hooks/useAppSelector';

import * as C from './loginStyle'

export const Login = () => {
    const dispatch = useDispatch();
    const user = useAppSelector(state => state.user);
    const theme = useAppSelector(state => state.theme);

    const navigate = useNavigate();

    const [emailLogin, setEmailLogin] = useState('');
    const [passwordLogin, setPasswordLogin] = useState('');
    const [loadingLogin, setLoadingLogin] = useState(false)

    const [fullNameRegister, setFullNameRegister] = useState('');
    const [emailRegister, setEmailRegister] = useState('');
    const [passwordRegister, setPasswordRegister] = useState('');
    const [passwordRepeatRegister, setPasswordRepeatRegister] = useState('');
    const [loadingRegister, setLoadingRegister] = useState(false)

    const handleButton = async () => {
        setLoadingLogin(true)
        await login(emailLogin, passwordLogin)
            .then(userAuthenticated)
            .catch(userAuthenticationFailed)
            .then(dispatch)
        if (user.token) { navigate('/access') }
        console.log(user.token)
        setLoadingLogin(false)
    }
    const handleSaveRegister = async () => {
        setLoadingRegister(true)
        await register(emailRegister, passwordRegister, passwordRepeatRegister, fullNameRegister)
            .then((userAuthenticated))
            .catch(userRegisterFailed)
            .then(dispatch)
        setLoadingRegister(false)
    }
    const hadleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            handleButton()
        }
    }

    useEffect(() => {
        if (user.token) { navigate('/access') }
    }, [user.token])

    return (
        <C.Container>
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
                        {loadingLogin && <C.Loading theme={theme.theme}>Carregando...</C.Loading>}
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
                        {loadingRegister && <C.Loading theme={theme.theme}>Carregando...</C.Loading>}
                    </C.Loading>
                </C.Register>
                <C.Button onClick={handleSaveRegister}>CADASTRAR E ENTRAR</C.Button>
            </C.FormRegister>
            
        </C.Container>
    )
}