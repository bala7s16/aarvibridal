import React from 'react';
import { Instagram, MapPin, Phone } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-black text-white pt-24 pb-12 border-t border-white/5">
            <div className="container grid grid-cols-1 md:grid-cols-4 gap-16 mb-24">
                {/* Brand */}
                <div className="col-span-1 md:col-span-2 pr-12">
                    <h2 className="text-4xl font-heading text-white mb-6">
                        Aarvi <span className="text-primary italic font-light">Bridal</span>
                    </h2>
                    <p className="text-muted mb-8 font-light leading-relaxed max-w-md">
                        Enhancing your natural beauty for your most special day. We specialize in South Indian bridal traditions, creating looks that are timeless, elegant, and uniquely you.
                    </p>
                    <a
                        href="https://www.instagram.com/aarvi_bridal_studio"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:text-white transition-colors uppercase tracking-widest text-xs border-b border-primary hover:border-white pb-1 inline-block"
                    >
                        Follow on Instagram
                    </a>
                </div>

                {/* Navigation */}
                <div>
                    <h3 className="text-white text-sm uppercase tracking-widest mb-8">Menu</h3>
                    <ul className="space-y-4 text-muted font-light">
                        <li><a href="#about" className="hover:text-primary transition-colors">About Us</a></li>
                        <li><a href="#services" className="hover:text-primary transition-colors">Services</a></li>
                        <li><a href="#gallery" className="hover:text-primary transition-colors">Portfolio</a></li>
                        <li><a href="#contact" className="hover:text-primary transition-colors">Book Now</a></li>
                    </ul>
                </div>

                {/* Contact */}
                <div>
                    <h3 className="text-white text-sm uppercase tracking-widest mb-8">Contact</h3>
                    <ul className="space-y-6 text-muted font-light">
                        <li>
                            <p className="text-white mb-1">Visit Us</p>
                            <span>Kangeyam, Tamil Nadu</span>
                        </li>
                        <li>
                            <p className="text-white mb-1">Call Us</p>
                            <a href="tel:9626954731" className="hover:text-primary transition-colors">9626954731</a>
                        </li>
                        <li>
                            <p className="text-white mb-1">Email Us</p>
                            <a href="mailto:contact@aarvibridal.com" className="hover:text-primary transition-colors">contact@aarvibridal.com</a>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Copyright */}
            <div className="container flex flex-col md:flex-row justify-between items-center text-muted/40 text-xs uppercase tracking-widest pt-8 border-t border-white/5">
                <p>&copy; {new Date().getFullYear()} Aarvi Bridal Studio.</p>
                <div className="flex gap-8 mt-4 md:mt-0">
                    <span>Privacy Policy</span>
                    <span>Terms of Service</span>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
