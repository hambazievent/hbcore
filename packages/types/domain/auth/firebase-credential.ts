import type { FirebaseUid } from '../../src/domain-ids.js';
import type { AuthCredential } from './credential.js';
import { AuthProvider } from './provider.js';

/**
 * Firebase-specific authentication credential
 */
export interface FirebaseAuthCredential extends AuthCredential {
  provider: AuthProvider.FIREBASE;
  /** Firebase UID (unique identifier from Firebase) */
  firebaseUid: FirebaseUid;
}
