// components/BlogCard.jsx
import { motion } from 'framer-motion';

const BlogCard = ({ imageSrc, title, excerpt, categories, author, date }) => {
    return (
        // <div className="">
        <motion.div
            className=""
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
        >
            {/* Image */}
            <div className="h-[250px] sm:h-[300px] md:h-[350px] w-full overflow-hidden rounded-[10px]">
                <img
                    src={imageSrc}
                    alt={title}
                    className="w-full h-full object-cover"
                />
            </div>

            {/* Content */}
            <div className="mt-4 sm:mt-5 md:mt-6">
                {/* Title */}
                <a
                    href="#"
                    className="text-[18px] sm:text-[22px] md:text-[24px] font-bold text-white font-montserrat hover:text-gray-300 transition-colors duration-300 block mb-2 sm:mb-3"
                >
                    {title}
                </a>

                {/* Excerpt */}
                <p className="text-[14px] sm:text-[15px] md:text-[16px] text-[#B8B8B8] font-montserrat mb-3 sm:mb-4">
                    {excerpt}
                </p>

                {/* Categories */}
                <div className="flex flex-wrap gap-2 sm:gap-3 mb-3 sm:mb-4">
                    {categories.map((category, index) => (
                        <div
                            key={index}
                            className="px-2 sm:px-3 py-1 rounded-[40px] border-2 border-[rgba(217,219,223,0.13)] bg-[rgba(245,247,249,0.15)] text-[10px] sm:text-[11px] md:text-[12px] font-montserrat text-[#7E7F81] capitalize"
                        >
                            {category}
                        </div>
                    ))}
                </div>

                {/* Author and Date */}
                <div className="flex items-center gap-1">
                    <span className="text-[12px] sm:text-[13px] md:text-[14px] text-white font-montserrat">
                        {author}
                    </span>
                    <div className="flex items-center gap-1 sm:gap-2">
                        <span className="w-[3px] h-[3px] rounded-full bg-[#7E7F81]"></span>
                        <span className="text-[12px] sm:text-[13px] md:text-[14px] text-[#7E7F81] font-montserrat">
                            {date}
                        </span>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};


export default BlogCard;