import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import WalletContextProvider from './contexts/WalletContextProvider';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Game from './pages/Game';
import Dashboard from './pages/Dashboard';
import Marketplace from './pages/Marketplace';
import Leaderboard from './pages/Leaderboard';

// Import wallet styles
import '@solana/wallet-adapter-react-ui/styles.css';

function App() {
  return (
    <WalletContextProvider>
      <Router>
        <div className="min-h-screen bg-gray-900 text-white">
          <Navbar />
          <main className="container mx-auto px-4 py-8">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/game" element={<Game />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/marketplace" element={<Marketplace />} />
              <Route path="/leaderboard" element={<Leaderboard />} />
            </Routes>
          </main>
        </div>
      </Router>
    </WalletContextProvider>
  );
}

export default App;
