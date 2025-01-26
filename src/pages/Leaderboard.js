import React, { useState } from 'react';

const Leaderboard = () => {
  const [timeframe, setTimeframe] = useState('all');

  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-8">Global Leaderboard</h2>

      {/* Timeframe Filter */}
      <div className="flex space-x-4 mb-6">
        <TimeframeButton
          active={timeframe === 'all'}
          onClick={() => setTimeframe('all')}
        >
          All Time
        </TimeframeButton>
        <TimeframeButton
          active={timeframe === 'month'}
          onClick={() => setTimeframe('month')}
        >
          This Month
        </TimeframeButton>
        <TimeframeButton
          active={timeframe === 'week'}
          onClick={() => setTimeframe('week')}
        >
          This Week
        </TimeframeButton>
      </div>

      {/* Leaderboard Table */}
      <div className="bg-gray-800 rounded-xl overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="bg-gray-700">
              <th className="px-6 py-4 text-left">Rank</th>
              <th className="px-6 py-4 text-left">Player</th>
              <th className="px-6 py-4 text-right">Score</th>
              <th className="px-6 py-4 text-right">Earnings</th>
            </tr>
          </thead>
          <tbody>
            {[1, 2, 3, 4, 5].map((rank) => (
              <LeaderboardRow
                key={rank}
                rank={rank}
                player={`Player${rank}`}
                score={1000 - (rank - 1) * 100}
                earnings={(1.0 - (rank - 1) * 0.1).toFixed(1)}
              />
            ))}
          </tbody>
        </table>
      </div>

      {/* Achievement Badges */}
      <div className="mt-12">
        <h3 className="text-xl font-semibold mb-4">Top Achievements</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <AchievementBadge
            title="Highest Score"
            value="1000"
            player="Player1"
          />
          <AchievementBadge
            title="Most Earnings"
            value="1.0 SOL"
            player="Player1"
          />
          <AchievementBadge
            title="Most Games"
            value="50"
            player="Player3"
          />
          <AchievementBadge
            title="Best Win Rate"
            value="85%"
            player="Player2"
          />
        </div>
      </div>
    </div>
  );
};

const TimeframeButton = ({ children, active, onClick }) => (
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

const LeaderboardRow = ({ rank, player, score, earnings }) => (
  <tr className="border-t border-gray-700">
    <td className="px-6 py-4">
      <div className="flex items-center">
        <span className={`
          ${rank === 1 ? 'text-yellow-400' : ''}
          ${rank === 2 ? 'text-gray-400' : ''}
          ${rank === 3 ? 'text-orange-400' : ''}
        `}>
          #{rank}
        </span>
      </div>
    </td>
    <td className="px-6 py-4">{player}</td>
    <td className="px-6 py-4 text-right">{score}</td>
    <td className="px-6 py-4 text-right">{earnings} SOL</td>
  </tr>
);

const AchievementBadge = ({ title, value, player }) => (
  <div className="bg-gray-800 rounded-xl p-4">
    <h4 className="text-sm text-gray-400 mb-2">{title}</h4>
    <div className="text-xl font-bold mb-1">{value}</div>
    <div className="text-sm text-purple-400">{player}</div>
  </div>
);

export default Leaderboard;
