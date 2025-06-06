const TranslationPage = () => {
    return (
        <section className="bg-[#f8f9fb] min-h-screen px-4 py-10">
            {/* Estado */}
            <div className="flex justify-center mb-6">
                <div className="bg-green-100 text-green-700 px-4 py-1 rounded-full text-sm font-medium flex items-center gap-2 cursor-default">
                    <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                    Ready to translate
                </div>
            </div>

            {/* Selectores de idioma */}
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-10">
                {/* Selector From */}
                <div className="bg-white shadow-md rounded-lg px-6 py-4 flex items-center gap-2 h-20 w-60">
                    <i className="fas fa-flag text-indigo-500 bg-indigo-100 p-2 rounded-full w-8 h-8 flex items-center justify-center"></i>
                    <span className="text-sm font-medium text-gray-700">From</span>
                    <select className="bg-transparent text-gray-900 font-semibold focus:outline-none cursor-pointer">
                        <option>English</option>
                        <option>Spanish</option>
                    </select>
                </div>

                {/* Botón de intercambio centrado */}
                <div className="flex items-end justify-center">
                    <button className="bg-indigo-500 text-white w-12 h-12 rounded-full flex items-center justify-center shadow-md hover:bg-indigo-600 transition cursor-pointer self-center">
                        <i className="fas fa-exchange-alt"></i>
                    </button>
                </div>

                {/* Selector To */}
                <div className="bg-white shadow-md rounded-lg px-6 py-4 flex items-center gap-2 h-20 w-60">
                    <i className="fas fa-flag text-indigo-500 bg-indigo-100 p-2 rounded-full w-8 h-8 flex items-center justify-center"></i>
                    <span className="text-sm font-medium text-gray-700">To</span>
                    <select className="bg-transparent text-gray-900 font-semibold focus:outline-none cursor-pointer">
                        <option>Spanish</option>
                        <option>English</option>
                    </select>
                </div>
            </div>


            {/* Paneles de entrada y traducción */}
            <div className="flex flex-col md:flex-row justify-center gap-6 mb-10">
                {/* Entrada de voz */}
                <div className="w-full md:w-[50%] max-w-[680px] bg-white rounded-lg shadow-md p-6">
                    <h3 className="text-gray-800 font-semibold mb-2 flex items-center gap-2">
                        <i className="fas fa-microphone "></i>
                        Speech Input
                    </h3>
                    <div className="bg-gray-100 rounded-md p-4 text-gray-600">
                        Click the microphone to start speaking...
                    </div>
                    <p className="text-xs text-gray-400 mt-2 flex items-center gap-1 ml-1">
                        <i className="fas fa-circle-info"></i> Speak clearly for best results
                    </p>
                </div>

                {/* Traducción */}
                <div className="w-full md:w-[50%] max-w-[680px] bg-white rounded-lg shadow-md p-6">
                    <div className="flex justify-between items-center mb-2">
                        <h3 className="text-gray-800 font-semibold flex items-center gap-2">
                            <i className="fas fa-language"></i>
                            Translation
                        </h3>
                        <button className="bg-cyan-100 hover:bg-cyan-200 text-cyan-700 px-3 py-1 rounded-full text-sm font-medium transition cursor-pointer flex items-center gap-1">
                            <i className="fas fa-play"></i> Play
                        </button>
                    </div>
                    <div className="bg-gray-100 rounded-md p-4 text-gray-600">
                        Translation will appear here...
                    </div>
                    <p className="text-xs text-gray-400 mt-2 flex items-center gap-1 ml-1">
                        <i className="fas fa-volume-up"></i> Click play to hear the translation
                    </p>
                </div>
            </div>

            {/* Botón micrófono */}
            <div className="flex justify-center mb-12">
                <button className="bg-indigo-600 text-white w-16 h-16 rounded-full shadow-xl hover:bg-indigo-700 transition text-2xl flex items-center justify-center cursor-pointer">
                    <i className="fas fa-microphone"></i>
                </button>
            </div>

            {/* Historial */}
            <div className="mx-auto w-full md:w-[50%] max-w-[680px] bg-white shadow-md rounded-lg p-6">
                <h3 className="text-gray-800 font-semibold text-lg mb-2 flex items-center gap-2">
                    <i className="fas fa-history"></i>
                    Conversation History
                </h3>
                <p className="text-gray-500 text-sm">No conversations yet. Start by clicking the microphone button.</p>
            </div>
        </section>
    );
};

export default TranslationPage;
