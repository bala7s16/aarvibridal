import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
    return (
        <section id="about" className="section-padding container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                {/* Text Content */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="flex items-center gap-4 mb-6">
                        <div className="h-[1px] w-12 bg-primary"></div>
                        <span className="uppercase tracking-widest text-xs font-semibold text-primary">The Studio</span>
                    </div>

                    <h2 className="text-white mb-8">
                        Crafting Timeless <br /> <span className="italic font-light text-primary-light">Bridal Looks</span>
                    </h2>

                    <p className="text-lg text-muted mb-8 leading-relaxed font-light">
                        Welcome to <strong>Aarvi Bridal Studio</strong>. We believe that every bride deserves to look and feel like a queen on her special day. Founded by <strong>Priya</strong>, a passionate makeup artist and stylist, our studio is dedicated to bringing your dream bridal look to life.
                    </p>

                    <p className="text-muted mb-10 leading-relaxed font-light">
                        Located in Kangeyam and serving Coimbatore & Tirupur, we specialize in <strong>South Indian Bridal Makeup</strong>, intricate hair styling, and professional <strong>Saree Pre-pleating</strong>. Our approach combines traditional elegance with modern techniques to ensure you glow with confidence.
                    </p>

                    <div className="flex gap-12 border-t border-white/10 pt-8">
                        <div>
                            <h4 className="text-4xl font-heading text-primary mb-2">5.0</h4>
                            <p className="text-xs text-muted uppercase tracking-widest">Star Rating</p>
                        </div>
                        <div>
                            <h4 className="text-4xl font-heading text-primary mb-2">100+</h4>
                            <p className="text-xs text-muted uppercase tracking-widest">Happy Brides</p>
                        </div>
                    </div>
                </motion.div>

                {/* Image Content */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="relative"
                >
                    {/* Decorative frame */}
                    <div className="absolute -top-6 -right-6 w-full h-full border border-primary/30 z-0 hidden md:block"></div>

                    <div className="relative z-10 w-full h-[600px] bg-[#1a1a1a] overflow-hidden">
                        <img
                            src="https://images.unsplash.com/photo-1641383817884-2f72ae45bef1?w=1200&q=80&auto=format"
                            alt="Beautiful South Indian Bride"
                            className="object-cover object-top w-full h-full opacity-80 hover:opacity-100 hover:scale-105 transition-all duration-1000"
                        />
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
