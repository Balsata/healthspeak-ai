import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMicrophone, faLanguage, faVolumeUp, faMobileAlt, faBrain, } from "@fortawesome/free-solid-svg-icons";
import { useTranslation } from "react-i18next";

const icons = [faMicrophone, faLanguage, faVolumeUp, faMobileAlt, faBrain,];

const KeyFeatures = () => {
    const { t } = useTranslation();
    const features = t("features.list", { returnObjects: true }) as { title: string; description: string }[];

    return (
        <section id="key-features" className="bg-white py-20 px-6 md:px-20 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-12">
                {t("features.sectionTitle")}
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10 justify-center items-start">
                {features.map((feature, idx) => (
                    <div key={idx} className="flex flex-col items-center text-center space-y-3">
                        <div className="bg-indigo-100 text-indigo-600 w-20 h-20 flex items-center justify-center rounded-full shadow-sm text-3xl hover:bg-indigo-200 transition-all duration-300">
                            <FontAwesomeIcon icon={icons[idx]} />
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
