import { useState, useEffect } from 'react';
import { SunIcon, MoonIcon } from '@heroicons/react/solid';

function ModeToggle() {
  const [isDarkMode, setIsDarkMode] = useState(() => localStorage.getItem('theme') === 'dark');

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]);

  return (
    <button
      onClick={() => setIsDarkMode(!isDarkMode)}
      className="flex items-center justify-center w-10 h-10 bg-gray-200 dark:bg-gray-700 rounded-full shadow-lg transition-colors duration-300 hover:bg-gray-300 dark:hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 dark:focus:ring-yellow-500"
      aria-label="Toggle dark mode"
    >
      {isDarkMode ? (
        <SunIcon className="w-6 h-6 text-yellow-500 transition-transform transform rotate-0 dark:rotate-90" />
      ) : (
        <MoonIcon className="w-6 h-6 text-blue-500 transition-transform transform rotate-0 dark:rotate-90" />
      )}
    </button>
  );
}

export default ModeToggle;
