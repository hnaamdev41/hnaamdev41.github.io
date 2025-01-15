import React from 'react';
import { GitCommit, Star, GitFork, Eye, Code } from 'lucide-react';

const ContributionDay = ({ intensity }) => {
  const getColor = () => {
    if (intensity === 0) return 'bg-gray-800';
    if (intensity < 0.3) return 'bg-green-900';
    if (intensity < 0.6) return 'bg-green-700';
    return 'bg-green-500';
  };

  return (
    <div className={`w-3 h-3 rounded-sm ${getColor()}`} />
  );
};

const defaultStats = {
  commits: 0,
  stars: 0,
  forks: 0,
  views: 0,
  languages: {
    JavaScript: 0,
    TypeScript: 0,
    Python: 0,
    CSS: 0
  }
};

const GithubStats = ({ stats = defaultStats, isDark = true }) => {
  const weeks = Array.from({ length: 52 }, (_, i) => i);
  const days = Array.from({ length: 7 }, (_, i) => i);

  const currentStats = {
    ...defaultStats,
    ...stats,
    languages: {
      ...defaultStats.languages,
      ...(stats?.languages || {})
    }
  };

  return (
    <div className="space-y-6">
      {/* Quick Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className={`${isDark ? 'bg-gray-800' : 'bg-white'} p-4 rounded-lg shadow-lg`}>
          <div className="flex items-center justify-between">
            <GitCommit className="text-blue-400" />
            <span className="text-2xl">{currentStats.commits}</span>
          </div>
          <div className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
            Total Commits
          </div>
        </div>
        <div className={`${isDark ? 'bg-gray-800' : 'bg-white'} p-4 rounded-lg shadow-lg`}>
          <div className="flex items-center justify-between">
            <Star className="text-yellow-400" />
            <span className="text-2xl">{currentStats.stars}</span>
          </div>
          <div className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
            Total Stars
          </div>
        </div>
        <div className={`${isDark ? 'bg-gray-800' : 'bg-white'} p-4 rounded-lg shadow-lg`}>
          <div className="flex items-center justify-between">
            <GitFork className="text-green-400" />
            <span className="text-2xl">{currentStats.forks}</span>
          </div>
          <div className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
            Total Forks
          </div>
        </div>
        <div className={`${isDark ? 'bg-gray-800' : 'bg-white'} p-4 rounded-lg shadow-lg`}>
          <div className="flex items-center justify-between">
            <Eye className="text-purple-400" />
            <span className="text-2xl">{currentStats.views}</span>
          </div>
          <div className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
            Profile Views
          </div>
        </div>
      </div>

      {/* Language Stats */}
      <div className={`${isDark ? 'bg-gray-800' : 'bg-white'} p-6 rounded-lg shadow-lg`}>
        <h2 className="text-xl mb-4 flex items-center">
          <Code className="mr-2" />
          Language Distribution
        </h2>
        {Object.entries(currentStats.languages).map(([lang, percentage]) => (
          <div key={lang} className="mb-4">
            <div className="flex justify-between mb-1">
              <span>{lang}</span>
              <span>{percentage}%</span>
            </div>
            <div className={`w-full ${isDark ? 'bg-gray-700' : 'bg-gray-200'} rounded-full h-2`}>
              <div
                className="bg-blue-500 rounded-full h-2"
                style={{ width: `${percentage}%` }}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Contribution Graph */}
      <div className={`${isDark ? 'bg-gray-800' : 'bg-white'} p-6 rounded-lg shadow-lg`}>
        <h2 className="text-xl mb-4">Contribution Activity</h2>
        <div className="overflow-x-auto">
          <div className="inline-flex gap-1">
            {weeks.map((week) => (
              <div key={week} className="flex flex-col gap-1">
                {days.map((day) => (
                  <ContributionDay
                    key={`${week}-${day}`}
                    intensity={Math.random()}
                  />
                ))}
              </div>
            ))}
          </div>
        </div>
        <div className="mt-2 flex items-center justify-end space-x-2 text-sm">
          <span className={isDark ? 'text-gray-400' : 'text-gray-600'}>Less</span>
          <ContributionDay intensity={0} />
          <ContributionDay intensity={0.2} />
          <ContributionDay intensity={0.4} />
          <ContributionDay intensity={0.6} />
          <ContributionDay intensity={0.8} />
          <span className={isDark ? 'text-gray-400' : 'text-gray-600'}>More</span>
        </div>
      </div>
    </div>
  );
};

export default GithubStats;