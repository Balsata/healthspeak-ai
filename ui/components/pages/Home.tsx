import { useEffect } from 'react'

const Home = () => {
    useEffect(() => {
        document.body.classList.add('loaded');
    }, []);

    return (
        <main className="min-h-screen flex items-center justify-center bg-gray-900 text-white reveal">
            <section className="text-center max-w-xl px-4">
                <h1 className="text-4xl font-bold mb-4">HealthSpeak AI</h1>
                <p className="mb-6">
                    Traductor médico en tiempo real impulsado por inteligencia artificial. Convierte voz en texto, traduce al
                    instante y reproduce el resultado en audio.
                </p>
                <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded transition">
                    Comenzar
                </button>
            </section>
        </main>
    );
};

export default Home;

