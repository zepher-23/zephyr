import { Routes, Route } from 'react-router-dom';
import Home from "./views/Home"
import Internship from './views/Internship';
import Course from './views/Course';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import lightBlue from "@mui/material/colors/lightBlue";

import './App.css';
import './views/assets/css/fonts.css'
import  light from '@mui/material/styles/createPalette';

const theme = createTheme({
  palette: {
    mode: 'light',
    
    primary: {
      main: '#3f6fb5',
      text: '#c2e1f8',
      
      
    },
    secondary: {
      main: '#d83e3e',
    },
    preLoader: {
      main:lightBlue[50]
    }
  },
  typography: {
      
    fontFamily: 'Poppins, Roboto, Open Sans, sans-serif',
    body1: {
      fontWeight:'200'
    }
      
        
      
      
    },

  props: {
    MuiTooltip: {
      arrow: true,
    },
  },
});

console.log(theme.typography);

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/internships' element={<Internship />} />
        <Route path='/courses' element ={<Course />} />

      </Routes>
    </ThemeProvider>
  );
}

export default App;
