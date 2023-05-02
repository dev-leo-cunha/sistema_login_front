import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../redux/hooks/useAppSelector";
import { useDispatch } from "react-redux";
import { register } from "../api/auth";
import { initialState, userAuthenticated, userAuthenticationFailed } from "../redux/reducers/userReducer";
import * as C from './registerStyle'


export const Register = ()=> {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const user = useAppSelector(state => state.user);
    const theme = useAppSelector(state => state.theme);

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [passwordRepeat, setpasswordRepeat] = useState('')
    const [fullName, setFullName] = useState('')

    const handleSaveRegister = async () => {
        await register(email, password, passwordRepeat, fullName)
        .then(userAuthenticated)
        .catch(userAuthenticationFailed)
        .then(dispatch)
    }
    const handleLogin = ()=>{
        dispatch(userAuthenticated(initialState))
        navigate('/')
    }
    
    useEffect(()=>{if(user.token) {
        dispatch(userAuthenticated(initialState))
        navigate('/')
    }},[user.token])

    return (
        <C.Container theme={theme.theme}>
            <C.Fieldset theme={theme.theme}>
                <C.Legend theme={theme.theme}>Register</C.Legend>
                <C.Input theme={theme.theme} type="text" required name="fullName" 
                    placeholder="Nome Completo..." 
                    onChange={(e) =>  setFullName(e.target.value)} 
                />
                <C.Input theme={theme.theme} type="email" required name="email" 
                    placeholder="Email..." 
                    onChange={(e) =>  setEmail(e.target.value)} 
                />
                <C.Input theme={theme.theme} type="password" required name="password" 
                    placeholder="Senha..." 
                    onChange={(e) =>  setPassword(e.target.value)} 
                />
                <C.Input theme={theme.theme} type="password" required name="passwordRepeat"
                    placeholder="Repita a Senha..." 
                    onChange={(e) =>  setpasswordRepeat(e.target.value)} 
                />
                <C.Button theme={theme.theme} onClick={handleSaveRegister}>Registrar</C.Button>
                <C.Button theme={theme.theme} onClick={handleLogin}>Voltar ao Login</C.Button>
                <C.P>{user.error}</C.P>
            </C.Fieldset>
        </C.Container>
    )
}