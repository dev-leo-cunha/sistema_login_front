import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { access, listOrder, update } from '../api/auth';
import { useAppSelector } from '../redux/hooks/useAppSelector';
import { initialState, userAuthenticated, userAuthenticatedFailedUpdate, userAuthenticatedUpdate, userAuthenticationFailed, userList } from '../redux/reducers/userReducer';
import { useDispatch } from 'react-redux';
import * as C from './accessStyle';
import { LockOutlined, PersonOutline } from '@mui/icons-material';

export const Access = () => {
    const navigate = useNavigate(); // hook para navegar entre as páginas
    const dispatch = useDispatch(); // hook para disparar uma action

    const user = useAppSelector(state => state.user); // hook para acessar o usuário
    const { theme } = useAppSelector(state => state.theme); // hook para acessar o tema

    const [openList, setOpenList] = useState(false); // hook para abrir/fechar a lista de usuários
    const [selectedOption, setSelectedOption] = useState('') // hook para selecionar a opção de ordenação
    const [openUpdate, setOpenUpdate] = useState(false); // hook para abrir/fechar o formulario de alteração de usuários

    const [newName, setNewName] = useState(''); // hook para armazenar o novo nome do usuário
    const [newPassword, setNewPassword] = useState(''); // hook para armazenar a nova senha do usuário
    const [newPasswordRepeat, setNewPasswordRepeat] = useState(''); // hook para armazenar a nova senha de confirmação do usuário
    const [oldPassword, setOldPassword] = useState(''); // hook para armazenar a senha antiga do usuário

    useEffect(() => { loadList() }, []) // hook para carregar a lista de usuários ao carregar a página

    const updateUser = () => {
        update(newName, newPassword, newPasswordRepeat, oldPassword, user.token)
            .then(userAuthenticatedUpdate)
            .catch(userAuthenticatedFailedUpdate)
            .then(dispatch)
    }

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
        <C.Container theme={theme}>
            <C.Access>
                {!openUpdate ? (
                    <div>
                        <C.ButtonReverse  theme={theme}
                            onClick={() => { setOpenUpdate(!openUpdate) }}
                        >Editar Usuário</C.ButtonReverse>
                    </div>
                ) : (
                    <C.Update  theme={theme} openUpdate={openUpdate} >
                        <C.Form>
                            <C.FormImg  theme={theme}>
                                <PersonOutline
                                    sx={{
                                        fontSize: 30,
                                        color: 'white',
                                        '@media (max-width: 500px)': {
                                            fontSize: 20,
                                        }
                                    }}
                                />
                            </C.FormImg>
                            <C.FormInput theme={theme}
                                onChange={(e) => setNewName(e.target.value)}
                                type='text'
                                placeholder='Novo Nome...'
                            />
                        </C.Form>
                        <C.Form>
                            <C.FormImg theme={theme}>
                                <LockOutlined sx={{
                                    fontSize: 30, color: 'white',
                                    '@media (max-width: 500px)': {
                                        fontSize: 20,
                                    }
                                }} />
                            </C.FormImg>
                            <C.FormInput  theme={theme}
                                onChange={(e) => setNewPassword(e.target.value)}
                                type='password'
                                placeholder='Nova Senha...'
                            />
                        </C.Form>
                        <C.Form>
                            <C.FormImg  theme={theme}>
                                <LockOutlined sx={{
                                    fontSize: 30, color: 'white',
                                    '@media (max-width: 500px)': {
                                        fontSize: 20,
                                    }
                                }} />
                            </C.FormImg>
                            <C.FormInput  theme={theme}
                                onChange={(e) => setNewPasswordRepeat(e.target.value)}
                                type='password'
                                placeholder='Confirme a Nova Senha...'
                            />
                        </C.Form>
                        <C.Form>
                            <C.FormImg theme={theme}>
                                <LockOutlined sx={{
                                    fontSize: 30, color: 'white',
                                    '@media (max-width: 500px)': {
                                        fontSize: 20,
                                    }
                                }} />
                            </C.FormImg>
                            <C.FormInput theme={theme}
                                onChange={(e) => setOldPassword(e.target.value)}
                                type='password'
                                placeholder='Senha Antiga...'
                            />
                        </C.Form>
                        <C.msgUpdate theme={theme}>{user.message}</C.msgUpdate>
                        <div style={{ textAlign: 'center' }}>
                            <C.ButtonUpdate  theme={theme}
                                onClick={updateUser}
                            >Atualizar</C.ButtonUpdate>
                            <C.ButtonUpdate  theme={theme}
                                onClick={() => { setOpenUpdate(!openUpdate) }}
                            >Voltar</C.ButtonUpdate>
                        </div>
                    </C.Update>
                )}
                <C.Welcome  theme={theme}>
                    Seja muito bem vindo, {user.fullName}.
                </C.Welcome>
                <C.Buttons>
                    <C.Button  theme={theme} onClick={() => { setOpenList(open => !open) }}>Mostrar/Ocultar Nome de Usuários Cadastrados.</C.Button>
                    <C.Button  theme={theme} onClick={disconnect} >SAIR</C.Button>
                </C.Buttons>
                {openList && user.list.length > 0 && (
                    <C.List openList={openList} >
                        <C.OrderBy>
                            Ordernar Por:
                            <C.Select  theme={theme}
                                value={selectedOption}
                                onChange={e => setSelectedOption(e.target.value)}
                            >
                                <C.Option  theme={theme}
                                    value=''
                                ></C.Option>
                                <C.Option  theme={theme}
                                    value='asc'
                                >A - Z</C.Option>
                                <C.Option  theme={theme}
                                    value='desc'
                                >Z - A</C.Option>
                            </C.Select>
                        </C.OrderBy>
                        {user.list.map((item, index) => (
                            <C.ListLi key={index}>{item}</C.ListLi>
                        ))}
                    </C.List>
                )}
            </C.Access>
        </C.Container>
    )
}