import React, { useEffect, useState } from 'react';
import { Code2 } from 'lucide-react';

interface LoadingScreenProps {
  onComplete: () => void;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsComplete(true);
          setTimeout(onComplete, 500);
          return 100;
        }
        return prev + Math.random() * 15;
      });
    }, 100);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div className={`fixed inset-0 z-50 bg-black flex items-center justify-center transition-opacity duration-500 ${isComplete ? 'opacity-0' : 'opacity-100'}`}>
      <div className="text-center">
        <div className="relative mb-8">
          <Code2 className="h-16 w-16 text-primary-500 mx-auto animate-pulse-glow" />
          <div className="absolute inset-0 bg-primary-500 opacity-20 blur-xl animate-pulse"></div>
        </div>
        
        <h1 className="text-4xl font-bold gradient-text mb-4">Arzure</h1>
        
        <div className="w-64 h-2 bg-dark-800 rounded-full overflow-hidden mx-auto mb-4">
          <div 
            className="h-full bg-gradient-purple transition-all duration-300 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
        
        <p className="text-gray-400 text-sm">
          Loading<span className="loading-dots"></span>
        </p>
      </div>
    </div>
  );
};

export default LoadingScreen;