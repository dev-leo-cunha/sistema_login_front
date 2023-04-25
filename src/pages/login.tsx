import { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import { login } from '../api/auth';

import { useDispatch } from 'react-redux'
import { userAuthenticated, userAuthenticationFailed } from '../redux/reducers/userReducer';
import { useAppSelector } from '../redux/hooks/useAppSelector';

import * as C from './loginStyle'


export const Login = ()=> {
    const dispatch = useDispatch();
    const user = useAppSelector(state => state.user);
    const theme = useAppSelector(state => state.theme);

    const navigate = useNavigate();

    const [emailState, setEmailState] = useState('');
    const [passwordState, setPasswordState] = useState('');

    const handleButton = async() => {
        await login(emailState, passwordState)
          .then(userAuthenticated)
          .catch(userAuthenticationFailed)
          .then(dispatch)
      }

      useEffect(()=>{if(user.token) {navigate('/access')}},[user.token])
      
    return (
        <C.Container theme={theme.theme}>
            <C.Fieldset theme={theme.theme}>
                <C.Input theme={theme.theme}
                    onChange={(e)=>setEmailState(e.target.value)}
                    type="text"
                    placeholder="Email..."
                    name=""
                />

                <C.Input theme={theme.theme}
                    onChange={(e)=>setPasswordState(e.target.value)}
                    type="password"
                    placeholder="Senha..."
                    name=""
                />

                <C.Button theme={theme.theme} onClick={handleButton}> Entrar </C.Button>
                <C.P>{user.error}</C.P>
                <C.Register theme={theme.theme}> Não tem conta? 
                    <Link to='/register' style={C.StyleLink}> Registre-se </Link> 
                </C.Register>
            </C.Fieldset>
        </C.Container>
    )
}