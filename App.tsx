
import React, { useState } from 'react';
import { Header } from './components/Header';
import { SurveyData, INITIAL_DATA } from './types';
import { RadioGroup, ScaleInput, CheckboxGroup } from './components/InputFields';
import { translations } from './translations';

const App: React.FC = () => {
  const [lang, setLang] = useState<'en' | 'ar'>('ar');
  const [formData, setFormData] = useState<SurveyData>(INITIAL_DATA);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const t = translations[lang];

  const handleChange = (key: keyof SurveyData, value: any) => {
    setFormData(prev => ({ ...prev, [key]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setIsSubmitted(true);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 1500);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-[#F3EFE6]" dir={lang === 'ar' ? 'rtl' : 'ltr'}>
        <Header lang={lang} onLanguageChange={setLang} translations={t} />
        <main className="max-w-3xl mx-auto px-6 py-20 text-center">
          <div className="bg-white p-12 shadow-sm border-t-8 border-[#9E1B1F] animate-in fade-in zoom-in duration-500">
            <h2 className="text-4xl text-[#1C1C1C] mb-6 font-traditional">{t.thankYou}</h2>
            <p className="text-lg text-[#6E6A65] mb-10 leading-relaxed">
              {t.thankYouMsg}
            </p>
            <button 
              onClick={() => { setIsSubmitted(false); setFormData(INITIAL_DATA); }}
              className="bg-[#9E1B1F] text-white px-8 py-3 uppercase tracking-widest font-bold hover:bg-[#8C1D18] transition-colors"
            >
              {t.newResponse}
            </button>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F3EFE6] pb-20" dir={lang === 'ar' ? 'rtl' : 'ltr'}>
      <Header lang={lang} onLanguageChange={setLang} translations={t} />
      
      <main className="max-w-3xl mx-auto px-6 -mt-10 relative z-20">
        <form onSubmit={handleSubmit} className="space-y-6">
          
          <section className="bg-white p-8 md:p-10 shadow-sm border-t-8 border-[#9E1B1F] space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <div>
              <h2 className="text-2xl text-[#1C1C1C] mb-2 font-traditional">{t.title}</h2>
              <p className="text-[#6E6A65] text-sm leading-relaxed">
                {t.headerDesc}
              </p>
            </div>

            <div className="space-y-2">
              <label className="block text-lg font-medium text-[#1C1C1C]">{t.q1}</label>
              <input 
                type="text" 
                value={formData.name}
                onChange={(e) => handleChange('name', e.target.value)}
                placeholder={t.placeholder}
                className="w-full border-b-2 border-gray-200 py-2 focus:border-[#9E1B1F] outline-none transition-colors bg-transparent"
              />
            </div>

            <RadioGroup 
              label={t.q2}
              options={t.purposes}
              value={formData.purpose}
              onChange={(val) => handleChange('purpose', val)}
              required
            />

            <CheckboxGroup 
              label={t.q3}
              options={t.referrals}
              selected={formData.referral}
              onChange={(val) => handleChange('referral', val)}
            />
          </section>

          <section className="bg-white p-8 md:p-10 shadow-sm space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-100">
            <h3 className="text-xl uppercase tracking-widest text-[#9E1B1F] font-bold border-b pb-4 font-traditional">{t.sec1}</h3>

            <ScaleInput 
              label={t.q4}
              minLabel={t.poor}
              maxLabel={t.excellent}
              range={5}
              value={formData.meatQuality}
              onChange={(val) => handleChange('meatQuality', val)}
            />

            <RadioGroup 
              label={t.q5}
              options={t.doneness}
              value={formData.steakDoneness}
              onChange={(val) => handleChange('steakDoneness', val)}
            />

            <RadioGroup 
              label={t.q6}
              options={t.temp}
              value={formData.foodTemp}
              onChange={(val) => handleChange('foodTemp', val)}
            />

            <RadioGroup 
              label={t.q7}
              options={t.variety}
              value={formData.menuVariety}
              onChange={(val) => handleChange('menuVariety', val)}
            />
          </section>

          <section className="bg-white p-8 md:p-10 shadow-sm space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-200">
            <h3 className="text-xl uppercase tracking-widest text-[#9E1B1F] font-bold border-b pb-4 font-traditional">{t.sec2}</h3>

            <ScaleInput 
              label={t.q8}
              minLabel={t.poor}
              maxLabel={t.exceptional}
              range={5}
              value={formData.staffFriendliness}
              onChange={(val) => handleChange('staffFriendliness', val)}
            />

            <RadioGroup 
              label={t.q9}
              options={t.knowledge}
              value={formData.serverKnowledge}
              onChange={(val) => handleChange('serverKnowledge', val)}
            />

            <RadioGroup 
              label={t.q10}
              options={t.speed}
              value={formData.serviceSpeed}
              onChange={(val) => handleChange('serviceSpeed', val)}
            />

            <ScaleInput 
              label={t.q11}
              minLabel={t.poor}
              maxLabel={t.exceptional}
              range={5}
              value={formData.rawProductQuality}
              onChange={(val) => handleChange('rawProductQuality', val)}
            />

            <RadioGroup 
              label={t.q12}
              options={t.yesNo}
              value={formData.foundEverything}
              onChange={(val) => handleChange('foundEverything', val)}
            />
          </section>

          <section className="bg-white p-8 md:p-10 shadow-sm space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">
            <h3 className="text-xl uppercase tracking-widest text-[#9E1B1F] font-bold border-b pb-4 font-traditional">{t.sec3}</h3>

            <ScaleInput 
              label={t.q13}
              minLabel={t.poor}
              maxLabel={t.immaculate}
              range={5}
              value={formData.cleanliness}
              onChange={(val) => handleChange('cleanliness', val)}
            />

            <ScaleInput 
              label={t.q14}
              minLabel={t.poor}
              maxLabel={t.exceptional}
              range={5}
              value={formData.ambiance}
              onChange={(val) => handleChange('ambiance', val)}
            />

            <ScaleInput 
              label={t.q15}
              minLabel={t.notLikely}
              maxLabel={t.extremelyLikely}
              range={10}
              startAtZero
              value={formData.nps}
              onChange={(val) => handleChange('nps', val)}
            />

            <div className="space-y-2">
              <label className="block text-lg font-medium text-[#1C1C1C]">{t.q16}</label>
              <textarea 
                rows={4}
                value={formData.improvements}
                onChange={(e) => handleChange('improvements', e.target.value)}
                placeholder={t.placeholder}
                className="w-full border-2 border-gray-100 p-4 focus:border-[#9E1B1F] outline-none transition-colors bg-transparent"
              />
            </div>

            <div className="space-y-2">
              <label className="block text-lg font-medium text-[#1C1C1C]">{t.q17}</label>
              <input 
                type="tel"
                value={formData.phoneNumber}
                onChange={(e) => handleChange('phoneNumber', e.target.value)}
                placeholder="05x xxx xxxx"
                className="w-full border-b-2 border-gray-200 py-2 focus:border-[#9E1B1F] outline-none transition-colors bg-transparent"
              />
            </div>
          </section>

          <div className="flex flex-col md:flex-row items-center justify-between py-6 space-y-4 md:space-y-0">
            <button 
              type="submit"
              disabled={loading || !formData.purpose}
              className={`bg-[#9E1B1F] text-white px-12 py-4 uppercase tracking-[0.2em] font-bold transition-all w-full md:w-auto shadow-md ${
                loading ? 'opacity-50 cursor-not-allowed' : 'hover:bg-[#8C1D18] hover:scale-105 active:scale-95'
              }`}
            >
              {loading ? t.submitting : t.submit}
            </button>
            <p className="text-[#6E6A65] text-xs uppercase tracking-widest font-bold">
              {t.portalLabel}
            </p>
          </div>
        </form>
      </main>

      <footer className="mt-20 py-12 bg-[#1C1C1C] text-[#6E6A65] text-center border-t-4 border-[#9E1B1F]">
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-sm uppercase tracking-widest mb-4 font-bold text-[#F3EFE6] font-traditional">REDSTON</p>
          <p className="text-xs mb-8 opacity-50">
            {t.copyright}
          </p>
          <div className="flex justify-center space-x-6 rtl:space-x-reverse">
             <div className="w-8 h-[1px] bg-[#6E6A65]"></div>
             <div className="w-2 h-2 rounded-full bg-[#9E1B1F]"></div>
             <div className="w-8 h-[1px] bg-[#6E6A65]"></div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
