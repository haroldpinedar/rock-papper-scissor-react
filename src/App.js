import React from 'react';
import './App.css';
import Header from './header';
import Wrapper from './wrapper';
import styled from 'styled-components';

const AppStyled = styled.main`
  background-image: radial-gradient(circle at top, #1F3757 20%, #131537 100%); 
  min-height: 100vh;  
  padding: 2em;
  body {
    font-family: 'Barlow Semi Condensed', sans-serif;
  }
`

function App() {
  return (
    <AppStyled>
      <Wrapper>
        <Header></Header>
      </Wrapper>      
    </AppStyled>
  );
}

export default App;
