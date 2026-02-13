import React from 'react';

const PromoCard = ({
    image,
    imageTag,
    imageTagSub,
    title,
    subtitle,
    priceLabel,
    priceValue,
    ctaLabel,
    onCtaClick,
    className = '',
}) => {
    return (
        <div
            className={`w-full max-w-[220px] sm:max-w-[240px] bg-white rounded-2xl shadow-lg overflow-hidden border border-white/70 transition-transform duration-200 hover:scale-[1.02] ${className}`}
        >
            <div className="relative w-full  overflow-hidden">
                <img
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover"
                />

            </div>

            <div className="px-4 py-3">
                <h3 className="text-sm font-semibold text-[#001f6c] leading-tight">
                    {title}
                </h3>
                <p className="mt-1 text-[11px] text-[#6c7eab] leading-snug">
                    {subtitle}
                </p>

                <div className="mt-3 flex items-center justify-between gap-3">
                    <p className="text-xs font-semibold text-[#001f6c]">
                        {priceLabel}{' '}
                        <span className="text-[#001f6c]">{priceValue}</span>
                    </p>
                    <button
                        type="button"
                        onClick={onCtaClick}
                        className="rounded-full bg-[#ed6f00] px-4 py-1.5 text-xs font-semibold text-white shadow-md transition-transform duration-200 hover:scale-[1.02]"
                    >
                        {ctaLabel}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default PromoCard;
