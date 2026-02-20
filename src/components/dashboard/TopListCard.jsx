import React from 'react';
import { Link } from 'react-router-dom';

/**
 * TopListCard — Ranked list card.
 * @param {string}   title  - Card title
 * @param {string[]} items  - List of item labels
 * @param {string}   to     - Arrow CTA link
 */
const TopListCard = ({ title, items = [], to = '#' }) => {
    return (
        <div className="flex flex-col justify-between rounded-2xl p-5 bg-white border border-[#ed6f00] shadow-sm hover:shadow-md transition-shadow duration-200 h-full">
            <p className="text-sm font-semibold text-[#001f6c] mb-4">{title}</p>

            <ol className="flex-1 space-y-2">
                {items.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                        <span className="mt-0.5 shrink-0 w-5 h-5 rounded-full bg-[#001f6c]/8 text-[#001f6c] text-[10px] font-bold flex items-center justify-center">
                            {idx + 1}
                        </span>
                        <span className="text-xs text-[#4a5878] leading-snug">{item}</span>
                    </li>
                ))}
            </ol>

            <div className="flex justify-end mt-4">
                <Link to={to} className="text-[#001f6c]/40 hover:text-[#ed6f00] transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                        <path fillRule="evenodd" d="M8.25 3.75H19.5a.75.75 0 01.75.75v11.25a.75.75 0 01-1.5 0V6.31L5.03 20.03a.75.75 0 01-1.06-1.06L17.69 5.25H8.25a.75.75 0 010-1.5z" clipRule="evenodd" />
                    </svg>
                </Link>
            </div>
        </div>
    );
};

export default TopListCard;
