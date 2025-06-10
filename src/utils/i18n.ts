import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

const resources = {
    en: {
        translation: {
            nav: {
                home: "Home",
                features: "Key Features",
                how: "How It Works",
                contact: "Contact",
            },
            hero: {
                titleLine1: "Break the Language",
                titleLine2: "Barrier in Healthcare",
                description: "Real-time voice-to-voice medical translation powered by AI.",
                cta: "Start Translating",
            },
            features: {
                sectionTitle: "Key Features",
                list: [
                    {
                        title: "Voice-to-text transcription",
                        description: "Accurately captures spoken words in real-time",
                    },
                    {
                        title: "Instant translation",
                        description: "Translate between 50+ languages without delay",
                    },
                    {
                        title: "Audio playback",
                        description: "Natural-sounding voice output in target language",
                    },
                    {
                        title: "Mobile-ready UI",
                        description: "Works seamlessly across all devices",
                    },
                    {
                        title: "AI-powered medical vocabulary",
                        description: "Specialized in healthcare terminology",
                    },
                ],
            },
            how: {
                sectionTitle: "How It Works",
                steps: [
                    {
                        title: "Speak",
                        description: "Speak naturally in your language. The app detects and captures your voice.",
                    },
                    {
                        title: "Translate",
                        description: "AI instantly translates your speech with medical accuracy.",
                    },
                    {
                        title: "Listen",
                        description: "Natural voice output in the target language facilitates seamless communication.",
                    },
                ],
            },
            testimonials: {
                sectionTitle: "What Our Users Say",
                items: [
                    {
                        name: "Nurse Joanna Kim",
                        role: "Pediatric Nurse",
                        quote: "“Working with children from diverse backgrounds requires clear communication. HealthSpeak AI helps me connect with both kids and parents.”"
                    },
                    {
                        name: "Dr. Emily Torres",
                        role: "ER Doctor",
                        quote: "“I use HealthSpeak AI daily in emergencies. It's quick and accurate — exactly what I need when time matters most.”"
                    },
                    {
                        name: "Juan Pérez",
                        role: "Family Physician",
                        quote: "“An excellent tool for my bilingual practice. Saves time and improves understanding with my patients.”"
                    }
                ]
            },
            contact: {
                sectionTitle: "Contact us",
                description:
                    "Have questions about how HealthSpeak AI works? Want to suggest a feature or collaborate with us? Send us a message through this form or connect with us on social media.",
                form: {
                    name: "Name",
                    email: "Email",
                    subject: "Subject (optional)",
                    message: "Your Message",
                    send: "Send Message",
                    success: "Message sent successfully!",
                },
            },
            footer: {
                home: "Home",
                about: "About",
                privacy: "Privacy",
                terms: "Terms",
                credits: "Made with ❤️ by Bryan Sáenz",
            },
            translationPage: {
                "ready": "Ready to translate",
                "listening": "🎤 Listening...",
                "received": "✅ Voice received",
                "error": "⚠️ Error during recording",
                "role": "Role",
                "patient": "Patient",
                "doctor": "Doctor",
                "from": "From",
                "to": "To",
                "speechInput": "Speech Input",
                "speakPlaceholder": "Click the microphone to start speaking...",
                "translation": "Translation",
                "translationPlaceholder": "The translation will appear here...",
                "play": "Play",
                "playing": "Playing...",
                "history": "Conversation History",
                "clear": "🗑️ Clear conversation",
                "noConversations": "No conversations yet. Start by clicking the microphone.",
                "deleteTitle": "Delete all messages?",
                "deleteDescription": "This will permanently delete the entire conversation history.",
                "cancel": "Cancel",
                "confirmDelete": "Yes, delete all",
                "confirmDeleteTitle": "Confirm Deletion",
                "confirmDeleteDesc": "Are you sure you want to delete the entire conversation history? This action cannot be undone.",
                "clearConversation": "Clear conversation"
            }
        },
    },
    es: {
        translation: {
            nav: {
                home: "Inicio",
                features: "Características",
                how: "Cómo Funciona",
                contact: "Contacto",
            },
            hero: {
                titleLine1: "Rompe la barrera del",
                titleLine2: "idioma en la atención médica",
                description: "Traducción médica de voz en tiempo real impulsada por IA.",
                cta: "Comenzar a traducir",
            },
            features: {
                sectionTitle: "Características Clave",
                list: [
                    {
                        title: "Transcripción de voz a texto",
                        description: "Captura con precisión las palabras habladas en tiempo real",
                    },
                    {
                        title: "Traducción instantánea",
                        description: "Traduce entre más de 50 idiomas al instante",
                    },
                    {
                        title: "Reproducción de audio",
                        description: "Salida de voz natural en el idioma objetivo",
                    },
                    {
                        title: "Interfaz móvil adaptativa",
                        description: "Funciona sin problemas en todos los dispositivos",
                    },
                    {
                        title: "Vocabulario médico con IA",
                        description: "Especializado en terminología médica",
                    },
                ],
            },
            how: {
                sectionTitle: "Cómo Funciona",
                steps: [
                    {
                        title: "Habla",
                        description: "Habla de forma natural en tu idioma. La app detecta y capta tu voz.",
                    },
                    {
                        title: "Traduce",
                        description: "La IA traduce instantáneamente tu discurso con precisión médica.",
                    },
                    {
                        title: "Escucha",
                        description: "La salida de voz natural en el idioma destino facilita la comunicación.",
                    },
                ],
            },
            testimonials: {
                sectionTitle: "Lo que dicen nuestros usuarios",
                items: [
                    {
                        name: "Enfermera Joanna Kim",
                        role: "Enfermera Pediátrica",
                        quote: "“Trabajar con niños de diversos orígenes requiere una comunicación clara. HealthSpeak AI me ayuda a conectar con los niños y sus padres.”"
                    },
                    {
                        name: "Dra. Emily Torres",
                        role: "Doctora de Urgencias",
                        quote: "“Uso HealthSpeak AI a diario en emergencias. Es rápido y preciso — exactamente lo que necesito cuando el tiempo es crucial.”"
                    },
                    {
                        name: "Juan Pérez",
                        role: "Médico Familiar",
                        quote: "“Una herramienta excelente para mi práctica bilingüe. Ahorra tiempo y mejora la comprensión con mis pacientes.”"
                    }
                ]
            },
            contact: {
                sectionTitle: "Contáctanos",
                description:
                    "¿Tienes preguntas sobre cómo funciona HealthSpeak AI? ¿Quieres sugerir una función o colaborar con nosotros? Envíanos un mensaje mediante este formulario o conéctate con nosotros en redes sociales.",
                form: {
                    name: "Nombre",
                    email: "Correo electrónico",
                    subject: "Asunto (opcional)",
                    message: "Tu Mensaje",
                    send: "Enviar Mensaje",
                    success: "¡Mensaje enviado con éxito!",
                },
            },
            footer: {
                home: "Inicio",
                about: "Acerca de",
                privacy: "Privacidad",
                terms: "Términos",
                credits: "Hecho con ❤️ por Bryan Sáenz",
            },
            translationPage: {
                ready: "Listo para traducir",
                listening: "🎤 Escuchando...",
                received: "✅ Voz recibida",
                error: "⚠️ Error durante la grabación",
                role: "Rol",
                patient: "Paciente",
                doctor: "Doctor",
                from: "De",
                to: "A",
                speechInput: "Entrada de Voz",
                speakPlaceholder: "Haz clic en el micrófono para comenzar a hablar...",
                translation: "Traducción",
                translationPlaceholder: "La traducción aparecerá aquí...",
                play: "Reproducir",
                playing: "Reproduciendo...",
                history: "Historial de Conversación",
                clear: "🗑️ Borrar conversación",
                noConversations: "Aún no hay conversaciones. Comienza haciendo clic en el micrófono.",
                deleteTitle: "¿Eliminar todos los mensajes?",
                deleteDescription: "Esto eliminará permanentemente todo el historial de conversación.",
                cancel: "Cancelar",
                confirmDelete: "Sí, borrar todo",
                confirmDeleteTitle: "Confirmar eliminación",
                confirmDeleteDesc: "¿Estás seguro de que deseas eliminar todo el historial de conversación? Esta acción no se puede deshacer.",
                clearConversation: "Borrar conversación",
            },

        },
    },
};

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources,
        fallbackLng: "en",
        interpolation: {
            escapeValue: false,
        },
        detection: {
            order: ['localStorage', 'navigator'],
            caches: ['localStorage'],
        },
        react: {
            useSuspense: false,
        },
    });

export default i18n;
