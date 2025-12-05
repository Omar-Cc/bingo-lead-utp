"use client";

import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { Connection } from "./types";

interface BingoStore {
  connections: Connection[];
  currentConnection: Connection | null;
  activeMission: number | null;
  addConnection: (connection: Connection) => void;
  validateConnection: (id: string) => void;
  clearCurrentConnection: () => void;
  setActiveMission: (index: number | null) => void;
  isUserIdUsed: (userId: string) => boolean;
}

export const useBingoStore = create<BingoStore>()(
  persist(
    (set, get) => ({
      connections: [],
      currentConnection: null,
      activeMission: null,

      addConnection: (connection: Connection) => {
        console.log("➕ Adding connection:", connection);
        set((state) => ({
          connections: [...state.connections, connection],
          currentConnection: connection,
        }));
      },

      validateConnection: (id: string) => {
        console.log("🔵 Before validation - connections:", get().connections);
        console.log("🔵 Validating connection ID:", id);

        set((state) => {
          const updated = state.connections.map((conn) =>
            conn.id === id
              ? { ...conn, validated: true, validatedAt: Date.now() }
              : conn
          );
          console.log("🟢 After validation - connections:", updated);
          return {
            connections: updated,
            currentConnection: null,
            activeMission: null,
          };
        });

        console.log("✅ Validation complete, currentConnection cleared");
      },

      clearCurrentConnection: () => {
        set({ currentConnection: null });
      },

      setActiveMission: (index: number | null) => {
        console.log("🎯 Setting active mission:", index);
        set({ activeMission: index });
      },

      isUserIdUsed: (userId: string) => {
        const used = get().connections.some(
          (conn) => conn.scannedUserId === userId
        );
        console.log(`🔍 Is userId ${userId} used?`, used);
        return used;
      },
    }),
    {
      name: "bingo-lead-utp-storage",
      onRehydrateStorage: () => (state) => {
        console.log("💾 Store rehydrated:", state);
      },
    }
  )
);
