import React from 'react';
import { Link } from 'react-router-dom';

const ArrowIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
        <path fillRule="evenodd" d="M8.25 3.75H19.5a.75.75 0 01.75.75v11.25a.75.75 0 01-1.5 0V6.31L5.03 20.03a.75.75 0 01-1.06-1.06L17.69 5.25H8.25a.75.75 0 010-1.5z" clipRule="evenodd" />
    </svg>
);

/**
 * StatsCard — the entire card is clickable. Hovering reveals the orange gradient.
 * @param {string}        label - Card label
 * @param {string|number} value - Statistic value
 * @param {string}        to    - Link target
 */
const StatsCard = ({ label, value, to = '#' }) => {
    return (
        <Link
            to={to}
            className="group relative flex flex-col justify-between rounded-2xl p-5 overflow-hidden min-h-[130px] shadow-sm hover:shadow-lg hover:shadow-orange-200 transition-all duration-300"
        >
            {/* ── Base: orange gradient (always underneath) ── */}
            <div className="absolute inset-0 bg-linear-to-br from-[#ed6f00] to-[#f5930a] rounded-2xl" />

            {/* ── Overlay: white card that fades out on hover ── */}
            <div className="absolute inset-0 bg-white border border-[#ed6f00] rounded-2xl transition-opacity duration-300 group-hover:opacity-0" />

            {/* ── Decorative circles (appear on hover) ── */}
            <div className="absolute -top-6 -right-6 w-24 h-24 rounded-full bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="absolute -bottom-4 -left-4 w-16 h-16 rounded-full bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            {/* ── Content ── */}
            <p className="relative z-10 text-sm font-semibold text-[#001f6c] group-hover:text-white transition-colors duration-300 leading-snug">
                {label}
            </p>

            <div className="relative z-10 flex items-end justify-between">
                <span className="text-5xl font-extrabold tracking-tight text-[#001f6c] group-hover:text-white transition-colors duration-300">
                    {value}
                </span>
                <span className="text-[#001f6c]/40 group-hover:text-white/80 transition-colors duration-300">
                    <ArrowIcon />
                </span>
            </div>
        </Link>
    );
};

export default StatsCard;
