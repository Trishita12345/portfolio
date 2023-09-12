import React from 'react';
// import './App.css';
import MainContent from './pages/MainContent';
import { ThemeProvider } from '@emotion/react';
import { createTheme } from '@mui/material';
import { theme } from './theme';

function App() {

  const defaultTheme = createTheme(theme);
  return (
    <ThemeProvider theme={defaultTheme}>
      <MainContent />
    </ThemeProvider>
  );
}

export default App;
