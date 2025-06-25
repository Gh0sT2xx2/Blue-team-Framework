import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, Shield } from 'lucide-react';
import { Tool } from '@/data/sectionData';
import ToolCard from '../tools/ToolCard';

interface SectionProps {
  title: string;
  tools: Tool[];
}

export const Section = ({ title, tools }: SectionProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="rounded-lg border border-[#00FF00]/20 backdrop-blur-sm overflow-hidden">
      <motion.button
        className="w-full px-4 py-3 flex items-center justify-between text-left hover:bg-[#00FF00]/10"
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.01 }}
      >
        <div className="flex items-center gap-3">
          <Shield className="w-5 h-5 text-[#00FF00]" />
          <h2 className="text-xl font-orbitron font-semibold text-[#00FF00]">
            {title}
          </h2>
        </div>
        <motion.div
          animate={{ rotate: isOpen ? 90 : 0 }}
          transition={{ duration: 0.2 }}
          className="text-[#00FF00]"
        >
          <ChevronRight />
        </motion.div>
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: "auto" }}
            exit={{ height: 0 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 20,
              duration: 0.3
            }}
            className="overflow-hidden"
          >
            <div className="p-4 grid gap-3">
              {tools.map((tool) => (
                <ToolCard key={tool.id} tool={tool} />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Section;