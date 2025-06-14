import React from "react";

const LoadingScreen: React.FC = () => {
  return (
    <div className="fixed inset-0 z-90 flex flex-col items-center justify-center bg-gradient-to-b from-[#0f172a] via-[#1e293b] to-black text-white">
      <div className="w-24 h-24 rounded-full bg-white/10 border-2 border-white/20 flex items-center justify-center shadow-md">
        <span className="text-xl font-semibold">R</span>
      </div>

      <p className="mt-4 text-lg tracking-widest">Rashmi</p>

      <div className="mt-6 flex space-x-2">
        {Array.from({ length: 5 }).map((_, i) => (
          <div
            key={i}
            className="w-2 h-2 rounded-full bg-white animate-bounce"
            style={{ animationDelay: `${i * 0.1}s` }}
          />
        ))}
      </div>
    </div>
  );
};

export default LoadingScreen;
