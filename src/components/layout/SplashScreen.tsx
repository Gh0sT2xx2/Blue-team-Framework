import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

interface SplashScreenProps {
  onFinish: () => void;
}

const SplashScreen = ({ onFinish }: SplashScreenProps) => {
  const [showTagline, setShowTagline] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowTagline(true);
    }, 1000);

    const finishTimer = setTimeout(() => {
      onFinish();
    }, 3000);

    return () => {
      clearTimeout(timer);
      clearTimeout(finishTimer);
    };
  }, [onFinish]);

  return (
    <motion.div
      className="fixed inset-0 bg-black flex items-center justify-center z-50"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="relative">
        <motion.h1
          className="text-[#00FF00] text-4xl md:text-6xl font-orbitron font-bold"
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{
            type: "spring",
            stiffness: 200,
            damping: 20,
            duration: 1
          }}
        >
          BLUE TEAM FRAMEWORK
        </motion.h1>

        <AnimatePresence>
          {showTagline && (
            <motion.p
              className="text-[#00FF00] text-xl mt-4 text-center font-orbitron"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Developed by: Diogo Lages
            </motion.p>
          )}
        </AnimatePresence>

        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {Array.from({ length: 20 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute text-[#00FF00] opacity-30"
              initial={{ y: -20, x: Math.random() * 100 }}
              animate={{ y: 1000 }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            >
              {Math.random() > 0.5 ? "0" : "1"}
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default SplashScreen;