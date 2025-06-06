import type { Language } from "@/core/valueObjects/Languages";

export interface TextToSpeechService {
    speak(text: string, language: Language): Promise<void>;
}

export class SpeakTextUseCase {
    private service: TextToSpeechService;

    constructor(service: TextToSpeechService) {
        this.service = service;
    }

    async execute(text: string, language: Language): Promise<void> {
        return this.service.speak(text, language);
    }
}
