import axios from "axios";
import type { TranslationService } from "@/core/usecases/TranslateTextUseCase";
import type { Language } from "@/core/valueObjects/Languages";

export class OpenAITranslationService implements TranslationService {
    async translate(text: string, from: Language, to: Language): Promise<string> {
        const apiKey = import.meta.env.VITE_OPENAI_API_KEY;

        const prompt = `Traduce este texto del idioma ${from} al ${to}, manteniendo el contexto médico:\n\n"${text}"`;

        const response = await axios.post(
            "https://api.openai.com/v1/chat/completions",
            {
                model: "gpt-3.5-turbo",
                messages: [{ role: "user", content: prompt }],
                temperature: 0.2,
            },
            {
                headers: {
                    Authorization: `Bearer ${apiKey}`,
                    "Content-Type": "application/json",
                },
            }
        );

        return response.data.choices[0].message.content.trim();
    }
}
