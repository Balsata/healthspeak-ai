const HowItWorks = () => {
    const steps = [
        {
            id: 1,
            title: "Speak",
            description: "Speak naturally in your language. The app detects and captures your voice.",
            icon: "fas fa-comment-dots",
        },
        {
            id: 2,
            title: "Translate",
            description: "AI instantly translates your speech with medical accuracy.",
            icon: "fas fa-language",
        },
        {
            id: 3,
            title: "Listen",
            description: "Natural voice output in the target language facilitates seamless communication.",
            icon: "fas fa-headphones-alt",
        },
    ];

    return (
        <section id="how-it-works" className="bg-[#f9fafb] py-20 px-6 md:px-20 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-12">How It Works</h2>
            <div className="flex flex-col md:flex-row items-center justify-center gap-12">
                {steps.map((step, index) => (
                    <div key={step.id} className="relative flex flex-col items-center text-center max-w-xs">
                        {/* Círculo de ícono */}
                        <div className="bg-indigo-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl relative">
                            <i className={step.icon}></i>
                            <span className="absolute -top-2 -right-2 w-6 h-6 text-xs rounded-full border-2 border-indigo-600 bg-white text-indigo-600 font-bold flex items-center justify-center">
                                {step.id}
                            </span>
                        </div>

                        {/* Título */}
                        <h3 className="mt-4 text-lg font-semibold text-gray-900">{step.title}</h3>

                        {/* Descripción */}
                        <p className="mt-2 text-sm text-gray-700">{step.description}</p>

                        {/* Flecha  */}
                        {index < steps.length - 1 && (
                            <span className="hidden md:block absolute top-8 right-[-60px] text-gray-300 text-xl">
                                <i className="fas fa-arrow-right"></i>
                            </span>
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
};

export default HowItWorks;
