import Header from '../../../ui/components/Header';
import Hero from '../../../ui/components/Hero';
import KeyFeatures from '../../../ui/components/KeyFeatures';
import HowItWorks from '../../../ui/components/HowItWorks';
import TestimonialCarousel from '../../../ui/components/Testimonials';
import Footer from '../../../ui/components/Footer';
import Contact from '../../../ui/components/Contact';

import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const Home = () => {
    const location = useLocation();

    useEffect(() => {
        const hash = location.hash;
        if (hash) {
            const target = document.querySelector(hash);
            if (target) {
                setTimeout(() => {
                    target.scrollIntoView({ behavior: "smooth" });
                }, 100);
            }
        }
    }, [location]);

    return (
        <>
            <Header />
            <Hero />
            <KeyFeatures />
            <HowItWorks />
            <TestimonialCarousel />
            <Contact />
            <Footer />
        </>
    );
};

export default Home;