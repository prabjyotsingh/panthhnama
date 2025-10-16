import React from 'react';
import { useTranslation } from '../context/TranslationContext.jsx';

const Footer = () => {
  const { t } = useTranslation();
  
  return (
    <footer className="bg-slate-800 text-white w-full">
      {/* Main Footer */}
      <div className="w-full px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Column 1 - Virsa Channel Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-virsa-red rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">V</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">{t('virsaChannel')}</h3>
                <p className="text-sm text-gray-300">{t('sikhIdentity')}</p>
              </div>
            </div>
            <p className="text-sm text-gray-300 leading-relaxed">
              {t('platformDescription')}
            </p>
          </div>

          {/* Column 2 - Content Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">{t('topics')}</h4>
            <ul className="space-y-2">
              <li><button className="text-gray-300 hover:text-white transition-colors text-left">{t('blogPosts')}</button></li>
              <li><button className="text-gray-300 hover:text-white transition-colors text-left">{t('magazines')}</button></li>
              <li><button className="text-gray-300 hover:text-white transition-colors text-left">{t('videos')}</button></li>
              <li><button className="text-gray-300 hover:text-white transition-colors text-left">{t('books')}</button></li>
            </ul>
          </div>

          {/* Column 3 - More Info Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">{t('topics')}</h4>
            <ul className="space-y-2">
              <li><button className="text-gray-300 hover:text-white transition-colors text-left">{t('sikhHistory')}</button></li>
              <li><button className="text-gray-300 hover:text-white transition-colors text-left">{t('punjabiLiterature')}</button></li>
              <li><button className="text-gray-300 hover:text-white transition-colors text-left">{t('culture')}</button></li>
              <li><button className="text-gray-300 hover:text-white transition-colors text-left">{t('religion')}</button></li>
            </ul>
          </div>

          {/* Column 4 - Contact/Social Media */}
          <div>
            <h4 className="text-lg font-semibold mb-4">{t('contact')}</h4>
            <p className="text-sm text-gray-300 mb-4">{t('followUs')}</p>
            <div className="flex space-x-4">
              <button className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                </svg>
              </button>
              <button className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center hover:bg-red-700 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </button>
              <button className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center hover:bg-green-700 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer Bar */}
      <div className="bg-slate-900 py-6 w-full">
        <div className="w-full px-4 text-center">
          <p className="text-sm text-gray-300 mb-2">
            {t('copyright')}
          </p>
          <p className="text-sm text-gray-400">
            {t('joinUs')}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
