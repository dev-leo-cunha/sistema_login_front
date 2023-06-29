import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { access, listOrder } from '../api/auth';
import { useAppSelector } from '../redux/hooks/useAppSelector';
import { initialState, userAuthenticated, userAuthenticationFailed, userList } from '../redux/reducers/userReducer';
import { useDispatch } from 'react-redux';
import * as C from './accessStyle'

export const Access = () => {
    const navigate = useNavigate(); // hook para navegar entre as páginas
    const dispatch = useDispatch(); // hook para disparar uma action

    const user = useAppSelector(state => state.user); // hook para acessar o usuário
    const { theme } = useAppSelector(state => state.theme); // hook para acessar o tema

    const [openList, setOpenList] = useState(false); // hook para abrir/fechar a lista de usuários
    const [selectedOption, setSelectedOption] = useState('') // hook para selecionar a opção de ordenação

    useEffect(() => { loadList() }, []) // hook para carregar a lista de usuários ao carregar a página


    // função para carregar a lista de usuários
    const loadList = () => {
        access(user.token)
            .then(userList)
            .catch(userAuthenticationFailed)
            .then(dispatch)
    }

    // função para desconectar o usuário
    const disconnect = () => {
        dispatch(userAuthenticated(initialState))
        navigate('/');
    }

    // função para ordenar a lista de usuários
    const Order = async () => {
        listOrder(user.token, selectedOption)
            .then(userList)
            .catch(userAuthenticationFailed)
            .then(dispatch)
    }

    useEffect(() => { Order() }, [selectedOption]) // hook para ordenar a lista de usuários ao selecionar a opção

    return (
        <C.Container>
            <C.Access>
                <C.Welcome>
                    Seja muito bem vindo, {user.fullName}.
                </C.Welcome>
                <C.Buttons>
                    <C.Button onClick={() => { setOpenList(open => !open) }}>Mostrar/Ocultar Nome de Usuários Cadastrados.</C.Button>
                    <C.Button onClick={disconnect} >SAIR</C.Button>
                </C.Buttons>
                <C.ListBox>
                    {openList && user.list.length > 0 && (
                        <C.List>
                            <C.OrderBy>
                                Ordernar Por:
                                <C.Select
                                    value={selectedOption}
                                    onChange={e => setSelectedOption(e.target.value)}
                                >
                                    <C.Option
                                        value=''
                                    ></C.Option>
                                    <C.Option
                                        value='asc'
                                    >A - Z</C.Option>
                                    <C.Option
                                        value='desc'
                                    >Z - A</C.Option>
                                </C.Select>
                            </C.OrderBy>
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