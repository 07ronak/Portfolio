import React from "react";
import { ExternalLink } from "lucide-react";

const Projects = () => {
  return (
    <div className="container mx-auto py-8" id="projects">
      {/* Top HR and Heading */}
      <div className="flex items-center justify-center mt-12 w-full mb-8">
        <hr className="flex-grow border-gray-300" />
        <h5 className="px-6 text-2xl font-bold tracking-tight text-gray-800">
          Personal Projects
        </h5>
        <hr className="flex-grow border-gray-300" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {/* Book It */}
        <div className="rounded overflow-hidden shadow-lg">
          <a
            href="https://book-it-pearl-ten.vercel.app/experiences"
            target="_blank"
          >
            <img className="w-full" src="/bookit.png" alt="bookit image" />
          </a>
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2 text-gray-700">Book It</div>
            <p className="text-gray-700 text-base mb-6">
              A Production-Grade Full Stack experience booking application with
              secure payment flow, real-time availability tracking, and promo
              code support.
            </p>
            <div className="flex items-center justify-between">
              <a href="https://github.com/07ronak/Game-Vault" target="_blank">
                <i className="fa-brands fa-github text-3xl"></i>
              </a>
              <a
                href="https://book-it-pearl-ten.vercel.app/experiences"
                target="_blank"
                className="ml-2 text-sm text-gray-500 border border-gray-400 px-2 py-1 rounded flex items-center gap-1"
              >
                <ExternalLink size={16} />
                Live Demo
              </a>
            </div>
          </div>
          <div className="px-6 pt-4 pb-2">
            <span className="inline-block bg-black rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">
              #Next.js
            </span>
            <span className="inline-block bg-blue-700 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">
              #TypeScript
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #Node + Express.js
            </span>
            <span className="inline-block bg-blue-300 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #tailwind
            </span>
            <span className="inline-block bg-[#00E599] rounded-full px-3 py-1 text-sm font-semibold text-black mr-2 mb-2">
              #Neon.tech
            </span>
            <span className="inline-block bg-[#336791] rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">
              #Postgres
            </span>
            <span className="inline-block bg-[#2D3748] rounded-full px-3 py-1 text-sm font-semibold text-[#56BFA1] mr-2 mb-2">
              #Prisma
            </span>
          </div>
        </div>
        {/* botCam */}
        <div className="rounded overflow-hidden shadow-lg">
          <a href="https://github.com/07ronak/botCam" target="_blank">
            <img
              className="w-full h-auto object-cover"
              src="/botCam.png"
              alt="botCam"
              style={{ aspectRatio: "1895/893" }}
            />
          </a>
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2 text-gray-700">botCam</div>
            <p className="text-gray-700 text-base mb-6">
              <u>Convert your phone camera into a wireless WebCam for PC </u>
              Engineered using WebRTC over UDP for secure peer-to-peer
              connection with high-quality video streaming. Features a secure
              WebSocket signaling server built in Node.js for seamless device
              discovery and connection setup.
            </p>
            <div className="flex items-center justify-between">
              <a href="https://github.com/07ronak/botCam" target="_blank">
                <i className="fa-brands fa-github text-3xl"></i>
              </a>
              <div className="flex gap-2 flex-wrap">
                <a
                  href="https://drive.google.com/file/d/1jfcuFZR173rTwtnF3kft4nKyfTsL5R1M/view?usp=sharing"
                  target="_blank"
                  className="text-xs text-gray-500 italic border border-gray-400 px-2 py-1 rounded flex items-center gap-1"
                >
                  <ExternalLink size={12} />
                  Demo.mp4
                </a>
                <a
                  href="https://drive.google.com/file/d/16SYci-jLbIGVZU8-GxztiMKoBJg4I2H-/view?usp=drive_link"
                  target="_blank"
                  className="text-xs text-gray-500 italic border border-gray-400 px-2 py-1 rounded flex items-center gap-1"
                >
                  <ExternalLink size={12} />
                  How-To-Use-Guide
                </a>
                <a
                  href="https://drive.google.com/file/d/1RpqZlUHNNrSAZe9hBbw8KgeZnfBDCSS9/view?usp=drive_link"
                  target="_blank"
                  className="text-xs text-gray-500 italic border border-gray-400 px-2 py-1 rounded flex items-center gap-1"
                >
                  <ExternalLink size={12} />
                  Working flow
                </a>
              </div>
            </div>
          </div>
          <div className="px-6 pt-4 pb-2">
            <span className="inline-block bg-orange-500 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #WebRTC
            </span>
            <span className="inline-block bg-green-600 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #Node.js
            </span>
            <span className="inline-block bg-purple-600 rounded-full px-3 py-1 text-sm font-semibold text-black mr-2 mb-2">
              #WebSocket
            </span>
            <span className="inline-block bg-red-500 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">
              #Google STUN
            </span>
            <span className="inline-block bg-indigo-600 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">
              #P2P
            </span>
          </div>
        </div>
        {/* YouTube Clone */}
        <div className="rounded overflow-hidden shadow-lg">
          <a
            href="https://yt-web-client-368875372157.us-central1.run.app/"
            target="_blank"
          >
            <img
              className="w-full h-auto object-contain"
              src="/youtubelogo.svg"
              alt="YouTube Clone"
              style={{ aspectRatio: "1895/893" }}
            />
          </a>
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2 text-gray-700">
              YouTube Clone
            </div>
            <p className="text-gray-700 text-base mb-6">
              A serverless video sharing platform built on Google Cloud Platform
              that enables authenticated users to upload videos, automatically
              processes them to 360p resolution, and allows public streaming
              without using YouTube APIs directly.
            </p>
            <div className="flex items-center justify-between">
              <a
                href="https://github.com/07ronak/YouTube-clone"
                target="_blank"
              >
                <i className="fa-brands fa-github text-3xl"></i>
              </a>
              <div className="flex gap-2">
                <a
                  href="https://drive.google.com/file/d/15PsML1ijhhbY9Id2rCesrg2cuUyEHCOc/view"
                  target="_blank"
                  className="ml-2 text-sm text-gray-500 italic border border-gray-400 px-2 py-1 rounded flex items-center gap-1"
                >
                  <ExternalLink size={16} />
                  Architecture Dataflow
                </a>
                <a
                  href="https://yt-web-client-368875372157.us-central1.run.app/"
                  target="_blank"
                  className="ml-2 text-sm text-gray-500 border border-gray-400 px-2 py-1 rounded flex items-center gap-1"
                >
                  <ExternalLink size={16} />
                  Live Demo
                </a>
              </div>
            </div>
          </div>
          <div className="px-6 pt-4 pb-2">
            <span className="inline-block bg-black rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">
              #Next.js
            </span>
            <span className="inline-block bg-yellow-500 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #Firebase
            </span>
            <span className="inline-block bg-blue-500 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">
              #GCP
            </span>
            <span className="inline-block bg-blue-600 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">
              #Docker
            </span>
            <span className="inline-block bg-blue-700 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">
              #TypeScript
            </span>
          </div>
        </div>
        {/* GameVault */}
        <div className="rounded overflow-hidden shadow-lg">
          <a href="https://game-vault-jet.vercel.app/" target="_blank">
            <img
              className="w-full"
              src="/GameVault.png"
              alt="gamevault image"
            />
          </a>
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2 text-gray-700">
              GameVault
            </div>
            <p className="text-gray-700 text-base mb-6">
              A comprehensive game hub allowing users to explore detailed game
              information. Built with the RAWG.io API, the platform offers
              advanced filtering options to sort games by various criteria.
            </p>
            <div className="flex items-center justify-between">
              <a href="https://github.com/07ronak/Game-Vault" target="_blank">
                <i className="fa-brands fa-github text-3xl"></i>
              </a>
              <a
                href="https://game-vault-jet.vercel.app/"
                target="_blank"
                className="ml-2 text-sm text-gray-500 border border-gray-400 px-2 py-1 rounded flex items-center gap-1"
              >
                <ExternalLink size={16} />
                Live Demo
              </a>
            </div>
          </div>
          <div className="px-6 pt-4 pb-2">
            <span className="inline-block bg-[#61DBFB] rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #React
            </span>
            <span className="inline-block bg-teal-400 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #Chakra UI
            </span>
            <span className="inline-block bg-purple-500 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #Bootstrap
            </span>
          </div>
        </div>

        {/* Portfolio Page */}
        <div className="rounded overflow-hidden shadow-lg">
          <a href="" target="_blank">
            <img className="w-full" src="/Portfolio.png" alt="Portfolio" />
          </a>
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2 text-gray-700">
              Portfolio Page
            </div>
            <p className="text-gray-700 text-base mb-6">
              A sleek portfolio highlighting my current work, the tools I use
              for web development, recently deployed projects, and seamless
              access to my social media links.
            </p>
            <div className="flex items-center justify-between">
              <a href="https://github.com/07ronak/Portfolio" target="_blank">
                <i className="fa-brands fa-github text-3xl"></i>
              </a>
              <span className="ml-2 text-sm text-green-600 italic border border-green-600 px-2 py-1 rounded flex items-center gap-1">
                <ExternalLink size={16} />
                You are already here :)
              </span>
            </div>
          </div>
          <div className="px-6 pt-4 pb-2">
            <span className="inline-block bg-[#F4911E] rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #Astro
            </span>
            <span className="inline-block bg-blue-300 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #tailwind
            </span>
            <span className="inline-block bg-yellow-300 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #javascript
            </span>
            <span className="inline-block bg-black rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">
              #Search Engine Optimization
            </span>
          </div>
        </div>

        {/* Airbnb Clone */}
        <div className="rounded overflow-hidden shadow-lg">
          <a
            href="https://airbnb-clone-1-za17.onrender.com/listing"
            target="_blank"
          >
            <img className="w-full" src="/Airbnb.png" alt="Airbnb clone" />
          </a>
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2 text-gray-700">
              Airbnb Clone
            </div>
            <p className="text-gray-700 text-base mb-6">
              A FS project that allows users to filter resorts based on
              prominent features and view details like price and location on an
              interactive map. It uses GraphHopper's geocoding for location
              services and MongoDB Atlas for data storage. Users can log in,
              sign up, leave reviews or create one. Owners can delete one or
              edit details.
            </p>
            <div className="flex items-center justify-between">
              <a href="https://github.com/07ronak/AirBNB-Clone" target="_blank">
                <i className="fa-brands fa-github text-3xl"></i>
              </a>
              <div className="flex gap-1">
                <span className="ml-2 text-sm text-gray-500 italic border border-gray-400 px-2 py-1 rounded">
                  Note: link may take a few moments to load
                </span>
                <a
                  href="https://airbnb-clone-1-za17.onrender.com/listing"
                  target="_blank"
                  className="ml-2 text-sm text-gray-500 border border-gray-400 px-2 py-1 rounded flex items-center gap-1"
                >
                  <ExternalLink size={16} />
                  Live Demo
                </a>
              </div>
            </div>
          </div>
          <div className="px-6 pt-4 pb-2">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #Expessjs
            </span>
            <span className="inline-block bg-lime-300 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #EJS
            </span>
            <span className="inline-block bg-green-300 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #MongoDB
            </span>
            <span className="inline-block bg-yellow-300 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #javascript
            </span>
            <span className="inline-block bg-green-600 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">
              #MAP Services
            </span>
          </div>
        </div>

        {/* Memory Game */}
        <div className="rounded overflow-hidden shadow-lg">
          <a href="https://memento-edd64.web.app/" target="_blank">
            <img className="w-full" src="/Memento.png" alt="Memory Game" />
          </a>
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2 text-gray-700">
              Memory Game
            </div>
            <p className="text-gray-700 text-base mb-6">
              This game features 16 upside-down cards that players need to match
              into 8 pairs to win. Designed as a Progressive Web App (PWA), it
              offers offline functionality and is deployed on Firebase for
              seamless access and performance.
            </p>
            <div className="flex items-center justify-between">
              <a
                className=""
                href="https://github.com/07ronak/MemoryGame1"
                target="_blank"
              >
                <i className="fa-brands fa-github text-3xl"></i>
              </a>
              <a
                href="https://memento-edd64.web.app/"
                target="_blank"
                className="ml-2 text-sm text-gray-500 border border-gray-400 px-2 py-1 rounded flex items-center gap-1"
              >
                <ExternalLink size={16} />
                Live Demo
              </a>
            </div>
          </div>
          <div className="px-6 pt-4 pb-2">
            <span className="inline-block bg-[#61DBFB] rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #React
            </span>
            <span className="inline-block bg-red-500 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #Firebase
            </span>
            <span className="inline-block bg-blue-800 rounded-full px-3 py-1 text-sm font-semibold text-gray-200 mr-2 mb-2">
              #PWA
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #mini-project
            </span>
          </div>
        </div>

        {/* Simon Says Game */}
        <div className="rounded overflow-hidden shadow-lg">
          <a
            href="https://simon-says-game-ecru-alpha.vercel.app/"
            target="_blank"
          >
            <img
              className="w-full object-fill"
              src="/Simon.png"
              alt="Simon game"
            />
          </a>
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2 text-gray-700">
              Simon Says Game
            </div>
            <p className="text-gray-700 text-base mb-6">
              After the game starts, a random card flashes, and you need to
              repeat the sequence shown. With each new card, the sequence gets
              longer, and you must remember all the previous cards plus the new
              one.
            </p>
            <div className="flex items-center justify-between">
              <a
                href="https://github.com/07ronak/Simon-Says-Game"
                target="_blank"
              >
                <i className="fa-brands fa-github text-3xl"></i>
              </a>
              <a
                href="https://simon-says-game-ecru-alpha.vercel.app/"
                target="_blank"
                className="ml-2 text-sm text-gray-500 border border-gray-400 px-2 py-1 rounded flex items-center gap-1"
              >
                <ExternalLink size={16} />
                Live Demo
              </a>
            </div>
          </div>
          <div className="px-6 pt-4 pb-2">
            <span className="inline-block bg-yellow-300 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #javascript
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #mini-project
            </span>
          </div>
        </div>
      </div>

      {/* Bottom HR */}
      <div className="flex items-center justify-center mt-6 w-full">
        <hr className="flex-grow border-gray-300" />
      </div>
    </div>
  );
};

export default Projects;
