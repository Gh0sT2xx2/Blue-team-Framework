import { motion } from 'framer-motion';
import { Tool } from '@/data/sectionData';
import { Terminal, ExternalLink } from 'lucide-react';
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuTrigger,
} from "@/components/ui/context-menu";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

interface ToolCardProps {
  tool: Tool;
}

export const ToolCard = ({ tool }: ToolCardProps) => {
  const handleToolAction = (action: 'launch' | 'docs') => {
    const url = action === 'launch' ? tool.url : tool.docsUrl;
    if (url) {
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <ContextMenu>
      <ContextMenuTrigger>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <motion.div
                className="p-3 rounded border border-[#00FF00]/20 hover:bg-[#00FF00]/10 cursor-pointer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => tool.url && handleToolAction('launch')}
              >
                <div className="flex items-center gap-3">
                  <div className="relative flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-[#00FF00] animate-pulse" />
                    <Terminal className="w-4 h-4 text-[#00FF00]" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <span className="font-fira-code text-[#00FF00]">{tool.name}</span>
                      {tool.url && (
                        <ExternalLink className="w-3 h-3 text-[#00FF00]/50" />
                      )}
                    </div>
                    <p className="text-xs text-[#00FF00]/70">{tool.description}</p>
                  </div>
                </div>
              </motion.div>
            </TooltipTrigger>
            <TooltipContent className="bg-black/90 border-[#00FF00]/20">
              <p className="text-[#00FF00]">{tool.description}</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </ContextMenuTrigger>

      <ContextMenuContent className="bg-black/90 border-[#00FF00]/20">
        {tool.url && (
          <ContextMenuItem 
            className="text-[#00FF00] hover:bg-[#00FF00]/10 cursor-pointer"
            onClick={() => handleToolAction('launch')}
          >
            Launch Tool
          </ContextMenuItem>
        )}
        {tool.docsUrl && (
          <ContextMenuItem 
            className="text-[#00FF00] hover:bg-[#00FF00]/10 cursor-pointer"
            onClick={() => handleToolAction('docs')}
          >
            View Documentation
          </ContextMenuItem>
        )}
      </ContextMenuContent>
    </ContextMenu>
  );
};

export default ToolCard;