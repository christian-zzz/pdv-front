import React, { useState, useEffect } from 'react';
import slider1 from '../../assets/slider1.webp';
import slider2 from '../../assets/slider2.webp';
import { MagnifyingGlassIcon } from '@phosphor-icons/react';

const HeroSlider = () => {
    const images = [slider1, slider2];
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 5000);
        return () => clearInterval(interval);
    }, [images.length]);

    return (
        <div className="relative w-full overflow-hidden">
            {/* Image stack — all images occupy col-start-1 row-start-1 */}
            <div className="relative grid w-full">
                {images.map((img, index) => (
                    <div
                        key={index}
                        className={`col-start-1 row-start-1 w-full transition-opacity duration-1000 ease-in-out ${index === currentIndex ? 'opacity-100' : 'opacity-0'
                            }`}
                    >
                        <img
                            src={img}
                            alt={`Slide ${index + 1}`}
                            className="h-48 sm:h-64 md:h-80 lg:h-96 w-full object-cover rounded-xl"
                        />
                    </div>
                ))}
            </div>

            {/* Content: search bar + dots */}
            <div className="relative z-20 flex flex-col items-center px-4 pt-3 text-center sm:px-6">
                {/* Search Bar */}
                <div className="w-full max-w-md sm:max-w-lg md:max-w-xl border border-[#001f6c] rounded-full p-1.5 sm:p-2 flex bg-white/80 backdrop-blur-sm hover:scale-[1.01] transition-transform duration-300">
                    <div className="grow relative">
                        <input
                            type="text"
                            placeholder="Ciudad, Destino, Hotel."
                            className="w-full h-10 sm:h-11 pl-4 sm:pl-6 pr-10 text-[#001f6c] placeholder-[#6c7eab] text-sm sm:text-base outline-none rounded-full font-medium bg-transparent"
                        />
                        <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none">
                            <MagnifyingGlassIcon className="w-5 h-5 text-[#ed6f00]" />
                        </div>
                    </div>
                </div>

                {/* Dots */}
                <div className="my-2 sm:mt-3 flex justify-center gap-2 sm:gap-3">
                    {images.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentIndex(index)}
                            className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-1 ${index === currentIndex
                                    ? 'bg-[#ed6f00] scale-125'
                                    : 'bg-[#001f6c]/30 hover:bg-[#001f6c]/50'
                                }`}
                            aria-label={`Go to slide ${index + 1}`}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default HeroSlider;
