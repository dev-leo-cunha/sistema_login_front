import { useState } from "react"
import { update } from "../api/auth"
import { userAuthenticated, userAuthenticationFailed } from "../redux/reducers/userReducer"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import * as BasicStyle from './basicStyle'
import { useAppSelector } from "../redux/hooks/useAppSelector"

export const UpdateUser = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [newName, setNewName] = useState('')
    const [newPassword, setNewPassword] = useState('')
    const [password, setPassword] = useState('')

    const { theme } = useAppSelector(state => state.theme);

    const updateUser = async () => {
        await update(newName, newPassword, password)
            .then(userAuthenticated)
            .catch(userAuthenticationFailed)
            .then(dispatch)
    }

    return (
        <BasicStyle.Container theme={theme}>
            <BasicStyle.Fieldset theme={theme}>
                <BasicStyle.Legend theme={theme}>Editar Usuário</BasicStyle.Legend>
                <BasicStyle.Input theme={theme} type="text" name="newName"
                    placeholder="Novo Nome..."
                    onChange={(e) => setNewName(e.target.value)}
                />
                <BasicStyle.Input theme={theme} type="password" name="newPassword"
                    placeholder="Nova Senha..."
                    onChange={(e) => setNewPassword(e.target.value)}
                />
                <BasicStyle.Input theme={theme} type="password" name="password"
                    placeholder="Senha antiga..."
                    onChange={(e) => setPassword(e.target.value)}
                />
                <BasicStyle.Button theme={theme} onClick={updateUser}>Editar</BasicStyle.Button>
                <BasicStyle.Button theme={theme} onClick={() => { navigate('/access') }} >Voltar</BasicStyle.Button>

            </BasicStyle.Fieldset>
        </BasicStyle.Container>
    )

}