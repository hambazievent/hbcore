import type { UserId } from '../../src/domain-ids.js';
import { AuthProvider } from './provider.js';

/**
 * Base interface for authentication credentials
 */
export interface AuthCredential {
  /** User ID this credential belongs to */
  userId: UserId;
  /** Authentication provider */
  provider: AuthProvider;
}
