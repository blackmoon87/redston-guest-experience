
import React from 'react';
import { BRAND_ASSETS } from '../constants';

interface HeaderProps {
  lang: 'en' | 'ar';
  onLanguageChange: (lang: 'en' | 'ar') => void;
  translations: any;
}

export const Header: React.FC<HeaderProps> = ({ lang, onLanguageChange, translations }) => {
  return (
    <header className="bg-[#1C1C1C] text-[#F3EFE6] py-12 px-6 flex flex-col items-center justify-center relative overflow-hidden">
      {/* Language Switcher */}
      <div className={`absolute top-6 ${lang === 'ar' ? 'left-6' : 'right-6'} z-30`}>
        <button 
          onClick={() => onLanguageChange(lang === 'en' ? 'ar' : 'en')}
          className="border border-[#F3EFE6] px-4 py-1 text-sm font-bold tracking-widest hover:bg-[#F3EFE6] hover:text-[#1C1C1C] transition-all"
        >
          {lang === 'en' ? 'عربي' : 'ENGLISH'}
        </button>
      </div>

      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <img 
          src="https://images.unsplash.com/photo-1544025162-d76694265947?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
          alt="background" 
          className="w-full h-full object-cover grayscale contrast-125"
        />
      </div>
      
      <div className="relative z-10 flex flex-col items-center">
        <div className="mb-4">
          {BRAND_ASSETS.LOGO_ICON}
        </div>
        <h1 className="text-4xl md:text-5xl tracking-[0.2em] font-bold mb-2 font-traditional">
          {BRAND_ASSETS.LOGO_WORDMARK}
        </h1>
        <div className="w-16 h-1 bg-[#9E1B1F] mb-6"></div>
        <p className="text-[#F3EFE6] text-sm uppercase tracking-widest font-medium text-center max-w-md">
          {translations.subtitle}
        </p>
      </div>
    </header>
  );
};
