import React from 'react';
import styled from 'styled-components';
import Header from './components/layout/Header';
import Content from './components/layout/Content';

const Layout = styled('div')`
`;

const App = () => {
  return (
    <Layout>
      <Header/>
      <Content/>
    </Layout>
  )
}

export default App;
