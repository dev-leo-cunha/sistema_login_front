import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { access } from '../api/auth';
import { useAppSelector } from '../redux/hooks/useAppSelector';
import { initialState, userAuthenticated, userAuthenticationFailed, userList } from '../redux/reducers/userReducer';
import { useDispatch } from 'react-redux';
import * as C from './accessStyle'

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

        // <C.Container theme={theme}> {!user.errorLogin &&
        //     <>
        //         <C.h1>Bem vindo, {user.fullName}. email: {user.email}</C.h1>
        //         <C.h2 onClick={updateUser} >Editar Usuário</C.h2>
        //         <BasicStyle.Button theme={theme} onClick={() => { setOpenList(open => !open) }}>Mostrar/Ocultar Nome de Usuários Cadastrados.</BasicStyle.Button>

        //         {openList && user.list.length > 0 && (
        //             <C.List theme={theme}>
        //                 {user.list.map((item, index) => (
        //                     <C.ListLi key={index}>{item}</C.ListLi>
        //                 ))}
        //             </C.List>
        //         )}

        //     </>}
        //     <BasicStyle.P> {user.errorLogin} </BasicStyle.P>

        //     <BasicStyle.Button theme={theme} onClick={disconnect} >SAIR</BasicStyle.Button>
        // </C.Container>
        <C.Container>
            <C.Access>
                <C.Welcome>
                    <C.H1>Seja muito bem vindo, {user.fullName}.</C.H1>
                </C.Welcome>
                <C.Buttons>
                    <C.Button theme={theme} onClick={() => { setOpenList(open => !open) }}>Mostrar/Ocultar Nome de Usuários Cadastrados.</C.Button>
                    <C.Button theme={theme} onClick={disconnect} >SAIR</C.Button>
                </C.Buttons>
                <C.ListBox>
                    {openList && user.list.length > 0 && (
                        <C.List theme={theme}>
                            {/* <C.OrderBy>
                                Ordernar Por:
                                <C.Select>
                                    <C.Option></C.Option>
                                    <C.Option>A - Z</C.Option>
                                    <C.Option>Z - A</C.Option>
                                </C.Select>
                            </C.OrderBy> */}
                            {user.list.map((item, index) => (
                                <C.ListLi key={index}>{item}</C.ListLi>
                            ))}
                        </C.List>
                    )}
                </C.ListBox>
            </C.Access>
        </C.Container>
    )
}