import React from 'react';
import { Header } from "./components/Header"
import { DAppProvider, ChainId } from '@usedapp/core';

function App() {
  return (
    <DAppProvider config={{
      supportedChains: [ChainId.Kovan, ChainId.Rinkeby]
    }}>
      <Header />
    </DAppProvider>
  );
}

export default App;
