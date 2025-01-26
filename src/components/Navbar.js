import React from 'react';
import { Link } from 'react-router-dom';
import { useReown } from '@reownkit/appkit';

const Navbar = () => {
  const { connect, disconnect, isConnected, address } = useReown();

  return (
    <nav className="bg-gray-800 py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="text-xl font-bold">Solana P2E Game</Link>
        
        <div className="flex items-center space-x-6">
          <Link to="/game" className="hover:text-purple-400">Play</Link>
          <Link to="/marketplace" className="hover:text-purple-400">Marketplace</Link>
          <Link to="/dashboard" className="hover:text-purple-400">Dashboard</Link>
          <Link to="/leaderboard" className="hover:text-purple-400">Leaderboard</Link>
          
          {isConnected ? (
            <div className="flex items-center space-x-4">
              <span className="text-sm bg-purple-700 px-4 py-2 rounded-full">
                {address.slice(0, 6)}...{address.slice(-4)}
              </span>
              <button
                onClick={disconnect}
                className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded-full text-sm"
              >
                Disconnect
              </button>
            </div>
          ) : (
            <button
              onClick={connect}
              className="bg-purple-600 hover:bg-purple-700 px-6 py-2 rounded-full text-sm"
            >
              Connect Wallet
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
