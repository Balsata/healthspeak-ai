import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Header = () => {
    const { t, i18n } = useTranslation();
    const [language, setLanguage] = useState(i18n.language || 'en');

    const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedLang = e.target.value;
        setLanguage(selectedLang);
        i18n.changeLanguage(selectedLang);
    };

    return (
        <header className="bg-white shadow-sm">
            <div className="max-w-7xl mx-auto px-4 py-3 h-18 flex justify-between items-center">
                {/* Logo */}
                <Link to="/" className="flex items-center gap-2">
                    <span className="text-indigo-600 text-2xl">
                        <i className="fas fa-comment-medical"></i>
                    </span>
                    <span className="font-semibold text-lg text-gray-900">HealthSpeak AI</span>
                </Link>

                {/* Nav links */}
                <nav className="hidden md:flex space-x-8 text-sm font-medium text-gray-700">
                    <Link to="/#home" className="relative group">
                        <span className="group-hover:text-indigo-600 transition">{t("nav.home")}</span>
                        <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-indigo-600 transition-all duration-300 group-hover:w-full"></span>
                    </Link>
                    <Link to="/#key-features" className="relative group">
                        <span className="group-hover:text-indigo-600 transition">{t("nav.features")}</span>
                        <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-indigo-600 transition-all duration-300 group-hover:w-full"></span>
                    </Link>
                    <Link to="/#how-it-works" className="relative group">
                        <span className="group-hover:text-indigo-600 transition">{t("nav.how")}</span>
                        <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-indigo-600 transition-all duration-300 group-hover:w-full"></span>
                    </Link>
                    <Link to="/#contact" className="relative group">
                        <span className="group-hover:text-indigo-600 transition">{t("nav.contact")}</span>
                        <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-indigo-600 transition-all duration-300 group-hover:w-full"></span>
                    </Link>
                </nav>

                {/* Language Selector */}
                <div className="relative mr-4">
                    <select
                        value={language}
                        onChange={handleLanguageChange}
                        className="appearance-none bg-gray-200 text-sm px-4 pr-10 py-1 rounded-md text-gray-800 font-medium shadow-sm focus:outline-none focus:ring focus:ring-indigo-300 cursor-pointer"
                    >
                        <option value="en">English</option>
                        <option value="es">Español</option>
                    </select>
                    <i className="fas fa-chevron-down absolute right-3 top-1/2 -translate-y-1/2 text-gray-600 pointer-events-none"></i>
                </div>
            </div>
        </header>
    );
};

export default Header;
