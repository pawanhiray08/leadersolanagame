import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useWallet } from '@solana/wallet-adapter-react';
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';

const Home = () => {
  const navigate = useNavigate();
  const { connected } = useWallet();

  const handleGetStarted = () => {
    if (connected) {
      navigate('/game');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] text-center">
      <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text">
        Play, Earn & Trade on Solana
      </h1>
      
      <p className="text-xl text-gray-300 mb-8 max-w-2xl">
        Join the ultimate Play-to-Earn experience! Complete challenges, earn Solana tokens,
        collect unique NFTs, and compete with players worldwide.
      </p>
      
      <div className="flex gap-6">
        {connected ? (
          <button
            onClick={handleGetStarted}
            className="bg-purple-600 hover:bg-purple-700 px-8 py-3 rounded-full text-lg font-semibold transition-all"
          >
            Start Playing
          </button>
        ) : (
          <WalletMultiButton className="bg-purple-600 hover:bg-purple-700 px-8 py-3 rounded-full text-lg font-semibold transition-all" />
        )}
        
        <button
          onClick={() => navigate('/marketplace')}
          className="bg-transparent border-2 border-purple-600 hover:bg-purple-600/20 px-8 py-3 rounded-full text-lg font-semibold transition-all"
        >
          Explore NFTs
        </button>
      </div>

      <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
        <FeatureCard
          title="Easy Login"
          description="Connect with your Solana wallet or use social login for a seamless experience"
        />
        <FeatureCard
          title="Earn Rewards"
          description="Complete challenges to earn Solana tokens and exclusive NFTs"
        />
        <FeatureCard
          title="Trade Assets"
          description="Buy, sell, and trade your earned NFTs in our marketplace"
        />
      </div>
    </div>
  );
};

const FeatureCard = ({ title, description }) => (
  <div className="bg-gray-800 p-6 rounded-xl">
    <h3 className="text-xl font-semibold mb-3">{title}</h3>
    <p className="text-gray-400">{description}</p>
  </div>
);

export default Home;
