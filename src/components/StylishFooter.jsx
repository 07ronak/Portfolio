import React from "react";
import { Heart } from "lucide-react";

const StylishFooter = () => {
  return (
    <footer className="border-t border-gray-300 text-center py-8 mt-16">
      <div className="container mx-auto px-4">
        <p className="text-lg font-semibold mb-2">
          Made with &nbsp;
          <span className="text-xl font-bold bg-gradient-to-r from-pink-500 to-purple-500 text-transparent bg-clip-text">
            gulabi dil gulabi dil
          </span>
        </p>

        <p className="text-sm text-gray-600 mt-4">
          © 2024 Ronak Hingonia. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default StylishFooter;
