import Header from '../../../ui/components/Header';
import Hero from '../../../ui/components/Hero';
import KeyFeatures from '../../../ui/components/KeyFeatures';
import HowItWorks from '../../../ui/components/HowItWorks';
import TestimonialCarousel from '../../../ui/components/Testimonials';
import Footer from '../../../ui/components/Footer';
import Contact from '../../../ui/components/Contact';

const Home = () => {
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