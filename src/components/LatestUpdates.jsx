import React from 'react';
import { useTranslation } from '../context/TranslationContext.jsx';

const LatestUpdates = () => {
  const { t } = useTranslation();
  
  const updates = [
    {
      icon: (
        <svg className="w-6 h-6 text-virsa-red" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
        </svg>
      ),
      title: t('goldenPages'),
      author: t('profJagdish'),
      details: `2024-09-08 1250 ${t('views')}`
    },
    {
      icon: (
        <svg className="w-6 h-6 text-orange-500" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
        </svg>
      ),
      title: t('modernPunjabi'),
      author: t('drSurinder'),
      details: `2024-09-07 980 ${t('views')}`
    },
    {
      icon: (
        <svg className="w-6 h-6 text-virsa-red" fill="currentColor" viewBox="0 0 20 20">
          <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z" />
        </svg>
      ),
      title: t('guruNanak'),
      author: t('patbhir'),
      details: `2024-08-15 125000 ${t('views')}`
    }
  ];

  return (
    <section className="py-12 px-4 bg-gray-100 w-full">
      <div className="w-full">
        <div className="flex items-center mb-8">
          <svg className="w-6 h-6 text-yellow-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
          <h2 className="text-2xl font-bold text-virsa-dark">{t('latestUpdates')}</h2>
        </div>
        
        <div className="space-y-4">
          {updates.map((update, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6 flex items-start space-x-4 hover:shadow-lg transition-shadow duration-300">
              <div className="flex-shrink-0 mt-1">
                {update.icon}
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-virsa-dark mb-2">
                  {update.title}
                </h3>
                <p className="text-sm text-virsa-gray mb-1">
                  {update.author}
                </p>
                <p className="text-xs text-virsa-gray">
                  {update.details}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestUpdates;
