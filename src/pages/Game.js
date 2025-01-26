import React, { useState, useEffect } from 'react';
import { useReown } from '@reownkit/appkit';

const Game = () => {
  const { isConnected, connect } = useReown();
  const [gameState, setGameState] = useState({
    score: 0,
    level: 1,
    gameStarted: false,
    gameOver: false
  });

  const [position, setPosition] = useState({ x: 50, y: 50 });
  const [targets, setTargets] = useState([]);

  useEffect(() => {
    if (gameState.gameStarted && !gameState.gameOver) {
      const interval = setInterval(generateTarget, 2000);
      return () => clearInterval(interval);
    }
  }, [gameState.gameStarted, gameState.gameOver]);

  const generateTarget = () => {
    const newTarget = {
      x: Math.random() * 80 + 10,
      y: Math.random() * 80 + 10,
      id: Date.now()
    };
    setTargets(prev => [...prev, newTarget]);
  };

  const handleStart = async () => {
    if (!isConnected) {
      await connect();
      return;
    }
    setGameState(prev => ({ ...prev, gameStarted: true }));
    setTargets([]);
  };

  const handleClick = (target) => {
    setTargets(prev => prev.filter(t => t.id !== target.id));
    setGameState(prev => ({
      ...prev,
      score: prev.score + 10,
      level: Math.floor(prev.score / 100) + 1
    }));
  };

  return (
    <div className="flex flex-col items-center">
      <div className="mb-6 text-center">
        <h2 className="text-3xl font-bold mb-4">Solana Collector</h2>
        <p className="text-gray-300">Collect tokens to earn Solana rewards!</p>
      </div>

      <div className="bg-gray-800 p-4 rounded-lg mb-6 flex gap-8">
        <div className="text-center">
          <p className="text-sm text-gray-400">Score</p>
          <p className="text-2xl font-bold">{gameState.score}</p>
        </div>
        <div className="text-center">
          <p className="text-sm text-gray-400">Level</p>
          <p className="text-2xl font-bold">{gameState.level}</p>
        </div>
      </div>

      {!gameState.gameStarted ? (
        <button
          onClick={handleStart}
          className="bg-purple-600 hover:bg-purple-700 px-8 py-3 rounded-full text-lg font-semibold"
        >
          {isConnected ? 'Start Game' : 'Connect to Play'}
        </button>
      ) : (
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
      )}

      {gameState.gameOver && (
        <div className="mt-6 text-center">
          <h3 className="text-2xl font-bold mb-2">Game Over!</h3>
          <p className="text-gray-300 mb-4">Final Score: {gameState.score}</p>
          <button
            onClick={() => setGameState({
              score: 0,
              level: 1,
              gameStarted: false,
              gameOver: false
            })}
            className="bg-purple-600 hover:bg-purple-700 px-6 py-2 rounded-full"
          >
            Play Again
          </button>
        </div>
      )}
    </div>
  );
};

export default Game;
