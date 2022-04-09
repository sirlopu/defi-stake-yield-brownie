import React from 'react';
import { Header } from "./components/Header"
import { DAppProvider, Config, Kovan, ChainId } from '@usedapp/core';
import { Container } from "@material-ui/core";
import { Main } from './components/Main';
import { getDefaultProvider } from 'ethers';

const config: Config = {
  readOnlyChainId: Kovan.chainId,
  readOnlyUrls: {
    [Kovan.chainId]: getDefaultProvider('kovan'),
  },
}

// function App() {
//   return (
//     <DAppProvider config={{
//       //supportedChains: [ChainId.Kovan, ChainId.Rinkeby]
//       supportedChains: [ChainId.Kovan],
//       notifications: {
//         expirationPeriod: 1000,
//         checkInterval: 1000
//       }
//     }}>
//       <Header />
//       <Container maxWidth="md">
//         <Main />
//       </Container>
//     </DAppProvider>
//   );
// }
function App() {
  return (
    <DAppProvider config={config} >
      <Header></Header>
      <Container maxWidth="md">
        <div className="App">
          <Main />
        </div>
      </Container>
    </DAppProvider>
  );
}

export default App;
