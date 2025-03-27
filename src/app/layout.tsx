// src/app/layout.tsx
import React from 'react';
import './globals.css';
import { Navbar } from '../components/layout/Navbar';
import { Sidebar } from '../components/layout/Sidebar';

export const metadata = {
  title: 'Fitness Tracker',
  description: 'Track your fitness journey!',
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body>
        <div className="flex h-screen">
          <Sidebar />
          <div className="flex-1">
            <Navbar />
            <main className="p-4">{children}</main>
          </div>
        </div>
      </body>
    </html>
  );
};

export default RootLayout;
