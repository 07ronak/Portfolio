import React from "react";
import { ExternalLink, Code, Trophy, CheckCircle, Github } from "lucide-react";

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

  // Circle parameters
  const radius = 90;
  const circumference = 2 * Math.PI * radius;
  const strokeWidth = 10;

  // Calculate angles for each difficulty based on total problems
  const easyAngle = (stats.easy.total / stats.total) * 360;
  const mediumAngle = (stats.medium.total / stats.total) * 360;
  const hardAngle = (stats.hard.total / stats.total) * 360;

  // Calculate stroke dash arrays for background (total problems in each category)
  const easyBackgroundDash = `${(easyAngle / 360) * circumference} ${circumference}`;
  const mediumBackgroundDash = `${(mediumAngle / 360) * circumference} ${circumference}`;
  const hardBackgroundDash = `${(hardAngle / 360) * circumference} ${circumference}`;

  // Calculate stroke dash arrays for solved problems
  const easySolvedDash = `${(stats.easy.solved / stats.total) * circumference} ${circumference}`;
  const mediumSolvedDash = `${(stats.medium.solved / stats.total) * circumference} ${circumference}`;
  const hardSolvedDash = `${(stats.hard.solved / stats.total) * circumference} ${circumference}`;

  const CircularProgress = ({
    strokeDasharray,
    color,
    opacity = 1,
    rotation = 0,
  }) => (
    <circle
      cx="100"
      cy="100"
      r={radius}
      fill="none"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeDasharray={strokeDasharray}
      strokeDashoffset={0}
      strokeLinecap="round"
      opacity={opacity}
      className="transition-all duration-1000 ease-out"
      style={{
        transform: `rotate(${rotation - 90}deg)`,
        transformOrigin: "100px 100px",
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

              {/* Background sections for each difficulty (dull colors) */}
              {/* Easy background (starts at 0 degrees) */}
              <CircularProgress
                strokeDasharray={easyBackgroundDash}
                color="#10b981"
                opacity={0.3}
                rotation={0}
              />

              {/* Medium background (starts after easy section) */}
              <CircularProgress
                strokeDasharray={mediumBackgroundDash}
                color="#f59e0b"
                opacity={0.3}
                rotation={easyAngle}
              />

              {/* Hard background (starts after easy + medium sections) */}
              <CircularProgress
                strokeDasharray={hardBackgroundDash}
                color="#ef4444"
                opacity={0.3}
                rotation={easyAngle + mediumAngle}
              />

              {/* Solved sections (bright colors) */}
              {/* Easy solved */}
              <CircularProgress
                strokeDasharray={easySolvedDash}
                color="#10b981"
                opacity={1}
                rotation={0}
              />

              {/* Medium solved */}
              <CircularProgress
                strokeDasharray={mediumSolvedDash}
                color="#f59e0b"
                opacity={1}
                rotation={easyAngle}
              />

              {/* Hard solved */}
              <CircularProgress
                strokeDasharray={hardSolvedDash}
                color="#ef4444"
                opacity={1}
                rotation={easyAngle + mediumAngle}
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

              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600 font-medium">Favorite Topic</span>
                <span className="text-sm font-semibold text-rose-500">
                  Dynamic Programming
                </span>
              </div>
            </div>
          </div>

          {/* Profile Link */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="https://leetcode.com/u/QFRMaMOUBJ/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center space-x-2 px-6 py-3 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-lg transition-all duration-200 hover:from-orange-600 hover:to-red-600 hover:shadow-lg transform hover:-translate-y-0.5 font-medium"
            >
              <ExternalLink className="w-4 h-4" />
              <span>View LeetCode Profile</span>
            </a>

            <a
              href="https://github.com/07ronak/JS-DSA"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center space-x-2 px-6 py-3 bg-gradient-to-r from-gray-900 to-black text-white rounded-lg transition-all duration-200 hover:from-gray-900 hover:to-gray-800 hover:shadow-lg transform hover:-translate-y-0.5 font-medium"
            >
              <Github className="w-4 h-4" />
              <span>JavaScript DSA Repository</span>
            </a>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center mt-6 w-full">
        <hr className="flex-grow border-gray-300" />
      </div>
    </div>
  );
};

export default LeetCodeSection;
