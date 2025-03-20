import AboutSection1 from "@/components/about/AboutSection1";
import AboutSection2 from "@/components/about/AboutSection2";
import OurVision from "@/components/about/OurVision";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import BannerSection from "@/components/home/BannerSection";
import CallToAction from "@/components/home/CallToAction";
import HeroSection from "@/components/home/HeroSection";
import Head from "next/head";

export default function About() {
    return (
        <>
            <Head>
                <title>About - AI Research</title>
            </Head>
            <Header />
            <HeroSection
                title="About Us"
                text="Blending technology and human creativity to push the limits of innovation."
                hideButton
            />


            <AboutSection1 />
            <OurVision />
            <AboutSection2 />
            <BannerSection />
            <CallToAction />
            <Footer />
        </>
    )
}