
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Access } from "./pages/access"
import { Login } from "./pages/login"
import { Register } from "./pages/register"

import * as C from './AppStyles'
import { useAppSelector } from './redux/hooks/useAppSelector';
import { useDispatch } from 'react-redux';
import { changeTheme } from './redux/reducers/themeReducer';


const App = () => {
  const theme = useAppSelector(state => state.theme);
  const dispatch = useDispatch();

  const handleTheme = ()=>{
    if(theme.theme === 'dark') {
      dispatch(changeTheme({theme:'light'}))
    } else {
      dispatch(changeTheme({theme:'dark'}))
    }
  }
  return (
    <BrowserRouter>
      <C.Container theme={theme.theme}>
        <C.Title theme={theme.theme}>Sistema de Login Básico</C.Title>
        <C.theme theme={theme.theme} onClick={handleTheme}>
          <C.themeCircle theme={theme.theme}></C.themeCircle>
        </C.theme>
      </C.Container>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/access" element={<Access />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
