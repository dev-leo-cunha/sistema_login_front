import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { login } from '../api/auth';

import { useDispatch } from 'react-redux'
import { initialState, userAuthenticated, userAuthenticationFailed } from '../redux/reducers/userReducer';
import { useAppSelector } from '../redux/hooks/useAppSelector';

import * as C from './loginStyle'
import * as BasicStyle from './basicStyle'


export const Login = ()=> {
    const dispatch = useDispatch();
    const user = useAppSelector(state => state.user);
    const theme = useAppSelector(state => state.theme);

    const navigate = useNavigate();

    const [emailState, setEmailState] = useState('');
    const [passwordState, setPasswordState] = useState('');
    const [loading, setLoading] = useState(false)

    const handleButton = async() => {
        setLoading(true)
            await login(emailState, passwordState)
            .then(userAuthenticated)
            .catch(userAuthenticationFailed)
            .then(dispatch)
        setLoading(false)
      }
    const handleRegister = () => {
        dispatch(userAuthenticated(initialState))
        navigate('/register')
    }
    const hadleKeyDown = (e:React.KeyboardEvent<HTMLInputElement>)=>{
        if(e.key === 'Enter') {
            handleButton()
        }
    }

      useEffect(()=>{if(user.token) {navigate('/access')}},[user.token])

    
      
    return (
        <BasicStyle.Container theme={theme.theme}>
            <BasicStyle.Fieldset theme={theme.theme}>
                <BasicStyle.Legend theme={theme.theme}>Login</BasicStyle.Legend>
                <BasicStyle.Input theme={theme.theme}
                    onChange={(e)=>setEmailState(e.target.value)}
                    type="text"
                    placeholder="Email..."
                    name=""
                />

                <BasicStyle.Input theme={theme.theme}
                    onChange={(e)=>setPasswordState(e.target.value)}
                    onKeyDown={hadleKeyDown}
                    type="password"
                    placeholder="Senha..."
                    name=""
                />

                <BasicStyle.Button theme={theme.theme} onClick={handleButton}> Entrar </BasicStyle.Button>
                <BasicStyle.P>{user.error}</BasicStyle.P>
                <C.Register theme={theme.theme}> Não tem conta? 
                    <C.LinkRegister onClick={handleRegister}>Registre-se</C.LinkRegister> 
                </C.Register>
                {loading && <C.Loading theme={theme.theme}>CARREGANDO...</C.Loading>}
            </BasicStyle.Fieldset>
        </BasicStyle.Container>
    )
}