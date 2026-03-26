import { useTranslation } from 'react-i18next';
import { Languages } from 'lucide-react';

const LanguageSwitcher = () => {
  const { i18n, t } = useTranslation();

  const currentLanguage = i18n.language;

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="flex items-center gap-2 bg-gray-800/50 backdrop-blur-sm rounded-full px-4 py-2 border border-gray-700">
      <Languages className="w-4 h-4 text-gray-400" />
      <button
        onClick={() => changeLanguage('en')}
        className={`text-sm font-medium transition-colors duration-200 cursor-none ${
          currentLanguage === 'en' ? 'text-purple-400' : 'text-gray-400 hover:text-white'
        }`}
      >
        EN
      </button>
      <span className="text-gray-600">|</span>
      <button
        onClick={() => changeLanguage('es')}
        className={`text-sm font-medium transition-colors duration-200 cursor-none ${
          currentLanguage === 'es' ? 'text-purple-400' : 'text-gray-400 hover:text-white'
        }`}
      >
        ES
      </button>
    </div>
  );
};

export default LanguageSwitcher;
