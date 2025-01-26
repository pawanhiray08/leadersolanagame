import React from 'react';
import { useReown } from '@reownkit/appkit';

const Dashboard = () => {
  const { isConnected, connect } = useReown();

  if (!isConnected) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh]">
        <h2 className="text-2xl font-bold mb-4">Connect to View Your Dashboard</h2>
        <button
          onClick={connect}
          className="bg-purple-600 hover:bg-purple-700 px-6 py-3 rounded-full"
        >
          Connect Wallet
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold mb-8">Player Dashboard</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Token Balance Card */}
        <div className="bg-gray-800 rounded-xl p-6">
          <h3 className="text-xl font-semibold mb-4">Token Balance</h3>
          <div className="flex items-center justify-between">
            <span className="text-gray-400">SOL Balance</span>
            <span className="text-2xl font-bold">0.00</span>
          </div>
          <div className="flex items-center justify-between mt-4">
            <span className="text-gray-400">Game Tokens</span>
            <span className="text-2xl font-bold">0</span>
          </div>
        </div>

        {/* Game Stats Card */}
        <div className="bg-gray-800 rounded-xl p-6">
          <h3 className="text-xl font-semibold mb-4">Game Statistics</h3>
          <div className="space-y-4">
            <div className="flex justify-between">
              <span className="text-gray-400">Games Played</span>
              <span>0</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">Highest Score</span>
              <span>0</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">Total Earnings</span>
              <span>0 SOL</span>
            </div>
          </div>
        </div>

        {/* NFT Collection Card */}
        <div className="bg-gray-800 rounded-xl p-6">
          <h3 className="text-xl font-semibold mb-4">NFT Collection</h3>
          <div className="grid grid-cols-2 gap-4">
            <div className="aspect-square bg-gray-700 rounded-lg flex items-center justify-center">
              <span className="text-gray-500">Empty</span>
            </div>
            <div className="aspect-square bg-gray-700 rounded-lg flex items-center justify-center">
              <span className="text-gray-500">Empty</span>
            </div>
            <div className="aspect-square bg-gray-700 rounded-lg flex items-center justify-center">
              <span className="text-gray-500">Empty</span>
            </div>
            <div className="aspect-square bg-gray-700 rounded-lg flex items-center justify-center">
              <span className="text-gray-500">Empty</span>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="mt-8">
        <h3 className="text-xl font-semibold mb-4">Recent Activity</h3>
        <div className="bg-gray-800 rounded-xl p-6">
          <div className="text-center text-gray-400 py-8">
            No recent activity to display
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
