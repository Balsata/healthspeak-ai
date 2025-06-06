import { useState } from "react";
import { useMedicalTranslator } from "@/hooks/useMedicalTranslator";
import {
    recognizeSpeechUseCase,
    translateTextUseCase,
    speakTextUseCase,
} from "@/container/dependency";

const TranslationPage = () => {
    const {
        messages,
        fromLang,
        toLang,
        setFromLang,
        setToLang,
        recognizeAndTranslate,
    } = useMedicalTranslator(
        recognizeSpeechUseCase,
        translateTextUseCase,
        speakTextUseCase
    );

    const [listening, setListening] = useState(false);
    const [statusMessage, setStatusMessage] = useState("Ready to translate");
    const [errorMessage, setErrorMessage] = useState("");

    const handleMicClick = async () => {
        setListening(true);
        setStatusMessage("🎤 Escuchando...");
        setErrorMessage("");

        try {
            await recognizeAndTranslate("patient");
            setStatusMessage("✅ Voz recibida");
        } catch (err: any) {
            setErrorMessage(err.message || "Ocurrió un error inesperado.");
            setStatusMessage("⚠️ Error durante la grabación");
        } finally {
            setListening(false);
            setTimeout(() => setStatusMessage("Ready to translate"), 2500);
        }
    };

    return (
        <section className="bg-[#f8f9fb] min-h-screen px-4 py-10">
            {/* Estado */}
            <div className="flex justify-center mb-6">
                <div
                    className={`${errorMessage
                        ? "bg-red-100 text-red-700"
                        : listening
                            ? "bg-yellow-100 text-yellow-800"
                            : "bg-green-100 text-green-700"
                        } px-4 py-1 rounded-full text-sm font-medium flex items-center gap-2 cursor-default`}
                >
                    <span
                        className={`w-2 h-2 rounded-full ${errorMessage
                            ? "bg-red-500"
                            : listening
                                ? "bg-yellow-500"
                                : "bg-green-500"
                            }`}
                    ></span>
                    {statusMessage}
                </div>
            </div>

            {/* Selectores de idioma */}
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-10">
                <div className="bg-white shadow-md rounded-lg px-6 py-4 flex items-center gap-2 h-20 w-60">
                    <i className="fas fa-flag text-indigo-500 bg-indigo-100 p-2 rounded-full w-8 h-8 flex items-center justify-center"></i>
                    <span className="text-sm font-medium text-gray-700">From</span>
                    <select
                        value={fromLang}
                        onChange={(e) => setFromLang(e.target.value as any)}
                        className="bg-transparent text-gray-900 font-semibold focus:outline-none cursor-pointer"
                    >
                        <option value="en-US">English</option>
                        <option value="es-MX">Spanish</option>
                    </select>
                </div>

                <div className="flex items-end justify-center">
                    <button className="bg-indigo-500 text-white w-12 h-12 rounded-full flex items-center justify-center shadow-md hover:bg-indigo-600 transition cursor-pointer self-center">
                        <i className="fas fa-exchange-alt"></i>
                    </button>
                </div>

                <div className="bg-white shadow-md rounded-lg px-6 py-4 flex items-center gap-2 h-20 w-60">
                    <i className="fas fa-flag text-indigo-500 bg-indigo-100 p-2 rounded-full w-8 h-8 flex items-center justify-center"></i>
                    <span className="text-sm font-medium text-gray-700">To</span>
                    <select
                        value={toLang}
                        onChange={(e) => setToLang(e.target.value as any)}
                        className="bg-transparent text-gray-900 font-semibold focus:outline-none cursor-pointer"
                    >
                        <option value="es-MX">Spanish</option>
                        <option value="en-US">English</option>
                    </select>
                </div>
            </div>

            {/* Paneles de entrada y traducción */}
            <div className="flex flex-col md:flex-row justify-center gap-6 mb-10">
                <div className="w-full md:w-[50%] max-w-[680px] bg-white rounded-lg shadow-md p-6">
                    <h3 className="text-gray-800 font-semibold mb-2 flex items-center gap-2">
                        <i className="fas fa-microphone"></i>
                        Speech Input
                    </h3>
                    <div className="bg-gray-100 rounded-md p-4 text-gray-600">
                        {messages.length > 0
                            ? messages[messages.length - 1].content
                            : "Click the microphone to start speaking..."}
                    </div>
                    <p className="text-xs text-gray-400 mt-2 flex items-center gap-1 ml-1">
                        <i className="fas fa-circle-info"></i> Speak clearly for best results
                    </p>
                </div>

                <div className="w-full md:w-[50%] max-w-[680px] bg-white rounded-lg shadow-md p-6">
                    <div className="flex justify-between items-center mb-2">
                        <h3 className="text-gray-800 font-semibold flex items-center gap-2">
                            <i className="fas fa-language"></i>
                            Translation
                        </h3>
                        <button
                            onClick={() => {
                                if (messages.length > 0) {
                                    speakTextUseCase.execute(
                                        messages[messages.length - 1].translatedContent,
                                        toLang
                                    );
                                }
                            }}
                            className="bg-cyan-100 hover:bg-cyan-200 text-cyan-700 px-3 py-1 rounded-full text-sm font-medium transition cursor-pointer flex items-center gap-1 active:scale-95"
                        >
                            <i className="fas fa-play animate-bounce"></i> Play
                        </button>

                    </div>
                    <div className="bg-gray-100 rounded-md p-4 text-gray-600">
                        {messages.length > 0
                            ? messages[messages.length - 1].translatedContent
                            : "Translation will appear here..."}
                    </div>
                    <p className="text-xs text-gray-400 mt-2 flex items-center gap-1 ml-1">
                        <i className="fas fa-volume-up"></i> Click play to hear the translation
                    </p>
                </div>
            </div>

            {/* Botón micrófono */}
            <div className="flex justify-center mb-12">
                <button
                    onClick={handleMicClick}
                    disabled={listening}
                    className={`${listening
                            ? "bg-gray-400 cursor-not-allowed ring-2 ring-yellow-400"
                            : "bg-indigo-600 hover:bg-indigo-700 active:scale-95"
                        } text-white w-16 h-16 rounded-full shadow-xl transition-all duration-200 text-2xl flex items-center justify-center`}
                >
                    {listening ? (
                        <div className="flex items-center gap-[2px]">
                            {[1, 2, 3].map((i) => (
                                <div
                                    key={i}
                                    className="w-1.5 h-6 bg-white rounded animate-pulse"
                                    style={{
                                        animationDelay: `${i * 0.15}s`,
                                        animationDuration: "0.8s",
                                        animationIterationCount: "infinite",
                                    }}
                                ></div>
                            ))}
                        </div>
                    ) : (
                        <i className="fas fa-microphone"></i>
                    )}
                </button>
            </div>


            {/* Historial */}
            <div className="mx-auto w-full md:w-[50%] max-w-[680px] bg-white shadow-md rounded-lg p-6">
                <h3 className="text-gray-800 font-semibold text-lg mb-2 flex items-center gap-2">
                    <i className="fas fa-history"></i>
                    Conversation History
                </h3>
                {messages.length === 0 ? (
                    <p className="text-gray-500 text-sm">
                        No conversations yet. Start by clicking the microphone button.
                    </p>
                ) : (
                    <ul className="space-y-4">
                        {messages.map((msg) => (
                            <li key={msg.id} className="border-b pb-2">
                                <p className="text-sm text-gray-700">
                                    <strong>{msg.role === "doctor" ? "Doctor" : "Patient"}:</strong>{" "}
                                    {msg.content}
                                </p>
                                <p className="text-sm text-indigo-600 italic">
                                    {msg.translatedContent}
                                </p>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </section>
    );
};

export default TranslationPage;
