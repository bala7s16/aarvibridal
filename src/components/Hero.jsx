import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Hero = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    });

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
    const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

    return (
        <section
            ref={ref}
            id="home"
            className="relative h-screen w-full overflow-hidden flex items-center justify-center p-4"
        >
            {/* Parallax Background */}
            <motion.div
                style={{ y, opacity }}
                className="absolute inset-0 z-0"
            >
                <div
                    className="absolute inset-0 bg-cover bg-no-repeat scale-105"
                    style={{
                        backgroundImage: "url('/images/bridal-glow.jpg')", // High quality South Indian bride
                        backgroundPosition: '50% 25%'
                    }}
                />
                {/* Cinematic Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/30" />
            </motion.div>

            {/* Content */}
            <div className="relative z-10 container mx-auto flex flex-col items-start justify-end h-full pb-12 md:pb-20 px-6 md:px-12">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                    className="text-left max-w-2xl"
                >
                    <div className="mb-4 flex items-center justify-start gap-4">
                        <div className="h-[1px] w-12 bg-primary/60"></div>
                        <span className="text-primary text-xs md:text-sm uppercase tracking-[0.3em] font-medium">
                            Est. 2020 • Kangeyam
                        </span>
                    </div>

                    <h1 className="text-white mb-6 leading-none">
                        <span className="block text-3xl md:text-5xl font-light mb-2">The Art of</span>
                        <span className="block text-5xl md:text-7xl italic font-heading text-primary-light">Bridal Elegance</span>
                    </h1>

                    <p className="text-sm md:text-lg text-gray-300 mb-8 max-w-lg font-light leading-relaxed tracking-wide">
                        Specializing in bespoke South Indian bridal transformations. <br className="hidden md:block" />From HD Makeup to the perfect Saree pleats.
                    </p>

                    <motion.a
                        href="#about"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="inline-block border border-primary text-primary px-8 py-3 uppercase tracking-widest text-xs md:text-sm hover:bg-primary hover:text-black transition-all duration-300"
                    >
                        Explore the Studio
                    </motion.a>
                </motion.div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer opacity-70"
            >
                <span className="text-[10px] text-white uppercase tracking-widest">Scroll</span>
                <div className="w-[1px] h-12 bg-gradient-to-b from-white to-transparent"></div>
            </motion.div>
        </section>
    );
};

export default Hero;
