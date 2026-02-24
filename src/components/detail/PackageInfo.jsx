import React, { useState } from 'react';

/**
 * PackageInfo — Package highlights with icons + description + amenities.
 *
 * @param {string}   accommodation — hotel/resort name
 * @param {string}   days          — e.g. "7 Noches"
 * @param {string}   guestType     — e.g. "Individual", "Pareja", "Familia"
 * @param {string}   boardType     — e.g. "Todo Incluido"
 * @param {string}   description   — long description text
 * @param {Array}    amenities     — [{ icon: ReactNode, label: string }]
 */
const PackageInfo = ({ accommodation, days, guestType, boardType, description, amenities = [] }) => {
    const [expanded, setExpanded] = useState(false);

    const highlights = [
        {
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Z" />
                </svg>
            ),
            label: 'Alojamiento',
            value: accommodation,
        },
        {
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
                </svg>
            ),
            label: 'Días',
            value: days,
        },
        {
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                </svg>
            ),
            label: 'Tipo de Huésped',
            value: guestType,
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
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-x-1">
                    {highlights.map((h, i) => (
                        <div key={i} className="flex items-center gap-4">
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
                    <h2 className="text-2xl font-bold text-[#001f6c] mb-4">Sobre el Paquete</h2>
                    <p className="text-[15px] leading-relaxed text-gray-600 font-medium">{displayText}</p>
                    {isLong && (
                        <button
                            type="button"
                            onClick={() => setExpanded((v) => !v)}
                            className="mt-4 text-[15px] font-bold text-[#ed6f00] hover:text-[#ed6f00]/90 transition-colors flex items-center gap-1.5"
                        >
                            {expanded ? 'Leer menos' : 'Leer mas'}
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

            {/* ── Hotel & Amenities ──────────────────────────────── */}
            {amenities.length > 0 && (
                <div>
                    <h2 className="text-2xl font-bold text-[#001f6c] mb-4">Caracteristicas del Hotel</h2>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                        {amenities.map((a, i) => (
                            <div
                                key={i}
                                className="flex items-center gap-2.5 bg-gray-50 border border-gray-100 rounded-xl px-4 py-3 h-14 text-sm font-medium text-[#001f6c]/80"
                            >
                                <span className="shrink-0 text-gray-400">{a.icon}</span>
                                {a.label}
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default PackageInfo;
