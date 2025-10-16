import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { TranslationProvider } from './context/TranslationContext.jsx';
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import ContentCards from './components/ContentCards.jsx';
import LatestUpdates from './components/LatestUpdates.jsx';
import Footer from './components/Footer.jsx';
import Nitnem from './components/Nitnem.jsx';

function App() {
  return (
    <TranslationProvider>
      <div className="min-h-screen bg-gray-100 font-punjabi w-full">
        <Header />
        <Routes>
          <Route
            path="/"
            element={(
              <>
                <Hero />
                <ContentCards />
                <LatestUpdates />
              </>
            )}
          />
          <Route path="/nitnem" element={<Nitnem />} />
          {/* 404 fallback */}
          <Route path="*" element={<div className="p-6">Page not found</div>} />
        </Routes>
        <Footer />
      </div>
    </TranslationProvider>
  );
}

export default App;
