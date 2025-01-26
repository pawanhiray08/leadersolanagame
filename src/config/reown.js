import { PhantomWalletAdapter, SolflareWalletAdapter } from '@solana/wallet-adapter-wallets';
import {
  ConnectionProvider,
  WalletProvider,
} from '@solana/wallet-adapter-react';
import { WalletModalProvider } from '@solana/wallet-adapter-react-ui';
import { clusterApiUrl } from '@solana/web3.js';

// Initialize Reown SDK
export const reownSDK = new ReownSDK({
  projectId: process.env.REACT_APP_REOWN_PROJECT_ID || '9e17633ba75191959a519a3ba3ffc2d9',
  network: 'mainnet-beta'
});

// Initialize wallet adapters
const wallets = [
  new PhantomWalletAdapter(),
  new SolflareWalletAdapter()
];

// Solana network configuration
const network = clusterApiUrl('devnet');

// Wallet context provider
export const WalletContextProvider = ({ children }) => {
  return (
    <ConnectionProvider endpoint={network}>
      <WalletProvider wallets={wallets} autoConnect>
        <WalletModalProvider>
          {children}
        </WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  );
};
