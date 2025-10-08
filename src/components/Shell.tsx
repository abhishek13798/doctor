import React from 'react';

interface ShellProps {
  children: React.ReactNode;
}

const Shell: React.FC<ShellProps> = ({ children }) => (
  <div className="min-h-screen bg-slate-50 text-slate-800">
    {children}
  </div>
);

export default Shell;
