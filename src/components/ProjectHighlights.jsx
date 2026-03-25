import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PhoneInputField from './PhoneInputField';
import EnquiryModal from './EnquiryModal';

const ProjectHighlights = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const navigate = useNavigate();

    const amenities = [
        {
            title: "3-6 Car Parking Slots Included",
            icon: (
                <svg className="w-10 h-10 lg:w-12 lg:h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M19 17h2a1 1 0 001-1v-5a2 2 0 00-2-2H5a2 2 0 00-2 2v5a1 1 0 001 1h2m2 0h6m-2 2H8m10-2l-2 2m4-2l-2 2" />
                    <circle cx="7" cy="17" r="2" strokeWidth="1" />
                    <circle cx="17" cy="17" r="2" strokeWidth="1" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M7 11V7l5-2 5 2v4" />
                </svg>
            )
        },
        {
            title: "8 ft Luxury Doors & Branded Fittings",
            icon: (
                <svg className="w-10 h-10 lg:w-12 lg:h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M3 12V21h12V3H3v9z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M9 12h1M9 15h1M9 18h1" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M15 3h6v18h-6V3z" />
                    <circle cx="12" cy="12" r="1" fill="currentColor" />
                </svg>
            )
        },
        {
            title: "Premium Sports & Large Pool",
            icon: (
                <svg className="w-10 h-10 lg:w-12 lg:h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M9 10l5 5m0-5l-5 5" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M15 10l-5 5M10 10l5 5" opacity="0.4" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M8 8l8 8M16 8l-8 8" />
                </svg>
            )
        },
        {
            title: "Private Home Theatre Room",
            icon: (
                <svg className="w-10 h-10 lg:w-12 lg:h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M7 4h10M7 20h10M5 4c-1 0-2 1-2 2v12c0 1 1 2 2 2h14c1 0 2-1 2-2V6c0-1-1-2-2-2H5z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M9 10l5 2-5 2V10z" />
                </svg>
            )
        },
    ];

    return (
        <section id="highlights" className="section-padding bg-[#f8f5f0] relative overflow-hidden">
            {/* Background Texture/Pattern */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none select-none">
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#82a330_1px,transparent_1px)] [background-size:40px_40px]"></div>
            </div>

            <div className="lux-container relative z-10">
                <div className="flex flex-col md:flex-row items-center justify-between gap-12 mb-12 md:mb-24 animate-fade-up">
                    <div className="max-w-xl text-center md:text-left">

                        <h2 className="text-3xl md:text-5xl lg:text-6xl font-heading text-luxury-black leading-[1.1]">
                            Project <span className="text-gold italic">Highlights</span>
                        </h2>
                    </div>
                    <div className="hidden md:block">
                        <button onClick={() => setIsModalOpen(true)} className="btn-gold !flex items-center justify-center gap-3 whitespace-nowrap">
                            <svg className="w-5 h-5 shrink-0" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                            <span>Schedule a Site Visit</span>
                        </button>
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-10 animate-fade-up animate-delay-2">
                    {amenities.map((item, index) => (
                        <div 
                            key={index} 
                            className="group bg-white rounded-[4px] min-h-[200px] p-6 lg:p-8 flex flex-col items-center justify-center text-center transition-all duration-500 hover:bg-[#82a330] hover:-translate-y-2 cursor-pointer shadow-sm animate-fade-up animate-delay-1"
                        >
                            <div className="flex flex-col items-center justify-center transition-transform duration-500 group-hover:-translate-y-1">
                                {/* Icon matching Amenities style */}
                                <div className="text-gold group-hover:text-white transition-colors duration-500 mb-6">
                                    {item.icon}
                                </div>

                                {/* Heading matching Amenities style */}
                                <h4 className="text-[17px] lg:text-[19px] font-heading font-normal text-luxury-black group-hover:text-white transition-colors duration-500 tracking-wide px-2 leading-tight">
                                    {item.title}
                                </h4>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Mobile Button - Visible only on mobile, below cards */}
                <div className="mt-12 flex justify-center md:hidden animate-fade-up">
                    <button onClick={() => setIsModalOpen(true)} className="btn-gold !flex items-center justify-center gap-3 whitespace-nowrap w-full sm:w-auto">
                        <svg className="w-5 h-5 shrink-0" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        <span>Schedule a Site Visit</span>
                    </button>
                </div>
            </div>

            {/* Popup Form Modal */}
            <EnquiryModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </section>
    );
};

export default ProjectHighlights;
