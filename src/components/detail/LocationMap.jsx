import React from 'react';

/**
 * LocationMap — Google Maps embed with an "Explorar Mapa" overlay button.
 *
 * @param {string} query      — place name or address for the embed search
 * @param {string} title      — section heading (default: "Ubicación")
 */
const LocationMap = ({ query = '', title = 'Ubicación' }) => {
    const encodedQuery = encodeURIComponent(query);
    const embedUrl = `https://www.google.com/maps?q=${encodedQuery}&output=embed`;
    const mapsLink = `https://www.google.com/maps/search/?api=1&query=${encodedQuery}`;

    return (
        <section className="mx-auto w-full max-w-7xl px-6 sm:px-10 mt-10 pb-6">
            <h2 className="text-2xl font-bold text-[#001f6c] mb-4">{title}</h2>

            <div className="relative w-full rounded-2xl overflow-hidden shadow-sm border border-gray-100">
                <iframe
                    title="Mapa de ubicación"
                    src={embedUrl}
                    className="w-full h-64 sm:h-80 md:h-96 border-0"
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                />

                {/* "Explorar Mapa" overlay */}
                <a
                    href={mapsLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-2 bg-white/95 backdrop-blur-sm rounded-full px-5 py-2.5 shadow-lg text-sm font-semibold text-[#001f6c] hover:bg-white hover:shadow-xl transition-all duration-200"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="#ed6f00" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                    </svg>
                    Explorar Mapa
                </a>
            </div>
        </section>
    );
};

export default LocationMap;
