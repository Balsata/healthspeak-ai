import type { TranslationService } from "@/core/usecases/TranslateTextUseCase";
import type { Language } from "@/core/valueObjects/Languages";

export class MockTranslationService implements TranslationService {
    async translate(text: string, from: Language, to: Language): Promise<string> {
        return `[${from}→${to}]: ${text}`;
    }
}
