import OurVision from "@/components/about/OurVision";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import BannerSection from "@/components/home/BannerSection";
import CallToAction from "@/components/home/CallToAction";
import HeroSection from "@/components/home/HeroSection";
import MissionSection1 from "@/components/mission/MissionSection1";
import MissionSection2 from "@/components/mission/MissionSection2";
import OurValues from "@/components/mission/OurValues";
import Head from "next/head";

export default function Mission() {
    return (
        <>
            <Head>
                <title>Mission - AI Research</title>
            </Head>
            <Header />
            <HeroSection
                title="Mission"
                text="Blending technology and human creativity to push the limits of innovation."
                hideButton
            />


            <MissionSection1 />
            <MissionSection2 />
            <OurValues />
            <BannerSection />
            <CallToAction />
            <Footer />
        </>
    )
}