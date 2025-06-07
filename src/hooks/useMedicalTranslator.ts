import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

import type { RecognizeSpeechUseCase } from "@/core/usecases/RecognizeSpeechUseCase";
import type { TranslateTextUseCase } from "@/core/usecases/TranslateTextUseCase";
import type { SpeakTextUseCase } from "@/core/usecases/SpeakTextUseCase";
import type { Language } from "@/core/valueObjects/Languages";

type Role = "doctor" | "patient";

export interface Message {
    id: string;
    content: string;
    translatedContent: string;
    role: Role;
    timestamp: Date;
}

export function useMedicalTranslator(
    recognizeUC: RecognizeSpeechUseCase,
    translateUC: TranslateTextUseCase,
    speakUC: SpeakTextUseCase
) {
    const [messages, setMessages] = useState<Message[]>([]);
    const [fromLang, setFromLang] = useState<Language>("es-MX");
    const [toLang, setToLang] = useState<Language>("en-US");

    const recognizeAndTranslate = async (role: Role = "patient") => {
        const originalText = await recognizeUC.execute();

        const translated = await translateUC.execute(originalText, fromLang, toLang);

        await speakUC.execute(translated, toLang);

        const newMessage: Message = {
            id: uuidv4(),
            content: originalText,
            translatedContent: translated,
            role,
            timestamp: new Date(),
        };

        setMessages((prev) => [...prev, newMessage]);
    };

    return {
        messages,
        setMessages,
        fromLang,
        toLang,
        setFromLang,
        setToLang,
        recognizeAndTranslate,
    };
}
