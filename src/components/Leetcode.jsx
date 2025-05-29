import React from "react";
import {
  ExternalLink,
  Code,
  Trophy,
  TrendingUp,
  CheckCircle,
} from "lucide-react";

const LeetCodeSection = () => {
  const stats = {
    solved: 177,
    total: 3565,
    easy: { solved: 63, total: 878 },
    medium: { solved: 95, total: 1849 },
    hard: { solved: 19, total: 838 },
    acceptanceRate: 76.34,
    submissions: 317,
  };

  // Calculate percentages for the circular progress
  const totalPercentage = (stats.solved / stats.total) * 100;
  const easyPercentage = (stats.easy.solved / stats.easy.total) * 100;
  const mediumPercentage = (stats.medium.solved / stats.medium.total) * 100;
  const hardPercentage = (stats.hard.solved / stats.hard.total) * 100;

  // Circle parameters
  const radius = 85;
  const circumference = 2 * Math.PI * radius;
  const strokeWidth = 8;

  // Calculate stroke dash arrays for each difficulty
  const easyStrokeDasharray = `${(easyPercentage / 100) * circumference} ${circumference}`;
  const mediumStrokeDasharray = `${(mediumPercentage / 100) * circumference} ${circumference}`;
  const hardStrokeDasharray = `${(hardPercentage / 100) * circumference} ${circumference}`;

  const CircularProgress = ({
    percentage,
    color,
    strokeDasharray,
    delay = 0,
  }) => (
    <circle
      cx="100"
      cy="100"
      r={radius}
      fill="none"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeDasharray={strokeDasharray}
      strokeDashoffset={circumference}
      strokeLinecap="round"
      className="transition-all duration-1000 ease-out"
      style={{
        transform: "rotate(-90deg)",
        transformOrigin: "100px 100px",
        animation: `drawCircle 1.5s ease-out ${delay}s forwards`,
      }}
    />
  );

  return (
    <div className="pr-1 pl-1 mb-24">
      {/* Section Header */}
      <div className="flex items-center justify-center mt-12 w-full mb-8">
        <hr className="flex-grow border-gray-300" />
        <h2 className="px-6 text-2xl font-bold tracking-tight text-gray-800">
          LeetCode Progress
        </h2>
        <hr className="flex-grow border-gray-300" />
      </div>

      <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">
        My journey through algorithmic problem-solving and competitive
        programming challenges 💻
      </p>

      {/* Main Content */}
      <div className="grid lg:grid-cols-2 gap-8 mt-10 items-center">
        {/* LeetCode Wheel - Left Side */}
        <div className="flex justify-center">
          <div className="relative">
            {/* Background Circle */}
            <svg width="200" height="200" className="transform -rotate-90">
              <circle
                cx="100"
                cy="100"
                r={radius}
                fill="none"
                stroke="#e5e7eb"
                strokeWidth={strokeWidth}
              />

              {/* Easy Progress (Green) */}
              <CircularProgress
                percentage={easyPercentage}
                color="#10b981"
                strokeDasharray={easyStrokeDasharray}
                delay={0.2}
              />

              {/* Medium Progress (Orange) */}
              <CircularProgress
                percentage={mediumPercentage}
                color="#f59e0b"
                strokeDasharray={mediumStrokeDasharray}
                delay={0.4}
              />

              {/* Hard Progress (Red) */}
              <CircularProgress
                percentage={hardPercentage}
                color="#ef4444"
                strokeDasharray={hardStrokeDasharray}
                delay={0.6}
              />
            </svg>

            {/* Center Content */}
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <div className="text-3xl font-bold text-gray-800">
                {stats.solved}
              </div>
              <div className="text-sm text-gray-500">/{stats.total}</div>
              <div className="text-xs text-green-600 font-medium mt-1 flex items-center">
                <CheckCircle className="w-3 h-3 mr-1" />
                Solved
              </div>
            </div>

            {/* Attempting Badge */}
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-gray-100 px-3 py-1 rounded-full text-xs text-gray-600 border border-gray-200">
              1 Attempting
            </div>
          </div>
        </div>

        {/* Stats Breakdown - Right Side */}
        <div className="space-y-6">
          {/* Difficulty Breakdown */}
          <div className="bg-white border border-gray-300 rounded-lg p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
              <Code className="w-5 h-5 mr-2" />
              Problem Categories
            </h3>

            <div className="space-y-4">
              {/* Easy */}
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-sm font-medium text-gray-700">
                    Easy
                  </span>
                </div>
                <div className="text-sm text-gray-600">
                  <span className="font-semibold text-green-600">
                    {stats.easy.solved}
                  </span>
                  <span className="text-gray-400"> / {stats.easy.total}</span>
                </div>
              </div>

              {/* Medium */}
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <span className="text-sm font-medium text-gray-700">
                    Medium
                  </span>
                </div>
                <div className="text-sm text-gray-600">
                  <span className="font-semibold text-yellow-600">
                    {stats.medium.solved}
                  </span>
                  <span className="text-gray-400"> / {stats.medium.total}</span>
                </div>
              </div>

              {/* Hard */}
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <span className="text-sm font-medium text-gray-700">
                    Hard
                  </span>
                </div>
                <div className="text-sm text-gray-600">
                  <span className="font-semibold text-red-600">
                    {stats.hard.solved}
                  </span>
                  <span className="text-gray-400"> / {stats.hard.total}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Performance Stats */}
          <div className="bg-white border border-gray-300 rounded-lg p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
              <Trophy className="w-5 h-5 mr-2" />
              Performance
            </h3>

            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Acceptance Rate</span>
                <span className="text-sm font-semibold text-blue-600">
                  {stats.acceptanceRate}%
                </span>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Total Submissions</span>
                <span className="text-sm font-semibold text-gray-700">
                  {stats.submissions}
                </span>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Problems Solved</span>
                <span className="text-sm font-semibold text-green-600">
                  {stats.solved}
                </span>
              </div>
            </div>
          </div>

          {/* Profile Link */}
          <div className="flex justify-center">
            <a
              href="https://leetcode.com/u/QFRMaMOUBJ/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-lg transition-all duration-200 hover:from-orange-600 hover:to-red-600 hover:shadow-lg transform hover:-translate-y-0.5 font-medium"
            >
              <ExternalLink className="w-4 h-4" />
              <span>View LeetCode Profile</span>
            </a>
          </div>
        </div>
      </div>

      {/* Additional Info */}
      <div className="mt-10 p-4 bg-gradient-to-r from-gray-200 to-gray-200 rounded-lg border border-gray-200">
        <div className="flex items-start space-x-3">
          <div className="flex-shrink-0">
            <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
          </div>
          <div>
            <p className="text-sm text-gray-600">
              <span className="font-medium">Note:</span> Actively solving
              problems daily to strengthen algorithmic thinking and
              problem-solving skills. Focus areas include dynamic programming,
              graph algorithms, and system design problems.
            </p>
          </div>
        </div>
      </div>

      {/* Closing divider */}
      <div className="flex items-center justify-center mt-12 w-full">
        <hr className="flex-grow border-gray-300" />
        <p className="px-6 text-gray-500 text-sm">
          Keep coding, keep growing! 🚀
        </p>
        <hr className="flex-grow border-gray-300" />
      </div>

      <style jsx>{`
        @keyframes drawCircle {
          from {
            stroke-dashoffset: ${circumference};
          }
          to {
            stroke-dashoffset: 0;
          }
        }
      `}</style>
    </div>
  );
};

export default LeetCodeSection;
