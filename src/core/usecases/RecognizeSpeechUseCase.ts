export interface SpeechRecognitionService {
    recognize(): Promise<string>;
}

export class RecognizeSpeechUseCase {
    private service: SpeechRecognitionService;

    constructor(service: SpeechRecognitionService) {
        this.service = service;
    }

    async execute(): Promise<string> {
        return this.service.recognize();
    }
}
