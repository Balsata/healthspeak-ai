import { RecognizeSpeechUseCase } from "@/core/usecases/RecognizeSpeechUseCase";
import { TranslateTextUseCase } from "@/core/usecases/TranslateTextUseCase";
import { SpeakTextUseCase } from "@/core/usecases/SpeakTextUseCase";

import { WebSpeechRecognitionService } from "@/infraestructure/services/WebSpeechRecognitionService";
import { WebTextToSpeechService } from "@/infraestructure/services/WebTextToSpeechService";
import { OpenAITranslationService } from "@/infraestructure/services/OpenAITranslationService";

export const recognizeSpeechUseCase = new RecognizeSpeechUseCase(new WebSpeechRecognitionService());
export const speakTextUseCase = new SpeakTextUseCase(new WebTextToSpeechService());
export const translateTextUseCase = new TranslateTextUseCase(new OpenAITranslationService());