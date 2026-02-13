import React, { useState, useEffect } from 'react';
import slider1 from '../../assets/slider1.webp';
import slider2 from '../../assets/slider2.webp';

const HeroSlider = () => {
    const images = [
        slider1,
        slider2,
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 5000); // Change image every 5 seconds

        return () => clearInterval(interval);
    }, [images.length]);

    return (
        <div className="absolute top-0 left-0 w-full overflow-hidden">
            {/* Background Images Layer */}
            <div className="relative h-[66vh] w-full">
                {images.map((img, index) => (
                    <div
                        key={index}
                        className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentIndex ? 'opacity-100' : 'opacity-0'}`}
                    >
                        <img
                            src={img}
                            alt={`Slide ${index + 1}`}
                            className="w-full object-fit"
                        />
                    </div>
                ))}
            </div>

            {/* Content Container */}
            <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 text-center">



                {/* Search Bar Container */}
                <div className="absolute bottom-16 w-full max-w-4xl bg-white/20 backdrop-blur-md border border-white/30 rounded-full p-2 flex shadow-2xl skew-y-0 hover:scale-[1.01] transition-transform duration-300">
                    <div className="flex-grow relative">
                        <input
                            type="text"
                            placeholder="Ciudad, Destino, Hotel."
                            className="w-full h-14 pl-8 pr-4 bg-transparent text-white placeholder-gray-100 text-lg outline-none rounded-full font-medium"
                        />
                        {/* Search Icon */}
                        <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6 text-white">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>

            {/* Slider Indicators (Dots) */}
            <div className="absolute bottom-10 left-0 right-0 flex justify-center gap-3 z-20">
                {images.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentIndex(index)}
                        className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentIndex ? 'bg-white scale-125' : 'bg-white/40 hover:bg-white/60'
                            }`}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>
        </div>
    );
};

export default HeroSlider;
