import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles/global.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Header from '../ui/components/Header';
import Hero from '../ui/components/Hero';
import KeyFeatures from '../ui/components/KeyFeatures';
import HowItWorks from '../ui/components/HowItWorks';
import TestimonialCarousel from '../ui/components/Testimonials';
import Footer from '../ui/components/Footer';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Header />
    <Hero />
    <KeyFeatures />
    <HowItWorks />
    <TestimonialCarousel />
    <Footer />
  </React.StrictMode>,
)
