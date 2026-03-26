import React, { useState } from 'react';
import EnquiryModal from './EnquiryModal';

const AmenitiesIconGrid = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const amenities = [
        {
            title: "Swimming Pool",
            icon: (
                <svg className="w-8 h-8 md:w-10 md:h-10" fill="none" stroke="currentColor" strokeWidth="1" viewBox="0 0 24 24">
                    <circle cx="12" cy="7" r="2.5" />
                    <path d="M12 2v2M17 4l-1 1M7 4l1 1" />
                    <path d="M4 15c1.5 0 2.5-1 4-1s2.5 1 4 1 2.5-1 4-1 2.5 1 4 1M4 20c1.5 0 2.5-1 4-1s2.5 1 4 1 2.5-1 4-1 2.5 1 4 1" />
                </svg>
            )
        },
        {
            title: "Outdoor Gym",
            icon: (
                <svg className="w-8 h-8 md:w-10 md:h-10" fill="none" stroke="currentColor" strokeWidth="1.2" viewBox="0 0 24 24">
                    <path d="M6 12h12M6 8v8M18 8v8M4 10v4M20 10v4" />
                </svg>
            )
        },
        {
            title: "Play Area",
            icon: (
                <svg className="w-8 h-8 md:w-10 md:h-10" fill="none" stroke="currentColor" strokeWidth="1" viewBox="0 0 24 24">
                    <path d="M12 3l4 4-4 4-4-4 4-4zM16 11l4 4-4 4-4-4 4-4zM8 11l4 4-4 4-4-4 4-4z" />
                </svg>
            )
        },
        {
            title: "Sports Court",
            icon: (
                <svg className="w-8 h-8 md:w-10 md:h-10" fill="none" stroke="currentColor" strokeWidth="1.2" viewBox="0 0 24 24">
                    <rect x="5" y="5" width="14" height="14" rx="2" />
                    <path d="M12 5v14M5 12h14" />
                    <circle cx="12" cy="12" r="2.5" />
                </svg>
            )
        },
        {
            title: "Party Lawn",
            icon: (
                <svg className="w-8 h-8 md:w-10 md:h-10" fill="none" stroke="currentColor" strokeWidth="1.2" viewBox="0 0 24 24">
                    <path d="M12 22s-6-4-6-10S12 2 12 2s6 4 6 10-6 10-6 10z" />
                    <path d="M12 18s-3-2-3-5 3-5 3-5 3 2 3 5-3 5-3 5z" />
                </svg>
            )
        },
        {
            title: "Amphitheatre",
            icon: (
                <svg className="w-8 h-8 md:w-10 md:h-10" fill="none" stroke="currentColor" strokeWidth="1" viewBox="0 0 24 24">
                    <path d="M5 20c0-10 14-10 14 0" />
                    <path d="M8 20c0-6 8-6 8 0" />
                    <path d="M12 14v6M5 20h14" />
                </svg>
            )
        }
    ];

    return (
        <section className="py-24 bg-white relative">
            <div className="lux-container max-w-7xl mx-auto px-6">
                
                {/* Header Area */}
                <div className="flex justify-between items-end mb-16 md:mb-24">
                    <div>
                        <h2 className="text-[28px] md:text-5xl font-heading tracking-[0.1em] text-[#222222] flex items-center gap-4">
                            PREMIUM <span className="text-gold italic font-normal">AMENITIES</span>
                        </h2>
                    </div>

                </div>

                {/* Amenities Row */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-x-8 gap-y-16 lg:gap-0">
                    {amenities.map((item, index) => (
                        <div key={index} className="flex flex-col items-center group cursor-pointer" onClick={() => setIsModalOpen(true)}>
                            {/* Icon Circle */}
                            <div className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-gold/5 flex items-center justify-center mb-8 transition-all duration-700 group-hover:bg-gold/10 group-hover:scale-105 relative">
                                <div className="text-gold transform transition-transform duration-700 group-hover:scale-110">
                                    {item.icon}
                                </div>
                                {/* Subtle inner border effect */}
                                <div className="absolute inset-0 rounded-full border border-gold/10 scale-90 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-700"></div>
                            </div>

                            {/* Title */}
                            <h4 className="text-[12px] md:text-[14px] font-heading text-center text-[#222222] tracking-[0.15em] uppercase leading-relaxed max-w-[120px] transition-colors duration-500 group-hover:text-gold">
                                {item.title}
                            </h4>
                        </div>
                    ))}
                </div>
            </div>

            <EnquiryModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </section>
    );
};

export default AmenitiesIconGrid;
