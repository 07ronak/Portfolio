import React from "react";

const Projects = () => {
  return (
    <div className="container mx-auto py-8" id="projects">
      {/* Top HR and Heading */}
      <div className="flex items-center justify-center mt-12 w-full mb-8">
        <hr className="flex-grow border-gray-300" />
        <h5 className="px-6 text-2xl font-bold tracking-tight text-gray-800">
          Deployed Projects
        </h5>
        <hr className="flex-grow border-gray-300" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
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
            <a href="https://github.com/07ronak/Game-Vault" target="_blank">
              <i className="fa-brands fa-github text-3xl"></i>
            </a>
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
            <a href="https://github.com/07ronak/Portfolio" target="_blank">
              <i className="fa-brands fa-github text-3xl"></i>
            </a>
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
              A full-stack project that allows users to filter resorts based on
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
              <span className="ml-2 text-sm text-gray-500 italic border border-gray-400 px-2 py-1 rounded">
                Note: link may take a few moments to load
              </span>
            </div>
          </div>
          <div className="px-6 pt-4 pb-2">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #Expessjs
            </span>
            <span className="inline-block bg-green-500 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #Nodejs
            </span>
            <span className="inline-block bg-lime-300 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #EJS
            </span>
            <span className="inline-block bg-green-300 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #MongoDB
            </span>
            <span className="inline-block bg-red-300 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #ORM
            </span>
            <span className="inline-block bg-yellow-300 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #javascript
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
            <a
              className="ml-auto"
              href="https://github.com/07ronak/MemoryGame1"
              target="_blank"
            >
              <i className="fa-brands fa-github text-3xl"></i>
            </a>
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
            <a
              href="https://github.com/07ronak/Simon-Says-Game"
              target="_blank"
            >
              <i className="fa-brands fa-github text-3xl"></i>
            </a>
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
