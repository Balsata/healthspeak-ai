import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMicrophone, faLanguage, faVolumeUp, faMobileAlt, faBrain }
    from "@fortawesome/free-solid-svg-icons";

const features = [
    {
        icon: faMicrophone,
        title: "Voice-to-text transcription",
        description: "Accurately captures spoken words in real-time"
    },
    {
        icon: faLanguage,
        title: "Instant translation",
        description: "Translate between 50+ languages without delay"
    },
    {
        icon: faVolumeUp,
        title: "Audio playback",
        description: "Natural-sounding voice output in target language"
    },
    {
        icon: faMobileAlt,
        title: "Mobile-ready UI",
        description: "Works seamlessly across all devices"
    },
    {
        icon: faBrain,
        title: "AI-powered medical vocabulary",
        description: "Specialized in healthcare terminology"
    }
];

const KeyFeatures = () => {
    return (
        <section id="key-features" className="bg-white py-20 px-6 md:px-20 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-12">Key Features</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10 justify-center items-start">
                {features.map((feature, idx) => (
                    <div key={idx} className="flex flex-col items-center text-center space-y-3">
                        <div className="bg-indigo-100 text-indigo-600 w-20 h-20 flex items-center justify-center rounded-full shadow-sm text-3xl hover:bg-indigo-200 transition-all duration-300">
                            <FontAwesomeIcon icon={feature.icon} />
                        </div>
                        <h3 className="text-md font-semibold text-gray-900">{feature.title}</h3>
                        <p className="text-sm text-gray-600 max-w-[220px]">{feature.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default KeyFeatures;
