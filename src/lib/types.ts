export interface Connection {
  id: string;
  scannedUserId: string;
  scannedUserName: string;
  scanStartTime: number;
  question: string;
  validated: boolean;
  validatedAt?: number;
  missionIndex?: number; // Which bingo card slot this connection fills
}

export interface BingoState {
  connections: Connection[];
  currentConnection: Connection | null;
  activeMission: number | null; // Index of the currently active mission
  addConnection: (connection: Connection) => void;
  validateConnection: (id: string) => void;
  clearCurrentConnection: () => void;
  setActiveMission: (index: number | null) => void;
  isUserIdUsed: (userId: string) => boolean;
}
