import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, ArrowRight } from 'lucide-react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        service: '',
        date: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        alert('Thank you! We will contact you soon.');
        setFormData({ name: '', phone: '', service: '', date: '', message: '' });
    };

    const inputClasses = "w-full bg-transparent border-b border-white/20 py-4 text-white placeholder-white/30 outline-none focus:border-primary transition-colors font-light";

    return (
        <section id="contact" className="section-padding bg-bgSecondary">
            <div className="container">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
                    {/* Contact Information */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="text-primary text-sm uppercase tracking-widest block mb-6">Get in Touch</span>
                        <h2 className="text-white mb-12">Start Your <br /> <span className="italic font-light text-primary-light">Journey</span></h2>

                        <div className="space-y-8 mb-16">
                            <div>
                                <p className="text-xs text-primary uppercase tracking-widest mb-2">Visit Us</p>
                                <p className="text-xl text-white font-light leading-relaxed">
                                    Rajaji St, near Raja Glass House,<br />
                                    Kangeyam, Tamil Nadu 638701
                                </p>
                            </div>
                            <div>
                                <p className="text-xs text-primary uppercase tracking-widest mb-2">Contact</p>
                                <p className="text-xl text-white font-light mb-2 hover:text-primary transition-colors">
                                    <a href="tel:9626954731">9626954731</a>
                                </p>
                                <p className="text-xl text-white font-light hover:text-primary transition-colors">
                                    <a href="mailto:contact@aarvibridal.com">contact@aarvibridal.com</a>
                                </p>
                            </div>
                        </div>

                        <div className="w-full h-64 bg-[#1a1a1a] grayscale hover:grayscale-0 transition-all duration-500 overflow-hidden relative border border-white/5">
                            <iframe
                                width="100%"
                                height="100%"
                                title="Aarvi Bridal Studio Location"
                                frameBorder="0"
                                scrolling="no"
                                marginHeight="0"
                                marginWidth="0"
                                src="https://maps.google.com/maps?q=Aarvi+Bridal+Studio,+Kangeyam&t=&z=15&ie=UTF8&iwloc=&output=embed"
                                className="absolute inset-0 opacity-70 hover:opacity-100 transition-opacity"
                            ></iframe>
                        </div>
                    </motion.div>

                    {/* Minimalist Form */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="pt-10"
                    >
                        <form onSubmit={handleSubmit} className="space-y-8">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        required
                                        value={formData.name}
                                        onChange={handleChange}
                                        className={inputClasses}
                                        placeholder="Your Name"
                                    />
                                </div>
                                <div>
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        required
                                        value={formData.phone}
                                        onChange={handleChange}
                                        className={inputClasses}
                                        placeholder="Phone Number"
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="relative">
                                    <select
                                        id="service"
                                        name="service"
                                        value={formData.service}
                                        onChange={handleChange}
                                        className={`${inputClasses} appearance-none cursor-pointer`}
                                    >
                                        <option value="" className="bg-bg text-white">Select Service</option>
                                        <option value="Bridal Makeup" className="bg-bg text-white">Bridal Makeup</option>
                                        <option value="Hair Styling" className="bg-bg text-white">Hair Styling</option>
                                        <option value="Saree Pre-pleating" className="bg-bg text-white">Saree Pre-pleating</option>
                                        <option value="Jewelry Styling" className="bg-bg text-white">Jewelry Styling</option>
                                    </select>
                                </div>
                                <div>
                                    <input
                                        type="date"
                                        id="date"
                                        name="date"
                                        value={formData.date}
                                        onChange={handleChange}
                                        className={`${inputClasses} calendar-invert`}
                                    />
                                </div>
                            </div>

                            <div>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows="4"
                                    value={formData.message}
                                    onChange={handleChange}
                                    className={inputClasses}
                                    placeholder="Tell us about your event details..."
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="group w-full md:w-auto bg-primary text-black px-12 py-5 uppercase tracking-widest text-sm font-bold hover:bg-white transition-colors duration-300 flex items-center justify-center gap-4 mt-8"
                            >
                                Send Inquiry <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
