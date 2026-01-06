import React from 'react';
import { motion } from 'framer-motion';
import { Palette, Scissors, Shirt, Sparkles } from 'lucide-react';

const services = [
    {
        icon: <Palette size={32} className="text-primary" />,
        title: "Bridal Makeup",
        description: "Flawless HD & Airbrush techniques tailored to your skin tone. We highlight your best features for a radiant, camera-ready bridal glow."
    },
    {
        icon: <Scissors size={32} className="text-primary" />,
        title: "Hair Styling",
        description: "From intricate traditional flower poola jada to modern romantic updos. Our styling ensures your hair stays perfect throughout the ceremony."
    },
    {
        icon: <Shirt size={32} className="text-primary" />,
        title: "Saree Draping",
        description: "The art of the perfect pleat. Our professional pre-pleating and draping services guarantee a comfortable, statue-esque silhouette."
    },
    {
        icon: <Sparkles size={32} className="text-primary" />,
        title: "Jewelry Styling",
        description: "Expert curation of temple jewelry and modern pieces to complement your saree and makeup. The finishing touch for royalty."
    }
];

const Services = () => {
    return (
        <section id="services" className="section-padding bg-bg relative overflow-hidden">
            {/* Subtle Background Pattern */}
            <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
                <div className="w-[800px] h-[800px] rounded-full bg-primary blur-[150px] absolute -top-[200px] -right-[200px]"></div>
            </div>

            <div className="container mx-auto relative z-10">
                <div className="flex flex-col md:flex-row items-end justify-between mb-20 gap-8">
                    <div className="max-w-2xl">
                        <span className="text-primary text-sm uppercase tracking-widest block mb-4">Our Expertise</span>
                        <h2 className="text-white leading-tight">
                            Curated Services for the <br /> <span className="italic font-light text-primary-light">Modern Bride</span>
                        </h2>
                    </div>
                    <p className="text-muted max-w-sm text-sm leading-relaxed border-l border-primary/30 pl-6">
                        We go beyond just makeup. We offer a holistic styling experience to ensure every detail of your look is synchronized and perfect.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="group relative bg-[#1a1a1a] p-8 border border-white/5 hover:border-primary/50 transition-colors duration-500 overflow-hidden flex flex-col h-full"
                        >
                            <div className="absolute top-0 left-0 w-full h-[2px] bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>

                            <div className="mb-8 p-4 bg-white/5 inline-block rounded-full group-hover:bg-primary/10 transition-colors duration-500">
                                {service.icon}
                            </div>

                            <h3 className="text-2xl text-white mb-4 font-heading">{service.title}</h3>
                            <p className="text-muted text-sm leading-relaxed mb-6 group-hover:text-white/80 transition-colors">
                                {service.description}
                            </p>

                            <span className="text-xs uppercase tracking-widest text-primary opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 inline-block">
                                Learn More
                            </span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
