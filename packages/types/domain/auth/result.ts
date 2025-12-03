import type { User, UserInfo } from '../user.js';

/**
 * Result of an authentication attempt
 */
export interface AuthResult {
  /** The authenticated user */
  user: User & UserInfo;
  /** Provider-specific identifier (e.g., Firebase UID) */
  providerUid: string;
}

