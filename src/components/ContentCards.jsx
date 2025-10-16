import React, { useState } from 'react';
import { useTranslation } from '../context/TranslationContext.jsx';
import Nitnem from './Nitnem.jsx';

const ContentCards = () => {
  const { t } = useTranslation();
  const [showNitnem, setShowNitnem] = useState(false);
  
  const cards = [
    {
      icon: (
        <svg className="w-8 h-8 text-virsa-red" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
        </svg>
      ),
      count: "3",
      title: t('blogPosts'),
      subtitle: t('blogSubtitle')
    },
    {
      icon: (
        <svg className="w-8 h-8 text-orange-500" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
        </svg>
      ),
      count: "3",
      title: t('magazines'),
      subtitle: t('magazineSubtitle')
    },
    {
      icon: (
        <svg className="w-8 h-8 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
          <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z" />
        </svg>
      ),
      count: "3",
      title: t('videos'),
      subtitle: t('videoSubtitle')
    },
    {
      icon: (
        <svg className="w-8 h-8 text-green-500" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z" />
        </svg>
      ),
      count: "3",
      title: t('books'),
      subtitle: t('booksSubtitle')
    },
    {
      icon: (
        <svg className="w-8 h-8 text-purple-500" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
        </svg>
      ),
      count: "5",
      title: t('nitnem'),
      subtitle: t('nitnemSubtitle'),
      isClickable: true
    }
  ];

  if (showNitnem) {
    return (
      <div>
        <div className="py-4 px-4 bg-gray-100 w-full">
          <button 
            onClick={() => setShowNitnem(false)}
            className="flex items-center text-virsa-dark hover:text-virsa-red transition-colors"
          >
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
            </svg>
            Back to Content Cards
          </button>
        </div>
        <Nitnem />
      </div>
    );
  }

  return (
    <section className="py-12 px-4 bg-gray-100 w-full">
      <div className="w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {cards.map((card, index) => (
            <div 
              key={index} 
              className={`bg-white rounded-lg shadow-md p-6 relative hover:shadow-lg transition-shadow duration-300 ${
                card.isClickable ? 'cursor-pointer' : ''
              }`}
              onClick={card.isClickable ? () => setShowNitnem(true) : undefined}
            >
              <div className="absolute top-4 right-4 text-2xl font-bold text-virsa-gray">
                {card.count}
              </div>
              <div className="mb-4">
                {card.icon}
              </div>
              <h3 className="text-lg font-semibold text-virsa-dark mb-2">
                {card.title}
              </h3>
              <p className="text-sm text-virsa-gray">
                {card.subtitle}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContentCards;
