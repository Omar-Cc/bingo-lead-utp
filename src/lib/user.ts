import { v4 as uuidv4 } from "uuid";

export interface UserData {
  userId: string;
  userName: string;
  carrera: string;
}

const USER_STORAGE_KEY = "bingo_user";

/**
 * Generate a unique user ID using UUID v4
 */
export function generateUserId(): string {
  return uuidv4();
}

/**
 * Save user data to localStorage
 */
export function saveUserData(data: UserData): void {
  if (typeof window !== "undefined") {
    localStorage.setItem(USER_STORAGE_KEY, JSON.stringify(data));
  }
}

/**
 * Get user data from localStorage
 */
export function getUserData(): UserData | null {
  if (typeof window === "undefined") {
    return null;
  }

  const data = localStorage.getItem(USER_STORAGE_KEY);
  if (!data) {
    return null;
  }

  try {
    return JSON.parse(data);
  } catch (err) {
    console.error("Error parsing user data:", err);
    return null;
  }
}

/**
 * Clear user data from localStorage
 */
export function clearUserData(): void {
  if (typeof window !== "undefined") {
    localStorage.removeItem(USER_STORAGE_KEY);
  }
}

/**
 * Check if user is registered
 */
export function isUserRegistered(): boolean {
  return getUserData() !== null;
}
