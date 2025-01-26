import React, { useState, useEffect } from 'react';
import { useWallet } from '@solana/wallet-adapter-react';
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';

const Game = () => {
  const { connected } = useWallet();
  const [score, setScore] = useState(0);
  const [gameState, setGameState] = useState('waiting'); // waiting, playing, ended
  const [position, setPosition] = useState({ x: 50, y: 50 });
  const [targets, setTargets] = useState([]);

  if (!connected) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh]">
        <h2 className="text-2xl font-bold mb-4">Connect to Play</h2>
        <WalletMultiButton />
      </div>
    );
  }

  const startGame = () => {
    setGameState('playing');
    setScore(0);
    setTargets([]);
  };

  const endGame = () => {
    setGameState('ended');
    // Here we would submit the score to the blockchain
  };

  const handleClick = (target) => {
    if (gameState === 'playing') {
      setTargets(prev => prev.filter(t => t.id !== target.id));
      setScore(prev => prev + 10);
    }
  };

  useEffect(() => {
    if (gameState === 'playing') {
      const interval = setInterval(generateTarget, 2000);
      return () => clearInterval(interval);
    }
  }, [gameState]);

  const generateTarget = () => {
    const newTarget = {
      x: Math.random() * 80 + 10,
      y: Math.random() * 80 + 10,
      id: Date.now()
    };
    setTargets(prev => [...prev, newTarget]);
  };

  return (
    <div className="max-w-4xl mx-auto text-center">
      <h2 className="text-3xl font-bold mb-8">Solana Collector</h2>

      {gameState === 'waiting' && (
        <div className="space-y-6">
          <p className="text-xl">Collect tokens to earn Solana rewards!</p>
          <button
            onClick={startGame}
            className="bg-purple-600 hover:bg-purple-700 px-8 py-3 rounded-full text-lg font-semibold"
          >
            Start Game
          </button>
        </div>
      )}

      {gameState === 'playing' && (
        <div className="space-y-8">
          <div className="text-2xl font-bold">Score: {score}</div>
          <div
            className="relative bg-gray-900 w-[600px] h-[400px] rounded-lg overflow-hidden"
            style={{ border: '2px solid rgb(139, 92, 246)' }}
          >
            {targets.map((target) => (
              <div
                key={target.id}
                onClick={() => handleClick(target)}
                className="absolute w-8 h-8 bg-yellow-400 rounded-full cursor-pointer transform hover:scale-110 transition-transform"
                style={{
                  left: `${target.x}%`,
                  top: `${target.y}%`,
                  transform: 'translate(-50%, -50%)'
                }}
              />
            ))}
          </div>
        </div>
      )}

      {gameState === 'ended' && (
        <div className="space-y-6">
          <h3 className="text-2xl font-bold">Game Over!</h3>
          <p className="text-xl">Final Score: {score}</p>
          <div className="space-x-4">
            <button
              onClick={startGame}
              className="bg-purple-600 hover:bg-purple-700 px-6 py-2 rounded-full"
            >
              Play Again
            </button>
          </div>
        </div>
      )}

      {/* Game Stats */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
        <StatCard title="High Score" value="0" />
        <StatCard title="Total Games" value="0" />
        <StatCard title="Tokens Earned" value="0 SOL" />
      </div>
    </div>
  );
};

const StatCard = ({ title, value }) => (
  <div className="bg-gray-800 rounded-xl p-6">
    <h3 className="text-gray-400 mb-2">{title}</h3>
    <p className="text-2xl font-bold">{value}</p>
  </div>
);

export default Game;
