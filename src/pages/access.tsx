import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { access, listOrder } from '../api/auth';
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
    const [selectedOption, setSelectedOption] = useState('')

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
    const OrderAsc = async () => {
        listOrder(user.token, 'asc')
            .then(userList)
            .catch(userAuthenticationFailed)
            .then(dispatch)
    }
    const OrderDes = async () => {
        listOrder(user.token, 'desc')
            .then(userList)
            .catch(userAuthenticationFailed)
            .then(dispatch)
    }
    useEffect(() => {
        if (selectedOption === 'asc') {
            OrderAsc()
        } else if (selectedOption === 'desc') {
            OrderDes()
        } else if (selectedOption === '') {
            loadList()
        }
    }, [selectedOption])

    return (
        <C.Container>
            <C.Access>
                <C.Welcome>
                    Seja muito bem vindo, {user.fullName}.
                </C.Welcome>
                <C.Buttons>
                    <C.Button theme={theme} onClick={() => { setOpenList(open => !open) }}>Mostrar/Ocultar Nome de Usuários Cadastrados.</C.Button>
                    <C.Button theme={theme} onClick={disconnect} >SAIR</C.Button>
                </C.Buttons>
                <C.ListBox>
                    {openList && user.list.length > 0 && (
                        <C.List theme={theme}>
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