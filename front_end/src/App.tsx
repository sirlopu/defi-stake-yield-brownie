import React from 'react';
import { Header } from "./components/Header"
import { DAppProvider, ChainId } from '@usedapp/core';
import { Container } from "@material-ui/core";

function App() {
  return (
    <DAppProvider config={{
      supportedChains: [ChainId.Kovan, ChainId.Rinkeby]
    }}>
      <Header />
      <Container maxWidth="md">
        <div>test</div>
      </Container>
    </DAppProvider>
  );
}

export default App;
