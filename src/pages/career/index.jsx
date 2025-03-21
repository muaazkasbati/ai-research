import Footer from "@/components/Footer";
import Header from "@/components/Header";
import BannerSection from "@/components/home/BannerSection";
import CallToAction from "@/components/home/CallToAction";
import HeroSection from "@/components/home/HeroSection";
import Head from "next/head";

export default function Career() {
    return (
        <>
            <Head>
                <title>Career - AI Research</title>
            </Head>
            <Header />
            <HeroSection
                title="Latest Job Listing"
                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo."
                hideButton
            />
            <section className="py-8 sm:py-16 md:py-42 px-3 md:px-0">
                <div className="p-4 sm:p-8 md:p-12 max-w-[1300px] mx-auto rounded-[10px]" >
                    <div className="text-white text-center">
                        <p className="text-[#02E0B8] text-[14px] sm:text-[16px] md:text-[18px] mb-3 sm:mb-4 font-montserrat">
                            Jobs
                        </p>
                        <h2 className="text-[24px] sm:text-[32px] md:text-[40px] font-bold mb-4 sm:mb-6 font-montserrat text-white leading-tight">
                            Current Job Openings
                        </h2>
                        <p className="text-[14px] sm:text-[16px] md:text-[18px] mb-6 sm:mb-8 font-montserrat">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut. Aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                        </p>
                    </div>

                </div>
            </section>
            <BannerSection />
            <CallToAction />
            <Footer />
        </>
    )
}