import type { Language } from "@/core/valueObjects/Languages";

export interface TranslationService {
    translate(text: string, from: Language, to: Language): Promise<string>;
}

export class TranslateTextUseCase {
    private service: TranslationService;

    constructor(service: TranslationService) {
        this.service = service;
    }

    async execute(text: string, from: Language, to: Language): Promise<string> {
        return this.service.translate(text, from, to);
    }
}
