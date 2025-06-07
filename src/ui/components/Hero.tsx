import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Hero = () => {
    const { t } = useTranslation();

    return (
        <section id="home" className="bg-[#eff2ff] py-16 px-6 md:px-20 flex flex-col-reverse md:flex-row items-center justify-center gap-16">
            {/* Texto */}
            <div className="flex-1 max-w-xl flex flex-col items-center md:items-start text-center md:text-left">
                <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-4">
                    {t("hero.titleLine1")} <br /> {t("hero.titleLine2")}
                </h1>
                <p className="text-lg text-gray-600 mb-8">
                    {t("hero.description")}
                </p>
                <Link to="/translate">
                    <button className="group relative bg-indigo-600 cursor-pointer text-white px-6 py-3 rounded-full shadow-lg overflow-hidden transition-all duration-300 ease-in-out hover:shadow-indigo-500/60 hover:shadow-2xl hover:bg-indigo-700 flex items-center gap-3">
                        <span className="relative z-10 font-semibold">{t("hero.cta")}</span>
                        <span className="relative z-10 text-lg transition-transform duration-300 ease-out group-hover:translate-x-2 group-hover:scale-125">
                            →
                        </span>

                        {/* Glow Effect */}
                        <div className="absolute inset-0 bg-indigo-400 opacity-0 group-hover:opacity-40 blur-xl transition-opacity duration-500 z-0 rounded-full"></div>
                    </button>
                </Link>
            </div>

            {/* Imagen */}
            <div className="flex justify-center md:justify-end">
                <img src="/hero.svg" alt="Hero" className="w-[300px] md:w-[500px] h-auto" />
            </div>
        </section>
    );
};

export default Hero;
