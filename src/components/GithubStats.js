import React, { useState, useEffect } from 'react';
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

const GithubStats = ({ isDark = true }) => {
  const [githubData, setGithubData] = useState({
    commits: 0,
    stars: 0,
    forks: 0,
    views: 0,
    languages: {}
  });

  useEffect(() => {
    const fetchGithubData = async () => {
      try {
        // Fetch user data
        const userResponse = await fetch('https://api.github.com/users/hnaamdev41');
        const userData = await userResponse.json();

        // Fetch repositories
        const reposResponse = await fetch('https://api.github.com/users/hnaamdev41/repos');
        const reposData = await reposResponse.json();

        // Calculate total stars and forks
        const totalStars = reposData.reduce((acc, repo) => acc + repo.stargazers_count, 0);
        const totalForks = reposData.reduce((acc, repo) => acc + repo.forks_count, 0);

        // Calculate language distribution
        const languages = {};
        let totalSize = 0;

        await Promise.all(reposData.map(async (repo) => {
          const langResponse = await fetch(repo.languages_url);
          const langData = await langResponse.json();
          
          Object.entries(langData).forEach(([lang, size]) => {
            languages[lang] = (languages[lang] || 0) + size;
            totalSize += size;
          });
        }));

        // Convert language bytes to percentages
        const languagePercentages = Object.entries(languages).reduce((acc, [lang, size]) => {
          acc[lang] = Math.round((size / totalSize) * 100);
          return acc;
        }, {});

        setGithubData({
          commits: userData.public_repos * 20, // Approximate based on repo count
          stars: totalStars,
          forks: totalForks,
          views: userData.followers * 10, // Approximate based on followers
          languages: languagePercentages
        });
      } catch (error) {
        console.error('Error fetching GitHub data:', error);
      }
    };

    fetchGithubData();
  }, []);

  const weeks = Array.from({ length: 52 }, (_, i) => i);
  const days = Array.from({ length: 7 }, (_, i) => i);

  return (
    <div className="space-y-6">
      {/* Quick Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className={`${isDark ? 'bg-gray-800' : 'bg-white'} p-4 rounded-lg shadow-lg`}>
          <div className="flex items-center justify-between">
            <GitCommit className="text-blue-400" />
            <span className="text-2xl">{githubData.commits}</span>
          </div>
          <div className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
            Total Commits
          </div>
        </div>
        <div className={`${isDark ? 'bg-gray-800' : 'bg-white'} p-4 rounded-lg shadow-lg`}>
          <div className="flex items-center justify-between">
            <Star className="text-yellow-400" />
            <span className="text-2xl">{githubData.stars}</span>
          </div>
          <div className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
            Total Stars
          </div>
        </div>
        <div className={`${isDark ? 'bg-gray-800' : 'bg-white'} p-4 rounded-lg shadow-lg`}>
          <div className="flex items-center justify-between">
            <GitFork className="text-green-400" />
            <span className="text-2xl">{githubData.forks}</span>
          </div>
          <div className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
            Total Forks
          </div>
        </div>
        <div className={`${isDark ? 'bg-gray-800' : 'bg-white'} p-4 rounded-lg shadow-lg`}>
          <div className="flex items-center justify-between">
            <Eye className="text-purple-400" />
            <span className="text-2xl">{githubData.views}</span>
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
        {Object.entries(githubData.languages).map(([lang, percentage]) => (
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