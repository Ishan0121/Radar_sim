"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Wifi, WifiOff } from "lucide-react";
import { ConnectionStatus, Unit } from '@/lib/types';

interface SettingsPanelProps {
  unit: Unit;
  setUnit: (unit: Unit) => void;
  ipAddress: string;
  setIpAddress: (ip: string) => void;
  connectionStatus: ConnectionStatus;
  setConnectionStatus: (status: ConnectionStatus) => void;
}

export function SettingsPanel({
  unit,
  setUnit,
  ipAddress,
  setIpAddress,
  connectionStatus,
  setConnectionStatus,
}: SettingsPanelProps) {
  const handleConnect = () => {
    if (connectionStatus === 'connected') {
      setConnectionStatus('disconnected');
    } else {
      setConnectionStatus('connecting');
      // Simulating connection delay
      setTimeout(() => setConnectionStatus('connected'), 1500);
    }
  };

  return (
    <Card className="p-4 w-full md:w-auto">
      <div className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="ip-address">ESP32 IP Address</Label>
          <div className="flex gap-2">
            <Input
              id="ip-address"
              value={ipAddress}
              onChange={(e) => setIpAddress(e.target.value)}
              placeholder="192.168.1.100"
              disabled={connectionStatus === 'connected'}
            />
            <Button
              variant={connectionStatus === 'connected' ? "destructive" : "default"}
              onClick={handleConnect}
            >
              {connectionStatus === 'connected' ? (
                <>
                  <WifiOff className="h-4 w-4 mr-2" />
                  Disconnect
                </>
              ) : (
                <>
                  <Wifi className="h-4 w-4 mr-2" />
                  Connect
                </>
              )}
            </Button>
          </div>
        </div>

        <div className="space-y-2">
          <Label>Unit</Label>
          <RadioGroup value={unit} onValueChange={(value: Unit) => setUnit(value)}>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="cm" id="cm" />
              <Label htmlFor="cm">Centimeters</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="inch" id="inch" />
              <Label htmlFor="inch">Inches</Label>
            </div>
          </RadioGroup>
        </div>
      </div>
    </Card>
  );
}