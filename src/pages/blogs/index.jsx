import BlogCard from "@/components/blog/BlogCard";
import Pagination from "@/components/blog/Pagination";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import CallToAction from "@/components/home/CallToAction";
import HeroSection from "@/components/home/HeroSection";
import Head from "next/head";
import { useState } from "react";

export default function Blogs() {
    const tabsData = [
        {
            id: 1,
            title: "All Topics",
            content: "Pioneering AI breakthroughs for real-world applications.",
        },
        {
            id: 2,
            title: "Topics 1",
            content: "Building scalable and efficient AI solutions.",
        },
        {
            id: 3,
            title: "Topics 2",
            content: "Expert guidance to optimize your AI strategy.",
        },
    ];

    // State to track active tab
    const [activeTab, setActiveTab] = useState(tabsData[0].id);

    const blog = {
        imageSrc: "/images/blog-image.jpg",
        title: "The Future of AI in 2025",
        excerpt: "Exploring the next big trends in artificial intelligence and their impact.",
        categories: ["technology", "ai", "future"],
        author: "John Doe",
        date: "March 20, 2025",
    }

    // // Duplicate the array if length is odd to ensure pairs (minimum 2 cards)
    // const blogs = initialBlogs.length % 2 === 0
    //     ? initialBlogs
    //     : [...initialBlogs, initialBlogs[0]];

    return (
        <>
            <Head>
                <title>Blogs - AI Research</title>
            </Head>
            <Header />
            <HeroSection
                title="Blogs"
                text="Blending technology and human creativity to push the limits of innovation."
                hideButton
            />

            <section className="py-6 bg-black">
                <div className="max-w-[1300px] mx-auto px-4 sm:px-6 md:px-8">
                    {/* Tabs Navigation */}
                    <div className="flex flex-row gap-4 sm:gap-8 md:gap-12">
                        {tabsData.map((tab) => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={`relative cursor-pointer text-[16px] sm:text-[18px] md:text-[20px] font-bold font-montserrat text-white pb-2 transition-colors duration-300 ${activeTab === tab.id ? 'text-white' : 'text-gray-400 hover:text-white'
                                    }`}
                            >
                                {tab.title}
                                <span
                                    className={`absolute bottom-0 left-0 w-full h-[1px] bg-[#02E0B8] transition-all duration-300 ${activeTab === tab.id ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                                        }`}
                                ></span>
                            </button>
                        ))}
                    </div>

                    {/* Tab Content */}
                    {/* <div className="text-center">
                        {tabsData.map((tab) => (
                            <div
                                key={tab.id}
                                className={`${activeTab === tab.id ? 'block' : 'hidden'
                                    } text-white`}
                            >
                                <p className="text-[14px] sm:text-[16px] md:text-[18px] font-montserrat">
                                    {tab.content}
                                </p>
                            </div>
                        ))}
                    </div> */}
                </div>
            </section>
            <section className="py-12 sm:py-16 md:py-20 bg-[#0B0B25]">
                <div className="max-w-[1300px] mx-auto px-4 sm:px-6 md:px-8">
                    {/* <h2 className="text-[32px] sm:text-[36px] md:text-[40px] font-bold text-center text-white font-montserrat mb-8 sm:mb-10 md:mb-12">
                        Latest Blogs
                    </h2> */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-8 md:gap-10 mb-10">
                        {new Array(6).fill(null)?.map((data, i) => (
                            <BlogCard
                                key={i}
                                imageSrc={blog.imageSrc}
                                title={blog.title}
                                excerpt={blog.excerpt}
                                categories={blog.categories}
                                author={blog.author}
                                date={blog.date}
                            />
                        ))}
                    </div>
                    <Pagination
                        currentPage={1}
                        handlePageChange={(page) => console.log("Page changed to:", page)}
                        totalPages={10}
                    />
                </div>
            </section>
            <CallToAction />
            <Footer />
        </>
    )
}