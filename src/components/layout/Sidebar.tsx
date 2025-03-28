"use client"
import SettingsIcon from '@mui/icons-material/Settings';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import TaskIcon from '@mui/icons-material/Task'; 
import HomeIcon from '@mui/icons-material/Home';
import Link from 'next/link';
import React from 'react'; 

export const Sidebar = () => {
  const menuItems = [
    {
      href:  "dashboard",
      label: 'Dashboard',
      icon: (
         <HomeIcon/>
      ),
    },
    {
      href: '/Task',
      label: 'Task',
      icon: (
         <TaskIcon/>
      ),
    },  
    {
      href: '/Projectss',
      label: 'Projects',
      icon: (
        <AccountTreeIcon />
      ),
    }, 
    {
      href: '/Settingss',
      label: 'Settings',
      icon: (
        <SettingsIcon />
      ),
    },
  ];

  return (
    <div className="w-64 bg-gray-50 border-r border-gray-200 py-6">
      <div className="px-6 mb-8">
        <h1 className="text-2xl font-bold text-neutral-800">TaskFlow</h1>
      </div>
      <nav>
        <ul className="space-y-1">
          {menuItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="flex items-center px-6 py-3 text-gray-700 hover:bg-gray-100 hover:text-gray-900 transition-all rounded-lg"
              >
                <span className="mr-3">{item.icon}</span>
                <span className="text-sm font-medium">{item.label}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};
