import React from "react";
import { ExternalLink, Code, Trophy, CheckCircle, Github } from "lucide-react";

// 👉 Number of screenshots in public/ss (1.png, 2.png, ...)
const SS_COUNT = 16;
// 👉 Reel speed: seconds each image takes to pass by (higher = slower)
const SECONDS_PER_IMAGE = 8;

const images = Array.from({ length: SS_COUNT }, (_, i) => `/ss/${i + 1}.png`);

// Fills whatever height its box gets (stretches down to the buttons)
const Reel = () => (
  <div className="absolute inset-x-0 bottom-0 top-10 flex flex-col">
    <style>{`
      @keyframes reel-scroll {
        from { transform: translateX(0); }
        to   { transform: translateX(-50%); }
      }
      .reel-track {
        animation: reel-scroll ${SS_COUNT * SECONDS_PER_IMAGE}s linear infinite;
      }
      .reel-track:hover { animation-play-state: paused; }
    `}</style>

    <p className="text-center text-sm font-medium text-gray-500 mb-2">
      Some kind words from the LeetCode community 💬
    </p>

    <div className="flex-1 min-h-0 overflow-hidden">
      {/* Images are listed twice so the loop has no visible jump */}
      <div className="reel-track flex w-max h-full">
        {[...images, ...images].map((src, i) => (
          <img
            key={i}
            src={src}
            alt={`LeetCode comment ${(i % SS_COUNT) + 1}`}
            className="h-full w-auto mr-3 rounded-md"
          />
        ))}
      </div>
    </div>
  </div>
);

