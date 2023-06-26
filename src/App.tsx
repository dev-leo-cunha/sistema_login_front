
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Access } from "./pages/access"
import { Login } from "./pages/login"

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
      
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/access" element={<Access />} />
        <Route path="*" element={<h1>Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
