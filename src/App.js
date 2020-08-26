import React from 'react';
import styled from 'styled-components';
import Header from './components/layout/Header';
import Content from './components/layout/Content';
import GlobalStyles from './styles/global';

const Layout = styled('div')`
`;

const App = () => {
  return (
    <>
      <GlobalStyles />
      <Layout>
        <Header />
        <Content  />
      </Layout>
    </>
  )
}

export default App;
