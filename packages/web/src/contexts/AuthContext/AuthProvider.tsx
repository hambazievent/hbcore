'use client';

import { useEffect, useState, type ReactNode } from 'react';
import { signInWithPopup, signOut as firebaseSignOut, onAuthStateChanged } from 'firebase/auth';
import { auth, googleAuthProvider } from '@/lib/firebase/auth';
import { AuthContext, type AuthContextType } from './AuthContext';
import { apiClient } from '@/lib/api/client';
import type { User, UserInfo } from '@hbcore/types';

interface AuthProviderProps {
  children: ReactNode;
}

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<(User & UserInfo) | null>(null);
  const [loading, setLoading] = useState(true);

  // Set up token getter for API client
  useEffect(() => {
    const getIdToken = async (): Promise<string | null> => {
      if (!auth.currentUser) {
        return null;
      }
      return auth.currentUser.getIdToken();
    };

    apiClient.setTokenGetter(getIdToken);
  }, []);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
      if (firebaseUser) {
        try {
          // Get Firebase ID token
          const idToken = await firebaseUser.getIdToken();

          // Authenticate with our API
          const response = await apiClient.post<{ user: User & UserInfo }>('/auth/firebase', {
            idToken,
          });

          setUser(response.data.user);
        } catch (error) {
          console.error('Failed to authenticate with API:', error);
          setUser(null);
        }
      } else {
        setUser(null);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const signInWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, googleAuthProvider);
      const idToken = await result.user.getIdToken();

      // Authenticate with our API
      const response = await apiClient.post<{ user: User & UserInfo }>('/auth/firebase', {
        idToken,
      });

      setUser(response.data.user);
    } catch (error) {
      console.error('Sign in error:', error);
      throw error;
    }
  };

  const signOut = async () => {
    try {
      await firebaseSignOut(auth);
      setUser(null);
    } catch (error) {
      console.error('Sign out error:', error);
      throw error;
    }
  };

  const getIdToken = async (): Promise<string | null> => {
    if (!auth.currentUser) {
      return null;
    }
    return auth.currentUser.getIdToken();
  };

  const value: AuthContextType = {
    user,
    loading,
    signInWithGoogle,
    signOut,
    getIdToken,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
