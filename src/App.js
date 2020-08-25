import React from 'react';
import logo from './logo.svg';
import styled from 'styled-components';

const AppDiv = styled('div')`
  display: flex;
  color: black;
`

const App = () => {
  return (
    <AppDiv>
      <header>
        <p> Hello There!</p>
      </header>
    </AppDiv>
  )
}

export default App;
