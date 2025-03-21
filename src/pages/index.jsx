import Footer from "@/components/Footer";
import Header from "@/components/Header";
import AboutSection from "@/components/home/AboutSection";
import BannerSection from "@/components/home/BannerSection";
import CallToAction from "@/components/home/CallToAction";
import HeroSection from "@/components/home/HeroSection";
import HomeHeroSection from "@/components/home/HomeHeroSection";
import OurServices from "@/components/home/OurServices";
import Head from "next/head";


export default function Home() {
  //push
  return (
    <>
      <Head>
        <title>AI Research</title>
      </Head>
      <Header />
      <HomeHeroSection />
      {/* <HeroSection /> */}
      <AboutSection />
      <OurServices />
      <BannerSection />
      <CallToAction />
      <Footer />
    </>
  );
}
