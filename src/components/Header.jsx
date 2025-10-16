import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useTranslation } from '../context/TranslationContext.jsx';

const Header = () => {
  const { t, toggleLanguage } = useTranslation();
  return (
    <header className="bg-gray-200 w-full">
      {/* Top Navigation Bar */}
      <div className="bg-gray-200 px-4 py-3 w-full">
        <div className="w-full flex items-center justify-between">
          {/* Left Side - Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-virsa-red rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-sm">V</span>
            </div>
            <span className="text-virsa-dark font-semibold text-xl">Virsa</span>
          </Link>

          {/* Center Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <NavLink to="/" className={({ isActive }) => `px-4 py-2 rounded-lg flex items-center space-x-2 ${isActive ? 'bg-virsa-red text-white' : 'text-virsa-gray hover:text-virsa-dark'}`} end>
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
              </svg>
              <span>{t('home')}</span>
            </NavLink>
            <NavLink to="/nitnem" className={({ isActive }) => `flex items-center space-x-2 ${isActive ? 'text-virsa-dark' : 'text-virsa-gray hover:text-virsa-dark'}`}>
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>Nitnem</span>
            </NavLink>
            <button className="text-virsa-gray hover:text-virsa-dark flex items-center space-x-2" type="button">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" />
              </svg>
              <span>{t('magazine')}</span>
            </button>
            <button className="text-virsa-gray hover:text-virsa-dark flex items-center space-x-2" type="button">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z" />
              </svg>
              <span>{t('video')}</span>
            </button>
            <button className="text-virsa-gray hover:text-virsa-dark flex items-center space-x-2" type="button">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z" />
              </svg>
              <span>{t('books')}</span>
            </button>
          </nav>

          {/* Right Side - Search, Translate and Accessibility */}
          <div className="flex items-center space-x-4">
            <button 
              onClick={toggleLanguage}
              className="bg-virsa-blue text-white px-3 py-2 rounded-lg flex items-center space-x-2 hover:bg-blue-700 transition-colors"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M7 2a1 1 0 011 1v1h3a1 1 0 110 2H9.578a18.87 18.87 0 01-1.724 4.78c.29.354.596.696.914 1.026a1 1 0 11-1.44 1.389c-.188-.196-.373-.396-.554-.6a19.098 19.098 0 01-3.107 3.567 1 1 0 01-1.334-1.49 17.087 17.087 0 003.13-3.733 18.992 18.992 0 01-1.487-2.494 1 1 0 111.79-.89c.234.47.489.928.764 1.372.417-.934.752-1.913.997-2.927H3a1 1 0 110-2h3V3a1 1 0 011-1zm6 6a1 1 0 001 1h1a1 1 0 110 2h-1a1 1 0 00-1 1v1a1 1 0 11-2 0v-1a1 1 0 00-1-1h-1a1 1 0 110-2h1a1 1 0 001-1V9z" clipRule="evenodd" />
              </svg>
              <span>{t('translate')}</span>
            </button>
            <button className="text-virsa-gray hover:text-virsa-dark">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
              </svg>
            </button>
            <div className="relative">
              <input
                type="text"
                placeholder={t('search')}
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-virsa-red focus:border-transparent"
              />
              <svg className="w-4 h-4 absolute left-3 top-3 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
