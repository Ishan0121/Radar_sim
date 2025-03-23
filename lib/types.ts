export interface RadarData {
  angle: number;
  distance: number;
  timestamp: number;
}

export interface WebSocketMessage {
  angle: number;
  distance: number;
}

export type ConnectionStatus = 'disconnected' | 'connecting' | 'connected';

export type ViewMode = 'realtime' | 'historical';

export type Unit = 'cm' | 'inch';