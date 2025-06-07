export type Language =
    | "en-US"
    | "es-MX"
    | "fr-FR"
    | "de-DE"
    | "it-IT"
    | "pt-BR"
    | "zh-CN";

export const LANGUAGES: { code: Language; label: string }[] = [
    { code: "en-US", label: "English" },
    { code: "es-MX", label: "Spanish" },
    { code: "fr-FR", label: "French" },
    { code: "de-DE", label: "German" },
    { code: "it-IT", label: "Italian" },
    { code: "pt-BR", label: "Portuguese (BR)" },
    { code: "zh-CN", label: "Chinese (Simplified)" },
];
