import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PhoneInputField from './PhoneInputField';
import EnquiryModal from './EnquiryModal';

const AmenitiesIconGrid = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const navigate = useNavigate();
    // 6 Premium amenities mirroring the structure
    const allAmenities = [
        {
            title: "Kid's Play Area",
            description: "A safe and fun environment for children to explore and play.",
            icon: (
                <svg className="w-12 h-12 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            )
        },
        {
            title: "Open Party Lawn",
            description: "Perfect space for hosting grand celebrations and social gatherings.",
            icon: (
                <svg className="w-12 h-12 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
            )
        },
        {
            title: "Open Amphitheatre",
            description: "A grand outdoor space for performances and community events.",
            icon: (
                <svg className="w-12 h-12 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                </svg>
            )
        },
        {
            title: "Outdoor Gym",
            description: "A well-equipped outdoor fitness zone for a healthy lifestyle.",
            icon: (
                <svg className="w-12 h-12 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
            )
        },
        {
            title: "Badminton Court",
            description: "Indoor court designed for professional-level sports and recreation.",
            icon: (
                <svg className="w-12 h-12 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M9 10l5 5m0-5l-5 5" />
                </svg>
            )
        },
        {
            title: "Home Theatre",
            description: "Private cinematic experience within the comfort of your villa.",
            icon: (
                <svg className="w-12 h-12 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M7 4h10M7 20h10M5 4c-1 0-2 1-2 2v12c0 1 1 2 2 2h14c1 0 2-1 2-2V6c0-1-1-2-2-2H5z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M9 10l5 2-5 2V10z" />
                </svg>
            )
        },
        {
            title: "Swimming Pool with Kids Pool",
            description: "Luxurious infinity pool with a dedicated safe zone for children.",
            icon: (
                <svg className="w-12 h-12 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M21 16.5c0 .38-.21.71-.53.88l-7.97 4.13a1 1 0 01-.98 0l-7.97-4.13a1 1 0 01-.53-.88V7.5c0-.38.21-.71.53-.88l7.97-4.13a1 1 0 01.98 0l7.97 4.13c.32.17.53.5.53.88v9z" />
                </svg>
            )
        }
    ];

    return (
        <section id="features" className="section-padding bg-white relative">
            <div className="lux-container max-w-[1300px] relative z-10">
                
                {/* Asymmetric Split Layout */}
                <div className="flex flex-col lg:flex-row lg:items-center gap-8 lg:gap-24">
                    
                    {/* Left Column: Info & Button */}
                    <div className="w-full lg:w-[35%] animate-fade-up">

                        
                        <h2 className="text-3xl md:text-5xl lg:text-6xl font-heading leading-[1.1] text-luxury-black mb-6">
                            AMENITIES
                        </h2>
                        
                        <p className="text-xl text-luxury-text leading-relaxed mb-6 lg:mb-10 max-w-sm">
                            Discover a world of thoughtfully curated amenities designed to bring comfort, convenience, and luxury to your modern lifestyle.
                        </p>
                        
                        <button onClick={() => setIsModalOpen(true)} className="btn-gold hidden lg:flex items-center justify-center gap-3 whitespace-nowrap">
                            <svg className="w-5 h-5 shrink-0" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                            </svg>
                            <span>View Amenities</span>
                        </button>
                    </div>

                    {/* Right Column: Grid of Exactly 6 Cards */}
                    <div className="w-full lg:w-[65%]">
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-up animate-delay-1">
                            {allAmenities.map((item, index) => (
                                <div 
                                    key={index} 
                                    className="group bg-[#f8f5f0] rounded-[4px] min-h-[220px] p-6 flex flex-col items-center justify-center text-center transition-all duration-500 hover:bg-[#9b7a44] hover:-translate-y-2 cursor-pointer shadow-sm relative overflow-hidden"
                                >
                                    <div className="flex flex-col items-center justify-center transition-transform duration-500 group-hover:-translate-y-6">
                                        {/* Icon */}
                                        <div className="text-gold group-hover:text-white transition-colors duration-500">
                                            {item.icon}
                                        </div>
                                        {/* Standard Capitalized Title */}
                                        <h4 className="text-[17px] font-heading font-normal text-[#222222] group-hover:text-white transition-colors duration-500 tracking-wide px-4 mb-6">
                                            {item.title}
                                        </h4>
                                    </div>
                                    
                                    <div className="absolute bottom-5 left-0 right-0 px-8 opacity-0 translate-y-8 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-100">
                                        <p className="!text-white text-[13px] font-sans leading-relaxed">
                                            {item.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Mobile View Button - Visible only on mobile, below the 6 boxes */}
                        <div className="mt-10 lg:hidden flex justify-center animate-fade-up">
                            <button onClick={() => setIsModalOpen(true)} className="btn-gold !flex items-center justify-center gap-3 whitespace-nowrap w-full">
                                <svg className="w-5 h-5 shrink-0" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                </svg>
                                <span>View Amenities</span>
                            </button>
                        </div>
                    </div>
                </div>

            </div>

            {/* Popup Form Modal */}
            <EnquiryModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </section>
    );
};

export default AmenitiesIconGrid;
