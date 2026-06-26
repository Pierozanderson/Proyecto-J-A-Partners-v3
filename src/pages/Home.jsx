import { lazy } from "react";

const Navbar = lazy(() => import("../layouts/navbar/Navbar"));
const Hero = lazy(() => import("../layouts/hero/Hero"));
const AboutSection = lazy(() => import("../layouts/about/AboutSection"));
const HistorySection = lazy(() => import("../layouts/about/HistorySection"));
const WhySection = lazy(() => import("../layouts/about/WhySection"));
const WhoSection = lazy(() => import("../layouts/about/WhoSection"));
const Stats = lazy(() => import("../layouts/stats/Stats"));
const Services = lazy(() => import("../layouts/sections/Services"));
const TestimonialsSection = lazy(() => import("../layouts/testimonials/TestimonialsSection"));
const Cta = lazy(() => import("../layouts/form/Cta"));
const Form = lazy(() => import("../layouts/form/Form"));
const Schedule = lazy(() => import("../layouts/schedule/Schedule"));
const Footer = lazy(() => import("../layouts/footer/Footer"));

function Home() {
    return (
        <>
            <Navbar />
            <Hero />
            <AboutSection />
            <HistorySection />
            <WhySection />
            <WhoSection />
            <Stats />
            <Services />
            <TestimonialsSection />
            <Cta />
            <Form />
            <Schedule />
            <Footer />
        </>
    );
}

export default Home;