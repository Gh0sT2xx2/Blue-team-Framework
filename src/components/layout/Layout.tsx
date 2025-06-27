import { ReactNode, useState } from 'react';
import { motion } from 'framer-motion';
import { Github } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Particles from './Particles';
import BackgroundStyler from './BackgroundStyler';

interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  const [bgStyle, setBgStyle] = useState('minimal');

  return (
    <div className={`min-h-screen bg-black ${bgStyle}`}>
      <Particles />

      <header className="border-b border-[#00FF00]/20 backdrop-blur-sm bg-black/50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="text-[#00FF00] text-2xl font-orbitron font-bold">
            BLUE TEAM FRAMEWORK - Developed By An0ns4i
          </h1>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_300px] gap-6">
          {children}
        </div>
      </main>
    </div>
  );
};

export default Layout;
