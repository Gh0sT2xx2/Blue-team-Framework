import { useState, useEffect } from 'react';
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { queryClient } from "./lib/queryClient";
import SplashScreen from '@/components/layout/SplashScreen';
import Home from '@/pages/Home';

function App() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    // Play typing sound effect
    const audio = new Audio('https://www.soundjay.com/mechanical/sounds/typewriter-key-1.mp3');
    audio.play().catch(() => {
      // Ignore audio play errors
    });
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      {showSplash ? (
        <SplashScreen onFinish={() => setShowSplash(false)} />
      ) : (
        <Home />
      )}
      <Toaster />
    </QueryClientProvider>
  );
}

export default App;
