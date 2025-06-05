import { useEffect, useState } from 'react';
import { twMerge } from 'tailwind-merge';

const testimonials = [
    {
        name: 'Nurse Joanna Kim',
        role: 'Pediatric Nurse',
        quote: `“Working with children from diverse backgrounds requires clear communication. HealthSpeak AI helps me connect with both kids and parents.”`,
        stars: 5,
        image: 'https://randomuser.me/api/portraits/women/44.jpg',
    },
    {
        name: 'Dr. Emily Torres',
        role: 'ER Doctor',
        quote: `“I use HealthSpeak AI daily in emergencies. It's quick and accurate — exactly what I need when time matters most.”`,
        stars: 5,
        image: 'https://randomuser.me/api/portraits/women/65.jpg',
    },
    {
        name: 'Juan Pérez',
        role: 'Family Physician',
        quote: `“An excellent tool for my bilingual practice. Saves time and improves understanding with my patients.”`,
        stars: 4,
        image: 'https://randomuser.me/api/portraits/men/32.jpg',
    },
];

const Testimonials = () => {
    const [index, setIndex] = useState(0);
    const [fade, setFade] = useState(true);
    const [direction, setDirection] = useState<'left' | 'right'>('right');

    const prev = () => {
        setFade(false);
        setDirection('left');
        setTimeout(() => {
            setIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
            setFade(true);
        }, 100);
    };

    const next = () => {
        setFade(false);
        setDirection('right');
        setTimeout(() => {
            setIndex((prev) => (prev + 1) % testimonials.length);
            setFade(true);
        }, 100);
    };

    // Auto-advance
    useEffect(() => {
        const interval = setInterval(() => {
            next();
        }, 6000);
        return () => clearInterval(interval);
    }, []);

    const testimonial = testimonials[index];

    return (
        <section className="bg-white py-20 px-6 md:px-20 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-10">What Our Users Say</h2>

            <div
                className={twMerge(
                    "max-w-3xl mx-auto h-auto bg-gray-50 p-6 rounded-md shadow-sm text-left transition-all duration-200 ease-in-out transform",
                    fade ? "opacity-100 translate-x-0" :
                        direction === 'right' ? "opacity-0 translate-x-20" : "opacity-0 -translate-x-20"
                )}
            >
                <div className="flex items-center gap-4 mb-4">
                    <img src={testimonial.image} alt={testimonial.name} className="w-12 h-12 rounded-full object-cover" />
                    <div>
                        <p className="font-semibold text-gray-900">{testimonial.name}</p>
                        <p className="text-sm text-gray-500">{testimonial.role}</p>
                    </div>
                </div>
                <p className="italic text-gray-700">{testimonial.quote}</p>
                <div className="flex mt-4 gap-1 text-indigo-600">
                    {[...Array(testimonial.stars)].map((_, i) => (
                        <i key={i} className="fas fa-star"></i>
                    ))}
                </div>
            </div>

            {/* Controles manuales */}
            <div className="flex justify-center items-center mt-6 gap-4">
                <button onClick={prev} className="w-8 h-8 flex items-center cursor-pointer justify-center bg-gray-200 rounded-full hover:bg-gray-300">
                    <i className="fas fa-chevron-left"></i>
                </button>
                <button onClick={next} className="w-8 h-8 flex items-center cursor-pointer justify-center bg-gray-200 rounded-full hover:bg-gray-300">
                    <i className="fas fa-chevron-right"></i>
                </button>
            </div>

            {/* Indicadores */}
            <div className="mt-3 flex justify-center gap-2">
                {testimonials.map((_, i) => (
                    <span
                        key={i}
                        className={`w-3 h-3 rounded-full ${index === i ? 'bg-indigo-600' : 'bg-gray-300'} inline-block`}
                    ></span>
                ))}
            </div>
        </section>
    );
};

export default Testimonials;
