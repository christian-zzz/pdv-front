import React, { useState } from 'react';
import { getFeatureIcon } from '../../utils/featureIcons';

/**
 * AccommodationInfo — matches PackageInfo layout patterns exactly.
 *
 * @param {number} stars       — 1–5
 * @param {string} destination — location text
 * @param {string} boardType   — e.g. "Todo Incluido"
 * @param {string} description — long description text
 * @param {Array}  amenities   — [{ icon: 'wifi', label: 'WiFi Libre' }]
 */
const AccommodationInfo = ({ stars, destination, boardType, description, amenities = [] }) => {
    const [expanded, setExpanded] = useState(false);

    const highlights = [
        {
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                </svg>
            ),
            label: 'Destino',
            value: destination,
        },
        {
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                    <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
                </svg>
            ),
            label: 'Categoría',
            value: `${stars} Estrellas`,
        },
        {
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.568 3H5.25A2.25 2.25 0 0 0 3 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 0 0 5.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 0 0 9.568 3Z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 6h.008v.008H6V6Z" />
                </svg>
            ),
            label: 'Régimen',
            value: boardType,
        },
    ];

    const SHORT_LENGTH = 280;
    const isLong = description && description.length > SHORT_LENGTH;
    const displayText = expanded || !isLong ? description : description.slice(0, SHORT_LENGTH) + '…';

    return (
        <div className="space-y-10">
            {/* ── Highlights card ─────────────────────────────────── */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-2 sm:p-4">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-x-1">
                    {highlights.map((h, i) => (
                        <div key={i} className="flex items-center gap-4 p-2">
                            <div className="shrink-0 w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center text-[#ed6f00]">
                                {h.icon}
                            </div>
                            <div>
                                <p className="text-sm font-bold text-[#001f6c]">{h.value}</p>
                                <p className="text-xs text-gray-500 mt-0.5">{h.label}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* ── Description ─────────────────────────────────────── */}
            {description && (
                <div>
                    <h2 className="text-2xl font-bold text-[#001f6c] mb-4">Acerca del Hotel</h2>
                    <p className="text-[15px] leading-relaxed text-gray-600 font-medium">{displayText}</p>
                    {isLong && (
                        <button
                            type="button"
                            onClick={() => setExpanded((v) => !v)}
                            className="mt-4 text-[15px] font-bold text-[#ed6f00] hover:text-[#ed6f00]/90 transition-colors flex items-center gap-1.5"
                        >
                            {expanded ? 'Leer menos' : 'Leer más'}
                            <svg
                                xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                strokeWidth={3} stroke="currentColor"
                                className={`w-3.5 h-3.5 transition-transform duration-200 ${expanded ? 'rotate-180' : ''}`}
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                            </svg>
                        </button>
                    )}
                </div>
            )}

            {/* ── Amenities ───────────────────────────────────────── */}
            {amenities.length > 0 && (
                <div>
                    <h2 className="text-2xl font-bold text-[#001f6c] mb-4">Servicios y Comodidades</h2>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                        {amenities.map((item, idx) => (
                            <div
                                key={idx}
                                className="flex items-center gap-2.5 bg-gray-50 border border-gray-100 rounded-xl px-4 py-3 h-14 text-sm font-medium text-[#001f6c]/80"
                            >
                                <span className="shrink-0 text-[#ed6f00]">{getFeatureIcon(item.icon)}</span>
                                {item.label}
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default AccommodationInfo;
