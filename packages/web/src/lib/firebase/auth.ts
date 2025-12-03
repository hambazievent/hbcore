import { type FirebaseApp, getApps, initializeApp } from 'firebase/app';
import { type Auth, GoogleAuthProvider, getAuth } from 'firebase/auth';
import { getFirebaseConfig } from './config';

/**
 * Get or initialize Firebase app instance
 * Uses singleton pattern to ensure only one app instance exists
 */
function getFirebaseApp(): FirebaseApp {
  const apps = getApps();
  if (apps.length > 0) {
    return apps[0];
  }
  return initializeApp(getFirebaseConfig());
}

let authInstance: Auth | null = null;

/**
 * Get Firebase Auth instance
 * Lazily initializes auth on first access
 */
function getFirebaseAuth(): Auth {
  if (!authInstance) {
    const app = getFirebaseApp();
    authInstance = getAuth(app);
  }
  return authInstance;
}

// Export singleton instances
// Using a getter to ensure lazy initialization
export const auth = new Proxy({} as Auth, {
  get(_target, prop) {
    return getFirebaseAuth()[prop as keyof Auth];
  },
});

// Google Auth Provider
export const googleAuthProvider = new GoogleAuthProvider();
