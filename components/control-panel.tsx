"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { Play, Pause, RotateCcw, History, Timer } from "lucide-react";
import { ConnectionStatus, ViewMode } from '@/lib/types';

interface ControlPanelProps {
  viewMode: ViewMode;
  setViewMode: (mode: ViewMode) => void;
  connectionStatus: ConnectionStatus;
}

export function ControlPanel({ viewMode, setViewMode, connectionStatus }: ControlPanelProps) {
  const isConnected = connectionStatus === 'connected';

  return (
    <Card className="p-4 space-y-4">
      <h2 className="text-lg font-bold">Controls</h2>
      
      <div className="space-y-4">
        <div className="space-y-2">
          <p className="text-sm text-muted-foreground">Scan Control</p>
          <div className="flex gap-2">
            <Button
              variant="outline"
              size="icon"
              disabled={!isConnected}
            >
              <Play className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              disabled={!isConnected}
            >
              <Pause className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              disabled={!isConnected}
            >
              <RotateCcw className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <div className="space-y-2">
          <p className="text-sm text-muted-foreground">View Mode</p>
          <ToggleGroup type="single" value={viewMode} onValueChange={(value: ViewMode) => value && setViewMode(value)}>
            <ToggleGroupItem value="realtime" disabled={!isConnected}>
              <Timer className="h-4 w-4 mr-2" />
              Real-time
            </ToggleGroupItem>
            <ToggleGroupItem value="historical" disabled={!isConnected}>
              <History className="h-4 w-4 mr-2" />
              Historical
            </ToggleGroupItem>
          </ToggleGroup>
        </div>
      </div>
    </Card>
  );
}