'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';
import { 
  User,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  updateProfile
} from 'firebase/auth';
import { doc, setDoc, getDoc, updateDoc } from 'firebase/firestore';
import { auth, db } from '@/src/lib/firebase';

interface ExtendedUser extends User {
  phone: string;
  favourites: string[];
  name: string;
}

interface AuthContextType {
  user: ExtendedUser | null;
  loading: boolean;
  signup: (email: string, password: string, name: string, phone: string) => Promise<void>;
  login: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
  userDoc: UserDocument | null;
}

interface UserDocument {
  uid: string;
  name: string;
  email: string;
  phone: string;
  favourites: string[];
  createdAt: Date;
  lastLoginAt: Date;
}

const AuthContext = createContext<AuthContextType>({} as AuthContextType);

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [userDoc, setUserDoc] = useState<UserDocument | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      setUser(user);
      
      if (user) {
        // Fetch user document from Firestore
        const userDocRef = doc(db, 'users', user.uid);
        const userDocSnap = await getDoc(userDocRef);
        
        if (userDocSnap.exists()) {
          setUserDoc(userDocSnap.data() as UserDocument);
          
          // Update last login
          await updateDoc(userDocRef, {
            lastLoginAt: new Date()
          });
        }
      } else {
        setUserDoc(null);
      }
      
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  async function signup(email: string, password: string, name: string, phone: string) {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    // Update display name
    await updateProfile(user, { displayName: name });

    // Create user document in Firestore
    const userDocData: UserDocument = {
      uid: user.uid,
      name,
      email,
      phone,
      favourites: [],
      createdAt: new Date(),
      lastLoginAt: new Date()
    };

    await setDoc(doc(db, 'users', user.uid), userDocData);
    setUserDoc(userDocData);
  }

  async function login(email: string, password: string) {
    await signInWithEmailAndPassword(auth, email, password);
  }

  async function logout() {
    await signOut(auth);
    setUserDoc(null);
  }

  // Merge user and userDoc
  const extendedUser: ExtendedUser | null = user && userDoc ? {
    ...user,
    name: userDoc.name,
    phone: userDoc.phone,
    favourites: userDoc.favourites || []
  } as ExtendedUser : null;

  const value = {
    user: extendedUser,
    loading,
    signup,
    login,
    logout,
    userDoc
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
