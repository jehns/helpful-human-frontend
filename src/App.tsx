import React from 'react';
import styled, {
  // createGlobalStyle,
  ThemeProvider }
from 'styled-components'

import GlobalFonts from './style/fonts';
import theme from './style/theme';

const Wrapper = styled.div`
  color: ${props => props.theme.colors.primary};
  font-family: San Serif Pro;
`

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalFonts />
      <Wrapper>Hello Friends and allies</Wrapper>
    </ThemeProvider>
  );
}

export default App;
