import React from 'react';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router, } from "react-router-dom";
import styled from 'styled-components'

import GlobalFonts from './style/fonts';
import GlobalStyle from './style/global';
import theme from './style/theme';
import Layout from './components/Layout';
import { AppContextProvider } from './context';

const Wrapper = styled.div`
  width: 1440px;
  text-align: left;
  margin: 0px auto;
`

function App() {
  return (
    <ThemeProvider theme={theme}>
      <AppContextProvider>
        <Wrapper>
          <Router>
            <GlobalFonts />
            <GlobalStyle />
            <Layout />
          </Router>
        </Wrapper>
      </AppContextProvider>
    </ThemeProvider>
  );
}

export default App;
