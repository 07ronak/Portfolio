import React from "react";
import { Heart, Coffee } from "lucide-react";

const StylishFooter = () => {
  return (
    <footer className="border-t border-gray-300 text-center py-7 mt-11">
      <div className="container mx-auto px-4">
        <p className="text-lg font-semibold flex justify-center items-center gap-2">
          Made with
          <span className="flex items-center gap-1 font-bold text-rose-500">
            <Heart className="w-5 h-5 animate-pulse" />
            Love
          </span>
          and
          <span className="flex items-center gap-1 font-bold text-[#794028]">
            <Coffee className="w-5 h-5 animate-bounce" />
            Coffee
          </span>
        </p>

        <p className="text-sm text-gray-600 mt-4">
          © 2025 Ronak Hingonia. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default StylishFooter;
