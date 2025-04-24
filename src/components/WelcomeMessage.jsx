import { useState, useEffect } from "react";

const WelcomeMessage = ({
  message = "159 million million million, was it?",
  duration = 4000,
}) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(false), duration);
    return () => clearTimeout(timer);
  }, [duration]);

  return (
    <>
      <div
        className={`fixed inset-0 flex items-center justify-center transition-opacity duration-500 ${
          isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        style={{ zIndex: 1000 }}
        aria-hidden={!isVisible}
      >
        <div className="absolute inset-0 bg-[hsla(197,87%,94%,1)]"></div>
        <div className="inline-block px-4">
          <span
            className="relative z-10 inline-block leading-normal font-light animate-typing md:text-3xl text-xl text-black opacity-70 italic overflow-hidden whitespace-nowrap ease-in-out"
            role="alert"
          >
            {message}
          </span>
        </div>
      </div>
    </>
  );
};

export default WelcomeMessage;
