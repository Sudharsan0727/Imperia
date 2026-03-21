import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import EnquiryModal from './EnquiryModal';
import about1 from '../assets/img/about1.jpg';
import about2 from '../assets/img/about2.jpg';

const AboutUs = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [scrollProgress, setScrollProgress] = useState(0);
    const sectionRef = useRef(null);
    const navigate = useNavigate();

    useEffect(() => {
        const handleScroll = () => {
            if (sectionRef.current) {
                const rect = sectionRef.current.getBoundingClientRect();
                const windowHeight = window.innerHeight;
                
                // Calculate position relative to viewport (0 = enters bottom, 1 = leaves top)
                const distance = windowHeight - rect.top;
                const totalDistance = windowHeight + rect.height;
                const progress = Math.max(0, Math.min(1, distance / totalDistance));
                
                setScrollProgress(progress);
            }
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Initial position
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // "Inner Move" Parallax (Image moves inside the fixed container)
    // We scale the image up (e.g. 1.3) so it has "room" to move inside its overflow-hidden box
    const innerMoveX_Back = -30 + scrollProgress * 60;   // Moves inside the container
    const innerMoveY_Back = -20 + scrollProgress * 40;
    
    const innerMoveX_Front = 40 - scrollProgress * 80;   // Moves opposite inside the container
    const innerMoveY_Front = 30 - scrollProgress * 60;

    const zoomImg = 1.1 + scrollProgress * 0.15; // Base scale for the "window" effect

    return (
        <section id="about" ref={sectionRef} className="py-24 bg-white relative overflow-hidden">
            <div className="lux-container max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
                
                <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
                    
                    {/* Left Side: Images & Floating Element */}
                    <div className="w-full lg:w-1/2 relative animate-fade-up">
                        
                        {/* Main Image Container - Fixed Background Parallax */}
                        <div className="relative w-11/12 md:w-[85%] aspect-[3/4] overflow-hidden rounded-[30px] shadow-[0_20px_50px_rgba(0,0,0,0.1)] z-10">
                            <div 
                                className="w-full h-full bg-cover bg-center bg-fixed bg-no-repeat transition-transform duration-[3s] hover:scale-105"
                                style={{ backgroundImage: `url(${about2})` }}
                                title="Moonlit Inspired Facade"
                            ></div>
                        </div>

                        {/* Top-Right Overlapping Image - Fixed Background Parallax */}
                        <div className="absolute -top-10 md:-top-16 -right-4 md:-right-8 w-[45%] aspect-[4/3] rounded-[20px] shadow-[0_30px_60px_rgba(0,0,0,0.15)] z-20 border-[8px] md:border-[12px] border-white overflow-hidden animate-fade-up animate-delay-2 hidden sm:block">
                            <div 
                                className="w-full h-full bg-cover bg-center bg-fixed bg-no-repeat transition-transform duration-[3s] hover:scale-105"
                                style={{ backgroundImage: `url(${about1})` }}
                                title="Moonlit Details"
                            ></div>
                        </div>

                        {/* Bottom-Left Floating Badge */}
                        <div className="absolute -bottom-6 md:-bottom-10 -left-4 md:-left-8 bg-white p-6 md:p-8 rounded-[20px] shadow-[0_20px_40px_rgba(0,0,0,0.12)] z-30 flex items-center gap-4 animate-fade-up animate-delay-1 border border-gray-50">
                            <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center shrink-0">
                                <svg className="w-6 h-6 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/></svg>
                            </div>
                            <div>
                                <p className="font-heading text-3xl text-luxury-black leading-none mb-1">8.17<span className="text-xl">+</span></p>
                                <p className="font-body text-[13px] text-gray-500 whitespace-nowrap">Acres of Luxury</p>
                            </div>
                        </div>

                    </div>

                    {/* Right Side: Typography & Content */}
                    <div className="w-full lg:w-1/2 pt-16 lg:pt-0 animate-fade-up animate-delay-1">
                        
                        {/* Subtitle with Moonlit styling */}
                        <div className="flex items-center gap-3 mb-6">
                            <svg className="w-5 h-5 text-gold" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 0l2 8 8 2-8 2-2 8-2-8-8-2 8-2z" />
                            </svg>
                            <span className="w-10 h-[1px] bg-gold"></span>
                            <span className="font-body text-gold text-[15px] italic tracking-wide">
                                About Us
                            </span>
                        </div>
                        
                        {/* Primary Heading */}
                        <h2 className="text-[40px] md:text-[52px] font-heading mb-6 leading-[1.15] text-[#1e1e1e]">
                            Welcome To Our <br className="hidden md:block"/>
                            Imperia Luxury Villas
                        </h2>
                        
                        {/* Body Text */}
                        <p className="font-body text-[16px] text-gray-500 leading-[1.8] mb-10 text-justify">
                            Welcome to Imperia, where luxury meets comfort in the heart of Coimbatore. Since our inception, we have been dedicated to providing an exceptional lifestyle for our residents, blending modern amenities with timeless elegance. Our beautifully designed 3 to 5 BHK villas offer stunning architecture and plush accommodations, ensuring a restful retreat every single day.
                        </p>

                        <div className="flex bg-[#F9F9F9] p-4 rounded-xl border border-gray-100 mb-10 items-center gap-6 max-w-sm">
                           <p className="font-heading text-4xl text-gold border-r border-gray-200 pr-6">80</p>
                           <p className="font-body text-gray-600 leading-snug">Exclusive<br/>Independent Villas</p>
                        </div>

                        {/* Call to Action - Moonlit Style Button */}
                        <button 
                            onClick={() => setIsModalOpen(true)}
                            className="bg-gold px-12 py-4 text-white font-body text-[15px] font-medium rounded-full hover:bg-[#1e1e1e] hover:-translate-y-1 transition-all duration-300 shadow-xl"
                        >
                            Learn More
                        </button>
                    </div>

                </div>
            </div>
            
            <EnquiryModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </section>
    );
};

export default AboutUs;
