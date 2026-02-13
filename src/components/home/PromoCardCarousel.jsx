import React, { useMemo, useState } from 'react';
import PromoCard from './PromoCard';

const PromoCardCarousel = ({ title, subtitle, items = [], className = '' }) => {
    const visibleCount = 3;
    const [currentIndex, setCurrentIndex] = useState(0);

    const safeItems = useMemo(() => items.filter(Boolean), [items]);
    const maxIndex = Math.max(safeItems.length - visibleCount, 0);

    const handlePrev = () => {
        if (safeItems.length <= visibleCount) {
            return;
        }

        setCurrentIndex((prev) => (prev === 0 ? maxIndex : prev - 1));
    };

    const handleNext = () => {
        if (safeItems.length <= visibleCount) {
            return;
        }

        setCurrentIndex((prev) => (prev === maxIndex ? 0 : prev + 1));
    };

    if (safeItems.length === 0) {
        return null;
    }

    return (
        <div className={`relative w-min justify-self-center ${className}`}>
            {(title || subtitle) && (
                <div className="mb-5 text-center">
                    {title && (
                        <h2 className="text-md font-bold uppercase tracking-wide text-[#001f6c] sm:text-3xl">
                            {title}
                        </h2>
                    )}
                    {subtitle && (
                        <p className="mt-1 text-sm text-[#6c7eab] sm:text-lg">
                            {subtitle}
                        </p>
                    )}
                </div>
            )}
            <button
                type="button"
                onClick={handlePrev}
                disabled={safeItems.length <= visibleCount}
                aria-label="Previous cards"
                className="absolute left-0 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/80 p-2 shadow-md transition disabled:opacity-40"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="h-5 w-5 text-[#001f6c]"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                </svg>
            </button>

            <div className="overflow-hidden">
                <div
                    className="flex gap-6 transition-transform duration-500 ease-out"
                    style={{ transform: `translateX(-${currentIndex * (100 / visibleCount)}%)` }}
                >
                    {safeItems.map((item, index) => (
                        <div
                            key={item.id ?? index}
                            className="shrink-0 flex justify-center"
                            style={{ width: 'calc((100% - 2rem * 2) / 3)' }}
                        >
                            <PromoCard {...item} className="w-full" />
                        </div>
                    ))}
                </div>
            </div>

            <button
                type="button"
                onClick={handleNext}
                disabled={safeItems.length <= visibleCount}
                aria-label="Next cards"
                className="absolute right-0 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/80 p-2 shadow-md transition disabled:opacity-40"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="h-5 w-5 text-[#001f6c]"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
            </button>
        </div>
    );
};

export default PromoCardCarousel;
