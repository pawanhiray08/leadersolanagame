import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ReownProvider } from '@reownkit/appkit';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Game from './pages/Game';
import Marketplace from './pages/Marketplace';
import Dashboard from './pages/Dashboard';
import Leaderboard from './pages/Leaderboard';

function App() {
  return (
    <ReownProvider
      apiKey={process.env.REACT_APP_REOWN_API_KEY}
      network="mainnet-beta"
    >
      <Router>
        <div className="min-h-screen bg-gray-900 text-white">
          <Navbar />
          <div className="container mx-auto px-4 py-8">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/game" element={<Game />} />
              <Route path="/marketplace" element={<Marketplace />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/leaderboard" element={<Leaderboard />} />
            </Routes>
          </div>
        </div>
      </Router>
    </ReownProvider>
  );
}

export default App;
