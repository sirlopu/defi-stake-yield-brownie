import React from 'react';
import { Header } from "./components/Header"
import { DAppProvider, ChainId } from '@usedapp/core';
import { Container } from "@material-ui/core";
import { Main } from './components/Main';

function App() {
  return (
    <DAppProvider config={{
      //supportedChains: [ChainId.Kovan, ChainId.Rinkeby]
      supportedChains: [ChainId.Kovan]
    }}>
      <Header />
      <Container maxWidth="md">
        <Main />
      </Container>
    </DAppProvider>
  );
}

export default App;
