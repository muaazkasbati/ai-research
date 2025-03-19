import Footer from "@/components/Footer";
import Header from "@/components/Header";
import AboutSection from "@/components/home/AboutSection";
import BannerSection from "@/components/home/BannerSection";
import CallToAction from "@/components/home/CallToAction";
import HeroSection from "@/components/home/HeroSection";
import OurServices from "@/components/home/OurServices";
import Head from "next/head";


export default function Home() {
  return (
    <>
      <Head>
        <title>AI Research</title>
      </Head>
      <Header />
      <HeroSection />
      <AboutSection />
      <OurServices />
      <BannerSection />
      <CallToAction />
      <Footer />
    </>
  );
}
