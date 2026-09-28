import { ExternalLink, Code, Trophy, CheckCircle, Github } from "lucide-react";

// Number of screenshots in public/ss (1.png, 2.png, ...)
const SS_COUNT = 17;
// Reel speed: seconds each image takes to pass by (higher = slower)
const SECONDS_PER_IMAGE = 8;

const images = Array.from({ length: SS_COUNT }, (_, i) => `/ss/${i + 1}.png`);

// Wheel geometry (in SVG units, viewBox is 200x200)
const R = 90;
const C = 2 * Math.PI * R;

// Fills its box and leaves some empty space on top
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
    easy: { solved: 276, total: 968 },
    medium: { solved: 429, total: 2121 },
    hard: { solved: 136, total: 979 },
    acceptanceRate: 74.67,
    submissions: 3613,
  };

  stats.solved = stats.easy.solved + stats.medium.solved + stats.hard.solved;
  stats.total = stats.easy.total + stats.medium.total + stats.hard.total;

  const levels = [
    { name: "Easy",   ...stats.easy,   color: "#10b981", dot: "bg-green-500",  text: "text-green-600" },
    { name: "Medium", ...stats.medium, color: "#f59e0b", dot: "bg-yellow-500", text: "text-yellow-600" },
    { name: "Hard",   ...stats.hard,   color: "#ef4444", dot: "bg-red-500",    text: "text-red-600" },
  ];

  // Where each section of the wheel starts (in degrees)
  let start = 0;
  levels.forEach((l) => {
    l.start = start;
    start += (l.total / stats.total) * 360;
  });

  const Arc = ({ value, start, color, opacity = 1 }) => (
    <circle
      cx="100"
      cy="100"
      r={R}
      fill="none"
      stroke={color}
      strokeWidth={10}
      strokeLinecap="round"
      opacity={opacity}
      strokeDasharray={`${(value / stats.total) * C} ${C}`}
      style={{ transform: `rotate(${start - 180}deg)`, transformOrigin: "100px 100px" }}
    />
  );

  const cardClass = "bg-white border border-gray-200 rounded-lg p-5 shadow-sm";
  const titleClass = "text-base font-semibold text-gray-800 mb-3 flex items-center";

  return (
    <div className="px-1 mb-24">
      {/* Section Header */}
      <div className="flex items-center mt-12 mb-6">
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
            <svg viewBox="0 0 200 200" className="w-full h-full">
              <circle cx="100" cy="100" r={R} fill="none" stroke="#e5e7eb" strokeWidth={10} />
              {levels.map((l) => (
                <Arc key={`bg-${l.name}`} value={l.total} start={l.start} color={l.color} opacity={0.3} />
              ))}
              {levels.map((l) => (
                <Arc key={l.name} value={l.solved} start={l.start} color={l.color} />
              ))}
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
              {levels.map((l) => (
                <div key={l.name} className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className={`w-2.5 h-2.5 rounded-full ${l.dot}`}></div>
                    <span className="text-sm font-medium text-gray-700">{l.name}</span>
                  </div>
                  <div className="text-sm">
                    <span className={`font-semibold ${l.text}`}>{l.solved}</span>
                    <span className="text-gray-400"> / {l.total}</span>
                  </div>
                </div>
              ))}
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
              className="flex items-center justify-center space-x-1 px-6 py-3 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-lg transition-all duration-200 hover:from-orange-600 hover:to-red-600 hover:shadow-lg hover:-translate-y-0.5 font-medium"
            >
              <ExternalLink className="w-4 h-4" />
              <span>View LeetCode Profile</span>
            </a>

            <a
              href="https://github.com/07ronak/JS-DSA"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center space-x-1 px-6 py-3 bg-gradient-to-r from-gray-900 to-black text-white rounded-lg transition-all duration-200 hover:to-gray-800 hover:shadow-lg hover:-translate-y-0.5 font-medium"
            >
              <Github className="w-4 h-4" />
              <span>JavaScript DSA Repository</span>
            </a>
          </div>
        </div>
      </div>

      <hr className="mt-10 border-gray-300" />
    </div>
  );
};

export default LeetCodeSection;