import { AuthProvider } from './provider.js';

/**
 * Base interface for authentication credentials
 */
export interface AuthCredential {
  /** User ID this credential belongs to */
  userId: number;
  /** Authentication provider */
  provider: AuthProvider;
}
