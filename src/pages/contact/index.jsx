import Footer from "@/components/Footer";
import Header from "@/components/Header";
import BannerSection from "@/components/home/BannerSection";
import CallToAction from "@/components/home/CallToAction";
import HeroSection from "@/components/home/HeroSection";
import Head from "next/head";

export default function Contact() {
    return (
        <>
            <Head>
                <title>Contact - AI Research</title>
            </Head>
            <Header />
            <HeroSection
                title="Contact"
                text="Blending technology and human creativity to push the limits of innovation."
                hideButton
            />


            <BannerSection />
            <CallToAction />
            <Footer />
        </>
    )
}