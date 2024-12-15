import { useState, useEffect } from "react";

const WelcomeMessage = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 4000);

    return () => clearTimeout(timer); // Cleanup on component unmount
  }, []);

  return (
    <div
      className={`fixed inset-0 flex items-center justify-center transition-opacity duration-500 ${
        isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
      style={{ zIndex: 1000 }}
    >
      <div
        className="absolute inset-0 bg-[hsla(197,87%,94%,1)]
"
      ></div>
      <div className="inline-block">
        <span className="relative z-10 inline-block leading-normal font-light animate-typing text-3xl text-black opacity-70 italic overflow-hidden whitespace-nowrap ease-in-out">
          159 million million million, was it?
        </span>
      </div>
    </div>
  );
};

export default WelcomeMessage;
