import { useState } from 'react';
import { motion } from 'framer-motion';
import { Paintbrush } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const backgroundStyles = [
  { id: 'matrix', name: 'Matrix Rain' },
  { id: 'hex', name: 'Hex Grid' },
  { id: 'circuit', name: 'Circuit Board' },
  { id: 'minimal', name: 'Minimal Dark' }
];

interface BackgroundStylerProps {
  onStyleChange: (style: string) => void;
}

export const BackgroundStyler = ({ onStyleChange }: BackgroundStylerProps) => {
  const [currentStyle, setCurrentStyle] = useState('minimal');

  const handleStyleChange = (style: string) => {
    setCurrentStyle(style);
    onStyleChange(style);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <motion.button
          whileTap={{ scale: 0.95 }}
          className="p-2 rounded-full hover:bg-[#00FF00]/10"
        >
          <Paintbrush className="w-5 h-5 text-[#00FF00]" />
        </motion.button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="bg-black/90 border-[#00FF00]/20">
        {backgroundStyles.map((style) => (
          <DropdownMenuItem
            key={style.id}
            className={`text-[#00FF00] hover:bg-[#00FF00]/10 cursor-pointer ${
              currentStyle === style.id ? 'bg-[#00FF00]/5' : ''
            }`}
            onClick={() => handleStyleChange(style.id)}
          >
            {style.name}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default BackgroundStyler;
