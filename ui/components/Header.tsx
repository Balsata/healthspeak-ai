import { useState } from 'react';

const Header = () => {
    const [language, setLanguage] = useState('English');

    return (
        <header className="bg-white shadow-sm">
            <div className="max-w-7xl mx-auto px-4 py-3 h-18 flex justify-between items-center">
                {/* Logo */}
                <div className="flex items-center gap-2">
                    <span className="text-indigo-600 text-2xl">
                        <i className="fas fa-comment-medical"></i>
                    </span>
                    <span className="font-semibold text-lg text-gray-900">HealthSpeak AI</span>
                </div>

                {/* Nav links */}
                <nav className="hidden md:flex space-x-8 text-sm font-medium text-gray-700">
                    {['Home', 'How It Works', 'Languages', 'Contact'].map((item) => (
                        <a
                            key={item}
                            href="#"
                            className="relative group"
                        >
                            <span className="group-hover:text-indigo-600 transition">{item}</span>
                            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-indigo-600 transition-all duration-300 group-hover:w-full"></span>
                        </a>
                    ))}
                </nav>

                {/* Language Selector */}
                <div>
                    <select
                        value={language}
                        onChange={(e) => setLanguage(e.target.value)}
                        className="bg-gray-200 border-r-4text-sm px-4  py-1 rounded-md text-gray-800 font-medium shadow-sm focus:outline-none focus:ring focus:ring-indigo-300 cursor-pointer flex items-center justify-between"
                    >
                        <option>English</option>
                        <option>Español</option>
                    </select>
                </div>
            </div>
        </header>
    );
};

export default Header;
