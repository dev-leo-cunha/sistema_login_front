
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Access } from "./pages/access"
import { Login } from "./pages/Initial"
import { useAppSelector } from './redux/hooks/useAppSelector';
import { useDispatch } from 'react-redux';
import { changeTheme } from './redux/reducers/themeReducer';
import { Box } from '@mui/material';
import Background from '../src/img/background.jpg';
import { SettingsBrightnessOutlined } from '@mui/icons-material';


const App = () => {
  const theme = useAppSelector(state => state.theme);
  const dispatch = useDispatch();

  const handleTheme = () => {
    theme.theme === 'dark' ? dispatch(changeTheme({ theme: 'light' }))
      : dispatch(changeTheme({ theme: 'dark' }))
  }
  const handleColor = () => {
    return theme.theme === 'dark' ? 'white' : 'black'
  }
  return (
    // Define as rotas da aplicação e o que será renderizado em cada uma delas
    <BrowserRouter>

      <Box sx={{
        backgroundImage: `url(${Background})`,
        backgroundSize: 'cover',
      }}>
        <Box sx={{
          transition: 'background-color 1s ease',
          backgroundColor: theme.theme === 'dark' ? 'rgba(0, 0, 0, 0.5)' : 'rgba(255, 255, 255, 0.2)',
          minHeight: '100vh'
        }}
        >
          <Box onClick={handleTheme} sx={{
            color: handleColor,
            cursor: 'pointer',
            position: 'absolute',
            top: '20px',
            right: '20px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            '@media (max-width: 950px)': {
              fontSize: '13px'
            },
            '@media (max-width: 500px)': {
              fontSize: '12px'
            }
          }}
          >
            <SettingsBrightnessOutlined sx={{
              fontSize: '50px',
              '@media (max-width: 950px)': {
                fontSize: '40px'
              },
              '@media (max-width: 500px)': {
                fontSize: '30px'
              }
            }} />
            {theme.theme}

          </Box>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/access" element={<Access />} />
            <Route path="*" element={<h1>Not Found</h1>} />
          </Routes>
        </Box>
      </Box>
    </BrowserRouter>
  );
};

export default App;
