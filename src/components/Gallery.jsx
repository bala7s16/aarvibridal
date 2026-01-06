import React from 'react';
import { motion } from 'framer-motion';

const galleryItems = [
    {
        src: '/images/bridal-portrait.jpg',
        link: 'https://www.instagram.com/p/DSxo5zjkk0Y/',
        title: 'Bridal Portrait'
    },
    {
        src: '/images/saree-draping.jpg',
        link: 'https://www.instagram.com/p/DO1FcxEDxoC/',
        title: 'Saree Draping'
    },
    {
        src: '/images/hair-styling.jpg',
        link: 'https://www.instagram.com/p/DSAOHNMDyVW/',
        title: 'Hair Styling'
    },
    {
        src: '/images/makeup-artistry.jpg',
        link: 'https://www.instagram.com/p/DRPPps9Dwrl/',
        title: 'Makeup Artistry'
    },
    {
        src: '/images/jewelry-styling.jpg',
        link: 'https://www.instagram.com/p/DRCo5wvj_s-/',
        title: 'Jewelry Styling'
    },
    {
        src: '/images/bridal-glow.jpg',
        link: 'https://www.instagram.com/p/DP1LKvQj41S/',
        title: 'Bridal Glow'
    }
];

const Gallery = () => {
    return (
        <section id="gallery" className="section-padding bg-bgSecondary">
            <div className="container mx-auto">
                <div className="text-left mb-16 px-4">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <span className="text-primary text-sm uppercase tracking-widest block mb-4">Portfolio</span>
                        <h2 className="text-white">Captured <span className="italic font-light text-primary-light">Moments</span></h2>
                    </motion.div>
                </div>

                <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8 px-4">
                    {galleryItems.map((item, index) => (
                        <motion.a
                            key={index}
                            href={item.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="break-inside-avoid relative group cursor-pointer mb-8 block w-full"
                        >
                            <div className="relative overflow-hidden">
                                <img
                                    src={item.src}
                                    alt={`Aarvi Bridal Portfolio ${index + 1}`}
                                    className="w-full h-auto object-cover grayscale-[30%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
                                />
                                <div className="absolute inset-0 bg-black/40 group-hover:opacity-0 transition-opacity duration-500"></div>

                                {/* Overlay Text */}
                                <div className="absolute bottom-6 left-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform translate-y-4 group-hover:translate-y-0">
                                    <p className="text-white font-heading text-xl">{item.title}</p>
                                    <p className="text-primary text-xs uppercase tracking-widest mt-1">View on Instagram</p>
                                </div>
                            </div>
                        </motion.a>
                    ))}
                </div>

                <div className="flex justify-center mt-20">
                    <a
                        href="https://www.instagram.com/aarvi_bridal_studio"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-12 py-4 border border-white/20 text-white uppercase tracking-widest text-xs hover:border-primary hover:text-primary transition-all duration-300"
                    >
                        Follow on Instagram
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Gallery;
