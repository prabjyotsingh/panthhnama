import React, { useState, useEffect } from 'react';
import { useTranslation } from '../context/TranslationContext.jsx';

const Hero = () => {
  const { t } = useTranslation();
  const [currentTime, setCurrentTime] = useState('');
  const [currentDate, setCurrentDate] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setCurrentTime(now.toLocaleTimeString('en-US', { 
        hour12: true, 
        hour: 'numeric', 
        minute: '2-digit', 
        second: '2-digit' 
      }));
      setCurrentDate(now.toLocaleDateString('en-CA'));
    };

    updateTime(); // Set initial time
    const interval = setInterval(updateTime, 1000); // Update every second

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative bg-gradient-to-r from-red-900 via-red-800 to-orange-700 py-16 px-4 w-full">
      {/* Background decoration */}
      <div className="absolute right-8 top-8 w-32 h-32 bg-white bg-opacity-10 rounded-full"></div>
      
      <div className="w-full relative z-10">
        <div className="text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            {t('welcome')}
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200">
            {t('subtitle')}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 text-sm">
            <div className="flex items-center space-x-2">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
              </svg>
              <span>{currentTime}</span>
            </div>
            <div className="flex items-center space-x-2">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
              </svg>
              <span>{currentDate}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
