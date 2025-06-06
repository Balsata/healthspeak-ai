import type { TextToSpeechService } from "@/core/usecases/SpeakTextUseCase";
import type { Language } from "@/core/valueObjects/Languages";

export class WebTextToSpeechService implements TextToSpeechService {
    async speak(text: string, language: Language): Promise<void> {
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = language;

        return new Promise((resolve) => {
            utterance.onend = () => resolve();
            speechSynthesis.speak(utterance);
        });
    }
}
