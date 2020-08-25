import React from 'react';
import styled from 'styled-components';
import Header from './components/layout/Header';
import Content from './components/layout/Content';

const Layout = styled('div')`
  display: flex;
  color: white;
  background: black;
`

const App = () => {
  return (
    <Layout>
      <Header>
        <p> Hello There!</p>
      </Header>
      <Content ></Content>
    </Layout>
  )
}

export default App;
