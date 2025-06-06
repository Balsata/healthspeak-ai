const Footer = () => {
    return (
        <footer className="bg-[#0B1120] text-white px-6 md:px-20 py-6 text-sm">
            <div className="flex flex-col md:flex-row justify-between items-center border-b border-gray-700 pb-4">
                {/* Logo */}
                <div className="flex items-center gap-2 mb-4 md:mb-0">
                    <span className="text-indigo-600 text-2xl">
                        <i className="fas fa-comment-medical"></i>
                    </span>
                    <span className="font-semibold text-lg text-white">HealthSpeak AI</span>
                </div>

                {/* Links */}
                <nav className="flex gap-6 mb-4 md:mb-0">
                    <a href="#" className="hover:underline">Home</a>
                    <a href="#" className="hover:underline">About</a>
                    <a href="#" className="hover:underline">Privacy</a>
                    <a href="#" className="hover:underline">Terms</a>
                </nav>

                {/* Social Icons */}
                <div className="flex gap-4 text-white">
                    <a href="https://www.linkedin.com/in/bryansaenzt/" aria-label="LinkedIn" target="_blank" className="hover:text-indigo-400">
                        <i className="fab fa-linkedin fa-lg"></i>
                    </a>
                    <a href="https://github.com/Balsata" aria-label="GitHub" target="_blank" className="hover:text-indigo-400">
                        <i className="fab fa-github fa-lg"></i>
                    </a>
                </div>
            </div>

            {/* Créditos */}
            <div className="text-center text-gray-400 pt-4">
                Made with <span className="text-red-500">❤️</span> by Bryan Sáenz
            </div>
        </footer>
    );
};

export default Footer;
