import React, { useState } from 'react';
import { useWallet } from '@solana/wallet-adapter-react';
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';

const Marketplace = () => {
  const { connected } = useWallet();
  const [activeTab, setActiveTab] = useState('browse');

  if (!connected) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh]">
        <h2 className="text-2xl font-bold mb-4">Connect to Access Marketplace</h2>
        <WalletMultiButton />
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-bold">NFT Marketplace</h2>
        <button
          onClick={() => setActiveTab('create')}
          className="bg-purple-600 hover:bg-purple-700 px-6 py-2 rounded-full"
        >
          List NFT
        </button>
      </div>

      {/* Marketplace Tabs */}
      <div className="flex space-x-4 mb-6">
        <TabButton
          active={activeTab === 'browse'}
          onClick={() => setActiveTab('browse')}
        >
          Browse
        </TabButton>
        <TabButton
          active={activeTab === 'my-items'}
          onClick={() => setActiveTab('my-items')}
        >
          My Items
        </TabButton>
      </div>

      {/* NFT Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {[1, 2, 3, 4].map((item) => (
          <NFTCard key={item} />
        ))}
      </div>
    </div>
  );
};

const TabButton = ({ children, active, onClick }) => (
  <button
    onClick={onClick}
    className={`px-6 py-2 rounded-full ${
      active
        ? 'bg-purple-600 text-white'
        : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
    }`}
  >
    {children}
  </button>
);

const NFTCard = () => (
  <div className="bg-gray-800 rounded-xl overflow-hidden">
    <div className="aspect-square bg-gray-700 flex items-center justify-center">
      <span className="text-gray-500">NFT Preview</span>
    </div>
    <div className="p-4">
      <h3 className="font-semibold mb-2">Game NFT #1</h3>
      <div className="flex justify-between items-center">
        <span className="text-gray-400">Price</span>
        <span className="font-semibold">0.1 SOL</span>
      </div>
      <button className="w-full mt-4 bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded-full">
        Buy Now
      </button>
    </div>
  </div>
);

export default Marketplace;
