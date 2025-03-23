"use client";

import { useState } from 'react';
import { RadarDisplay } from '@/components/radar-display';
import { ControlPanel } from '@/components/control-panel';
import { SettingsPanel } from '@/components/settings-panel';
import { ConnectionStatus, ViewMode, Unit } from '@/lib/types';

export default function Home() {
  const [connectionStatus, setConnectionStatus] = useState<ConnectionStatus>('disconnected');
  const [viewMode, setViewMode] = useState<ViewMode>('realtime');
  const [unit, setUnit] = useState<Unit>('cm');
  const [ipAddress, setIpAddress] = useState<string>('');

  return (
    <main className="min-h-screen p-4 md:p-8 radar-grid">
      <div className="max-w-7xl mx-auto space-y-8">
        <header className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <h1 className="text-2xl md:text-4xl font-bold text-primary">
              ESP32 Radar Visualizer
            </h1>
            <p className="text-muted-foreground">
              Real-time ultrasonic sensor visualization
            </p>
          </div>
          <SettingsPanel
            unit={unit}
            setUnit={setUnit}
            ipAddress={ipAddress}
            setIpAddress={setIpAddress}
            connectionStatus={connectionStatus}
            setConnectionStatus={setConnectionStatus}
          />
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-9">
            <div className="relative aspect-square w-full max-w-3xl mx-auto">
              <RadarDisplay
                viewMode={viewMode}
                unit={unit}
                connectionStatus={connectionStatus}
              />
            </div>
          </div>
          
          <div className="lg:col-span-3">
            <ControlPanel
              viewMode={viewMode}
              setViewMode={setViewMode}
              connectionStatus={connectionStatus}
            />
          </div>
        </div>
      </div>
    </main>
  );
}