const LeetCodeSection = () => {
  const stats = {
    easy: { solved: 274, total: 966 },
    medium: { solved: 427, total: 2117 },
    hard: { solved: 135, total: 977 },
    acceptanceRate: 74.63,
    submissions: 3600,
  };

  stats.solved = stats.easy.solved + stats.medium.solved + stats.hard.solved;
  stats.total = stats.easy.total + stats.medium.total + stats.hard.total;

  const radius = 90;
  const circumference = 2 * Math.PI * radius;
  const strokeWidth = 10;

  const easyAngle = (stats.easy.total / stats.total) * 360;
  const mediumAngle = (stats.medium.total / stats.total) * 360;
  const hardAngle = (stats.hard.total / stats.total) * 360;

  const easyBackgroundDash = `${(easyAngle / 360) * circumference} ${circumference}`;
  const mediumBackgroundDash = `${(mediumAngle / 360) * circumference} ${circumference}`;
  const hardBackgroundDash = `${(hardAngle / 360) * circumference} ${circumference}`;

  const easySolvedDash = `${(stats.easy.solved / stats.total) * circumference} ${circumference}`;
  const mediumSolvedDash = `${(stats.medium.solved / stats.total) * circumference} ${circumference}`;
  const hardSolvedDash = `${(stats.hard.solved / stats.total) * circumference} ${circumference}`;

  const CircularProgress = ({ strokeDasharray, color, opacity = 1, rotation = 0 }) => (
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

  const cardClass = "bg-white border border-gray-200 rounded-lg p-5 shadow-sm";
  const titleClass = "text-base font-semibold text-gray-800 mb-3 flex items-center";

  return (
    <div className="pr-1 pl-1 mb-24">
      {/* Section Header */}
      <div className="flex items-center justify-center mt-12 w-full mb-6">
        <hr className="flex-grow border-gray-300" />
        <h2 className="px-6 text-2xl font-bold tracking-tight text-gray-800">
          LeetCode Progress
        </h2>
        <hr className="flex-grow border-gray-300" />
      </div>

      <p className="text-center text-gray-600 mb-16 max-w-2xl mx-auto">
        My journey through algorithmic problem-solving and competitive
        programming challenges 💻
      </p>

      {/* Two columns with a wide empty gap in the middle */}
      <div className="grid lg:grid-cols-2 gap-10 lg:gap-x-10 xl:gap-x-20">
        {/* Left: Wheel + Reel */}
        <div className="flex flex-col items-center gap-8 min-w-0">
          {/* Wheel scales with the column width */}
          <div className="relative w-2/5 aspect-square">
            <svg viewBox="0 0 200 200" className="w-full h-full transform -rotate-90">
              <circle
                cx="100"
                cy="100"
                r={radius}
                fill="none"
                stroke="#e5e7eb"
                strokeWidth={strokeWidth}
              />
              <CircularProgress strokeDasharray={easyBackgroundDash} color="#10b981" opacity={0.3} rotation={0} />
              <CircularProgress strokeDasharray={mediumBackgroundDash} color="#f59e0b" opacity={0.3} rotation={easyAngle} />
              <CircularProgress strokeDasharray={hardBackgroundDash} color="#ef4444" opacity={0.3} rotation={easyAngle + mediumAngle} />
              <CircularProgress strokeDasharray={easySolvedDash} color="#10b981" opacity={1} rotation={0} />
              <CircularProgress strokeDasharray={mediumSolvedDash} color="#f59e0b" opacity={1} rotation={easyAngle} />
              <CircularProgress strokeDasharray={hardSolvedDash} color="#ef4444" opacity={1} rotation={easyAngle + mediumAngle} />
            </svg>

            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <div className="text-3xl font-bold text-gray-800">{stats.solved}</div>
              <div className="text-sm text-gray-500">/{stats.total}</div>
              <div className="text-xs text-green-600 font-medium mt-1 flex items-center">
                <CheckCircle className="w-3 h-3 mr-1" />
                Solved
              </div>
            </div>
          </div>

          {/* Reel takes all remaining height, down to the bottom of the buttons */}
          <div className="relative w-full flex-1 min-h-[10rem]">
            <Reel />
          </div>
        </div>

        {/* Right: Stats + Buttons */}
        <div className="flex flex-col gap-5">
          {/* Problem Categories */}
          <div className={cardClass}>
            <h3 className={titleClass}>
              <Code className="w-4 h-4 mr-2" />
              Problem Categories
            </h3>

            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-2.5 h-2.5 bg-green-500 rounded-full"></div>
                  <span className="text-sm font-medium text-gray-700">Easy</span>
                </div>
                <div className="text-sm text-gray-600">
                  <span className="font-semibold text-green-600">{stats.easy.solved}</span>
                  <span className="text-gray-400"> / {stats.easy.total}</span>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-2.5 h-2.5 bg-yellow-500 rounded-full"></div>
                  <span className="text-sm font-medium text-gray-700">Medium</span>
                </div>
                <div className="text-sm text-gray-600">
                  <span className="font-semibold text-yellow-600">{stats.medium.solved}</span>
                  <span className="text-gray-400"> / {stats.medium.total}</span>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-2.5 h-2.5 bg-red-500 rounded-full"></div>
                  <span className="text-sm font-medium text-gray-700">Hard</span>
                </div>
                <div className="text-sm text-gray-600">
                  <span className="font-semibold text-red-600">{stats.hard.solved}</span>
                  <span className="text-gray-400"> / {stats.hard.total}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Performance */}
          <div className={cardClass}>
            <h3 className={titleClass}>
              <Trophy className="w-4 h-4 mr-2" />
              Performance
            </h3>

            <div className="space-y-2.5">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Acceptance Rate</span>
                <span className="text-sm font-semibold text-blue-600">{stats.acceptanceRate}%</span>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Total Submissions</span>
                <span className="text-sm font-semibold text-gray-700">{stats.submissions}</span>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Problems Solved</span>
                <span className="text-sm font-semibold text-green-600">{stats.solved}</span>
              </div>

              <div className="pt-2.5 border-t border-gray-100 text-center">
                <span className="text-sm font-semibold text-orange-500">
                  🧢 I have the official LeetCode Cap :)
                </span>
              </div>
            </div>
          </div>

          {/* Profile Links */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="https://leetcode.com/u/botronak07/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center space-x-1 px-6 py-3 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-lg transition-all duration-200 hover:from-orange-600 hover:to-red-600 hover:shadow-lg transform hover:-translate-y-0.5 font-medium"
            >
              <ExternalLink className="w-4 h-4" />
              <span>View LeetCode Profile</span>
            </a>

            <a
              href="https://github.com/07ronak/JS-DSA"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center space-x-1 px-6 py-3 bg-gradient-to-r from-gray-900 to-black text-white rounded-lg transition-all duration-200 hover:from-gray-900 hover:to-gray-800 hover:shadow-lg transform hover:-translate-y-0.5 font-medium"
            >
              <Github className="w-4 h-4" />
              <span>JavaScript DSA Repository</span>
            </a>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center mt-10 w-full">
        <hr className="flex-grow border-gray-300" />
      </div>
    </div>
  );
};

export default LeetCodeSection;