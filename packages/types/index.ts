// Domain types

export type { AuthCredential, AuthResult, FirebaseAuthCredential } from './domain/auth/index.js';
export { AuthProvider } from './domain/auth/index.js';
export type { User, UserInfo } from './domain/user.js';

// Branded types
export {
  type Email,
  EmailSchema,
  type FirebaseAuthCredentialId,
  FirebaseAuthCredentialIdSchema,
  type FirebaseCustomClaimsId,
  FirebaseCustomClaimsIdSchema,
  type FirebaseUid,
  FirebaseUidSchema,
  type FirebaseUserMetadataId,
  FirebaseUserMetadataIdSchema,
  type Phone,
  PhoneSchema,
  type ProviderUid,
  ProviderUidSchema,
  type UserId,
  UserIdSchema,
  type UserProfileId,
  UserProfileIdSchema,
} from './src/domain-ids.js';
