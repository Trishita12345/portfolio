import React from 'react';
import { ThemeProvider } from '@emotion/react';
import { createTheme } from '@mui/material';
import { theme } from './theme';
import Header from './components/Header';
import { BrowserRouter } from "react-router-dom";
import { RouterComponent } from './routes';
import Footer from './components/Footer';

function App() {

  const defaultTheme = createTheme(theme);
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <Header />
        <RouterComponent />
        <Footer />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
