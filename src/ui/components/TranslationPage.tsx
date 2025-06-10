import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useMedicalTranslator } from "@/hooks/useMedicalTranslator";
import { recognizeSpeechUseCase, translateTextUseCase, speakTextUseCase, } from "@/container/dependency";
import type { Language } from "@/core/valueObjects/Languages";
import { LANGUAGES } from "@/core/valueObjects/Languages";
const LOCAL_STORAGE_KEY = "healthspeak_conversation";

const TranslationPage = () => {
    const { t } = useTranslation();
    const {
        messages,
        setMessages,
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
    const [statusMessage, setStatusMessage] = useState(t("translationPage.ready"));
    const [errorMessage, setErrorMessage] = useState("");
    const [role, setRole] = useState<"patient" | "doctor">("patient");
    const [isPlaying, setIsPlaying] = useState(false);
    const [showConfirmModal, setShowConfirmModal] = useState(false);

    useEffect(() => {
        const stored = localStorage.getItem(LOCAL_STORAGE_KEY);
        if (stored) {
            try {
                setMessages(JSON.parse(stored));
            } catch {
                console.warn("Invalid stored conversation");
            }
        }
    }, []);

    useEffect(() => {
        if (messages.length > 0) {
            localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(messages));
        }
    }, [messages]);

    const handleMicClick = async () => {
        setListening(true);
        setStatusMessage(t("translationPage.listening"));
        setErrorMessage("");

        try {
            await recognizeAndTranslate(role);
            setStatusMessage(t("translationPage.received"));
        } catch (err: any) {
            console.error("Error al grabar:", err);
            setErrorMessage(err.message || t("translationPage.error"));
            setStatusMessage(t("translationPage.error"));
        } finally {
            setListening(false);
            setTimeout(() => setStatusMessage(t("translationPage.ready")), 2500);
        }
    };

    const swapLanguages = () => {
        const temp = fromLang;
        setFromLang(toLang);
        setToLang(temp);
    };

    const handlePlay = async () => {
        if (messages.length > 0) {
            setIsPlaying(true);
            await speakTextUseCase.execute(
                messages[messages.length - 1].translatedContent,
                toLang
            );
            setIsPlaying(false);
        }
    };

    return (
        <section className="bg-[#f8f9fb] min-h-screen px-4 py-10">
            <div className="flex justify-center mb-4">
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

            <div className="flex justify-center mb-6">
                <button
                    onClick={() => setRole(role === "patient" ? "doctor" : "patient")}
                    className="text-sm font-medium text-indigo-700 bg-indigo-100 px-4 py-1 rounded-full hover:bg-indigo-200 transition cursor-pointer"
                >
                    🎭 {t("translationPage.role")}: {t(`translationPage.${role}`)}
                </button>
            </div>

            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-10">
                <div className="bg-white shadow-md rounded-lg px-6 py-4 flex items-center gap-2 h-20 w-60">
                    <i className="fas fa-flag text-indigo-500 bg-indigo-100 p-2 rounded-full w-8 h-8 flex items-center justify-center"></i>
                    <span className="text-sm font-medium text-gray-700">{t("translationPage.from")}</span>
                    <select
                        value={fromLang}
                        onChange={(e) => setFromLang(e.target.value as Language)}
                        className="bg-white text-gray-900 font-semibold rounded focus:outline-none cursor-pointer px-2 py-1 w-full"
                    >
                        {LANGUAGES.map((lang) => (
                            <option key={lang.code} value={lang.code} disabled={lang.code === toLang}>
                                {lang.label}
                            </option>
                        ))}
                    </select>
                </div>

                <div className="flex items-end justify-center">
                    <button
                        onClick={swapLanguages}
                        className="bg-indigo-500 text-white w-12 h-12 rounded-full flex items-center justify-center shadow-md hover:bg-indigo-600 transition cursor-pointer self-center active:rotate-180"
                    >
                        <i className="fas fa-exchange-alt"></i>
                    </button>
                </div>

                <div className="bg-white shadow-md rounded-lg px-6 py-4 flex items-center gap-2 h-20 w-60">
                    <i className="fas fa-flag text-indigo-500 bg-indigo-100 p-2 rounded-full w-8 h-8 flex items-center justify-center"></i>
                    <span className="text-sm font-medium text-gray-700">{t("translationPage.to")}</span>
                    <select
                        value={toLang}
                        onChange={(e) => setToLang(e.target.value as Language)}
                        className="bg-white text-gray-900 font-semibold rounded focus:outline-none cursor-pointer px-2 py-1 w-full"
                    >
                        {LANGUAGES.map((lang) => (
                            <option key={lang.code} value={lang.code} disabled={lang.code === fromLang}>
                                {lang.label}
                            </option>
                        ))}
                    </select>
                </div>
            </div>

            {/* Entrada y traducción */}
            <div className="flex flex-col md:flex-row justify-center gap-6 mb-10">
                <div className="w-full md:w-[50%] max-w-[680px] bg-white rounded-lg shadow-md p-6">
                    <h3 className="text-gray-800 font-semibold mb-2 flex items-center gap-2">
                        <i className="fas fa-microphone"></i>
                        {t("translationPage.speechInput")}
                    </h3>
                    <div className="bg-gray-100 rounded-md p-4 text-gray-600">
                        {messages.length > 0
                            ? messages[messages.length - 1].content
                            : t("translationPage.speakPlaceholder")}
                    </div>
                </div>

                <div className="w-full md:w-[50%] max-w-[680px] bg-white rounded-lg shadow-md p-6">
                    <div className="flex justify-between items-center mb-2">
                        <h3 className="text-gray-800 font-semibold flex items-center gap-2">
                            <i className="fas fa-language"></i>
                            {t("translationPage.translation")}
                        </h3>
                        <button
                            onClick={handlePlay}
                            className="bg-cyan-100 hover:bg-cyan-200 text-cyan-700 px-3 py-1 rounded-full text-sm font-medium transition cursor-pointer flex items-center gap-1 active:scale-95"
                        >
                            <i className={isPlaying ? "fas fa-spinner animate-spin" : "fas fa-play"}></i>
                            {isPlaying ? t("translationPage.playing") : t("translationPage.play")}
                        </button>
                    </div>
                    <div className="bg-gray-100 rounded-md p-4 text-gray-600">
                        {messages.length > 0
                            ? messages[messages.length - 1].translatedContent
                            : t("translationPage.translationPlaceholder")}
                    </div>
                </div>
            </div>

            {/* Botón del micrófono */}
            <div className="flex justify-center mb-12">
                <button
                    onClick={handleMicClick}
                    disabled={listening}
                    className={`${listening
                        ? "bg-gray-400 cursor-not-allowed ring-2 ring-yellow-400"
                        : "bg-indigo-600 hover:bg-indigo-700 active:scale-95"
                        } text-white w-16 h-16 rounded-full shadow-xl transition-all duration-200 text-2xl flex items-center cursor-pointer justify-center`}
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
                <div className="flex justify-between items-center mb-4">
                    <h3 className="text-gray-800 font-semibold text-lg flex items-center gap-2">
                        <i className="fas fa-history"></i>
                        {t("translationPage.history")}
                    </h3>
                    {messages.length > 0 && (
                        <button
                            onClick={() => setShowConfirmModal(true)}
                            className="bg-red-100 text-red-700 hover:bg-red-200 px-3 cursor-pointer py-1 rounded-full text-sm font-medium transition shadow-sm"
                        >
                            🗑️ {t("translationPage.clearConversation")}
                        </button>
                    )}
                </div>

                {messages.length === 0 ? (
                    <p className="text-gray-500 text-sm">{t("translationPage.noConversations")}</p>
                ) : (
                    <div className="space-y-4">
                        {messages.map((msg) => (
                            <div
                                key={msg.id}
                                className={`flex flex-col ${msg.role === "doctor" ? "items-start" : "items-end"}`}
                            >
                                <div
                                    className={`relative px-4 py-3 rounded-lg max-w-[90%] text-sm shadow-sm ${msg.role === "doctor"
                                        ? "bg-indigo-100 text-indigo-800 rounded-bl-none"
                                        : "bg-cyan-100 text-cyan-800 rounded-br-none"
                                        }`}
                                >
                                    <p className="font-semibold mb-1">
                                        {t(`translationPage.${msg.role}`)}
                                    </p>
                                    <p>{msg.content}</p>
                                    <p className="italic text-[13px] text-gray-700 mt-1">{msg.translatedContent}</p>

                                    <div
                                        className={`absolute top-2 w-0 h-0 border-t-[10px] border-t-transparent border-b-[10px] border-b-transparent ${msg.role === "doctor"
                                            ? "left-[-10px] border-r-[10px] border-r-indigo-100"
                                            : "right-[-10px] border-l-[10px] border-l-cyan-100"
                                            }`}
                                    ></div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>

            {/* Modal de confirmación */}
            {showConfirmModal && (
                <div
                    onClick={() => setShowConfirmModal(false)}
                    className="fixed inset-0 bg-white/30 backdrop-blur-sm flex justify-center items-center z-50"
                >
                    <div
                        onClick={(e) => e.stopPropagation()}
                        className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md animate-fade-in"
                    >
                        <h2 className="text-lg font-semibold text-gray-800 mb-4">
                            {t("translationPage.confirmDeleteTitle")}
                        </h2>
                        <p className="text-sm text-gray-600 mb-6">
                            {t("translationPage.confirmDeleteDesc")}
                        </p>
                        <div className="flex justify-end gap-3">
                            <button
                                onClick={() => setShowConfirmModal(false)}
                                className="px-4 py-2 text-sm rounded-md border border-gray-300 cursor-pointer text-gray-600 hover:bg-gray-100 transition"
                            >
                                {t("translationPage.cancel")}
                            </button>
                            <button
                                onClick={() => {
                                    setMessages([]);
                                    localStorage.removeItem("healthspeak_conversation");
                                    setShowConfirmModal(false);
                                }}
                                className="px-4 py-2 text-sm rounded-md bg-red-500 text-white cursor-pointer hover:bg-red-600 transition"
                            >
                                {t("translationPage.confirmDelete")}
                            </button>
                        </div>
                    </div>
                </div>
            )}



        </section>
    );
};

export default TranslationPage;
