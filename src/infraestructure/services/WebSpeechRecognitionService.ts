import type { SpeechRecognitionService } from "@/core/usecases/RecognizeSpeechUseCase";

declare global {
    interface Window {
        SpeechRecognition: any;
        webkitSpeechRecognition: any;
    }
}

type SpeechRecognitionEvent = Event & {
    results: SpeechRecognitionResultList;
};

export class WebSpeechRecognitionService implements SpeechRecognitionService {
    private isRecognizing = false;

    recognize(): Promise<string> {
        return new Promise((resolve, reject) => {
            if (this.isRecognizing) {
                return reject(new Error("Ya se está capturando audio."));
            }

            const SpeechRecognition =
                window.SpeechRecognition || window.webkitSpeechRecognition;

            if (!SpeechRecognition) {
                return reject(new Error("Web Speech API no es compatible con tu navegador."));
            }

            const recognition = new SpeechRecognition();
            recognition.lang = "es-MX";
            recognition.continuous = false;
            recognition.interimResults = false;

            this.isRecognizing = true;

            recognition.onresult = (event: SpeechRecognitionEvent) => {
                const result = event.results[0][0].transcript;
                this.isRecognizing = false;
                resolve(result);
            };

            recognition.onerror = (event: any) => {
                this.isRecognizing = false;

                switch (event.error) {
                    case "not-allowed":
                        reject(new Error("Permiso denegado para usar el micrófono."));
                        break;
                    case "network":
                        reject(new Error("Error de red al usar reconocimiento de voz."));
                        break;
                    case "no-speech":
                        reject(new Error("No se detectó ninguna voz."));
                        break;
                    case "audio-capture":
                        reject(new Error("No se detectó ningún micrófono."));
                        break;
                    default:
                        reject(new Error(`Error de reconocimiento: ${event.error}`));
                }
            };

            recognition.onend = () => {
                this.isRecognizing = false;
            };

            try {
                recognition.start();
            } catch (error: any) {
                this.isRecognizing = false;
                reject(new Error("No se pudo iniciar el reconocimiento: " + error.message));
            }
        });
    }
}
