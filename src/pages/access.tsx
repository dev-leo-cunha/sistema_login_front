import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { access } from '../api/auth';
import { useAppSelector } from '../redux/hooks/useAppSelector';
import { initialState, userAuthenticated, userAuthenticationFailed, userList } from '../redux/reducers/userReducer';
import { useDispatch } from 'react-redux';
import * as C from './accessStyle'
import * as BasicStyle from './basicStyle'

export const Access = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const user = useAppSelector(state => state.user);
    const { theme } = useAppSelector(state => state.theme);

    const [openList, setOpenList] = useState(false);

    useEffect(() => { loadList() }, [])

    const loadList = () => {
        access(user.token)
            .then(userList)
            .catch(userAuthenticationFailed)
            .then(dispatch)
    }

    const disconnect = () => {
        dispatch(userAuthenticated(initialState))
        navigate('/');
    }
    const updateUser = () => {
        navigate('/update');
    }
    return (
        <C.Container theme={theme}> {!user.error &&
            <>
                <C.h1>Bem vindo, {user.fullName}. email: {user.email}</C.h1>
                <C.h2 onClick={updateUser} >Editar Usuário</C.h2>
                <BasicStyle.Button theme={theme} onClick={() => { setOpenList(open => !open) }}>Mostrar/Ocultar Nome de Usuários Cadastrados.</BasicStyle.Button>

                {openList && user.list.length > 0 && (
                    <C.List theme={theme}>
                        {user.list.map((item, index) => (
                            <C.ListLi key={index}>{item}</C.ListLi>
                        ))}
                    </C.List>
                )}

            </>}
            <BasicStyle.P> {user.error} </BasicStyle.P>

            <BasicStyle.Button theme={theme} onClick={disconnect} >SAIR</BasicStyle.Button>
        </C.Container>
    )
}