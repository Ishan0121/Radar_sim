"use client";

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ConnectionStatus, ViewMode, Unit } from '@/lib/types';

interface RadarDisplayProps {
  viewMode: ViewMode;
  unit: Unit;
  connectionStatus: ConnectionStatus;
}

export function RadarDisplay({ viewMode, unit, connectionStatus }: RadarDisplayProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  return (
    <div className="relative w-full h-full rounded-full border border-primary/30 overflow-hidden neon-border">
      <div className="radar-sweep" />
      <canvas ref={canvasRef} className="w-full h-full" />
      
      {connectionStatus === 'disconnected' && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="absolute inset-0 flex items-center justify-center bg-background/80"
        >
          <p className="text-primary text-lg">Not Connected</p>
        </motion.div>
      )}
      
      {connectionStatus === 'connecting' && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="absolute inset-0 flex items-center justify-center bg-background/80"
        >
          <p className="text-primary text-lg">Connecting...</p>
        </motion.div>
      )}
    </div>
  );
}