'use client';

import React from 'react';
import Link from 'next/link';
import { useAuth } from '@/src/contexts/AuthContext';

export default function Header() {
  const { user, logout } = useAuth();
  
  const getFirstName = (name: string | null) => {
    if (!name) return '';
    return name.split(' ')[0];
  };
  
  return (
    <header className="bg-white shadow-sm sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-10">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <span className="text-2xl font-bold text-[--color-primary]">BungoEats</span>
          </Link>
          
          {/* Navigation */}
          <nav className="flex items-center gap-6">
            {user ? (
              <>
                <Link href="/cart" className="text-gray-700 hover:text-[--color-primary] transition-colors">
                  Cart
                </Link>
                <div className="flex items-center gap-4">
                  <span className="text-gray-900 font-medium">
                    Hi {getFirstName(user.displayName)}
                  </span>
                  <button
                    onClick={logout}
                    className="text-sm text-gray-600 hover:text-[--color-primary] transition-colors"
                  >
                    Logout
                  </button>
                </div>
              </>
            ) : (
              <div className="flex items-center gap-4">
                <Link 
                  href="/login" 
                  className="text-gray-700 hover:text-[--color-primary] transition-colors"
                >
                  Login
                </Link>
                <span className="text-gray-400">|</span>
                <Link 
                  href="/signup" 
                  className="text-gray-700 hover:text-[--color-primary] transition-colors"
                >
                  Sign Up
                </Link>
              </div>
            )}
          </nav>
        </div>
      </div>
    </header>
  );
}
