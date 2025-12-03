/**
 * Firebase client configuration
 * These values should be set in environment variables
 */
function getFirebaseConfig() {
  const apiKey = process.env.NEXT_PUBLIC_FIREBASE_API_KEY;
  const projectId = process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID;
  const authDomain = process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN;

  if (!apiKey) {
    throw new Error(
      'NEXT_PUBLIC_FIREBASE_API_KEY is required. Please set it in your .env file. ' +
        'You can find it in Firebase Console > Project Settings > General > Your apps > Web app config',
    );
  }

  if (!projectId) {
    throw new Error('NEXT_PUBLIC_FIREBASE_PROJECT_ID is required. Please set it in your .env file.');
  }

  // Auto-generate auth domain if not provided
  const finalAuthDomain = authDomain || `${projectId}.firebaseapp.com`;

  return {
    apiKey,
    authDomain: finalAuthDomain,
    projectId,
  };
}

export const firebaseConfig = getFirebaseConfig();
