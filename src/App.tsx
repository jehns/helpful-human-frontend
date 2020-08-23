import React from 'react';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router, } from "react-router-dom";

import GlobalFonts from './style/fonts';
import GlobalStyle from './style/global';
import theme from './style/theme';
import Layout from './components/Layout';
import { AppContextProvider } from './context';


function App() {
  return (
    <ThemeProvider theme={theme}>
      <AppContextProvider>
        <Router>
          <GlobalFonts />
          <GlobalStyle />
          <Layout />
        </Router>
      </AppContextProvider>
    </ThemeProvider>
  );
}

export default App;
