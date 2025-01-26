import React from 'react';
import { Link } from 'react-router-dom';
import { useWallet } from '@solana/wallet-adapter-react';
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';

const Navbar = () => {
  const { connected, publicKey } = useWallet();

  return (
    <nav className="bg-gray-800 py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="text-xl font-bold">Solana P2E Game</Link>
        
        <div className="flex items-center space-x-6">
          <Link to="/game" className="hover:text-purple-400">Play</Link>
          <Link to="/marketplace" className="hover:text-purple-400">Marketplace</Link>
          <Link to="/dashboard" className="hover:text-purple-400">Dashboard</Link>
          <Link to="/leaderboard" className="hover:text-purple-400">Leaderboard</Link>
          
          {connected ? (
            <div className="flex items-center space-x-4">
              <span className="text-sm bg-purple-700 px-4 py-2 rounded-full">
                {publicKey.toString().slice(0, 6)}...{publicKey.toString().slice(-4)}
              </span>
              <WalletMultiButton />
            </div>
          ) : (
            <WalletMultiButton />
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
