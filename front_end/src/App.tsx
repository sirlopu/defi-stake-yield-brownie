import React from 'react';
import { DAppProvider, ChainId } from '@usedapp/core';

function App() {
  return (
    <DAppProvider config={{
      supportedChains: [ChainId.Kovan, ChainId.Rinkeby]
    }}>
      <div>Hi</div>
    </DAppProvider>
  );
}

export default App;