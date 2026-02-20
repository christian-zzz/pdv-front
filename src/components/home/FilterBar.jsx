import React, { useState } from 'react';
import CustomSelect from './CustomSelect';

// ── Styled date input ─────────────────────────────────────────────────────────
const StyledDate = (props) => (
    <div className="flex flex-col gap-1.5">
        <span className="text-xs font-bold uppercase tracking-wide text-[#001f6c]/70 pl-1">
            Fecha
        </span>
        <input
            type="date"
            className="
                w-full h-11
                rounded-full
                border-2 border-[#001f6c]/20
                bg-white
                pl-4 pr-4
                text-sm font-semibold text-[#001f6c]
                shadow-sm cursor-pointer
                transition-all duration-200
                hover:border-[#ed6f00]/60
                focus:outline-none focus:border-[#ed6f00] focus:ring-2 focus:ring-[#ed6f00]/20
            "
            {...props}
        />
    </div>
);

// ── FilterBar ─────────────────────────────────────────────────────────────────
const FilterBar = () => {
    const [ubicacion, setUbicacion] = useState('Margarita');
    const [dias, setDias] = useState('3 Días');
    const [personas, setPersonas] = useState('Individual');

    const [minPrice, setMinPrice] = useState(50);
    const [maxPrice, setMaxPrice] = useState(200);
    const minLimit = 0;
    const maxLimit = 300;

    const minPercent = ((minPrice - minLimit) / (maxLimit - minLimit)) * 100;
    const maxPercent = ((maxPrice - minLimit) / (maxLimit - minLimit)) * 100;

    return (
        <section className="px-4 sm:px-6 py-4">
            <div className="mx-auto w-full max-w-5xl rounded-2xl bg-white/90 p-5 shadow-lg backdrop-blur-md border border-[#001f6c]/10">

                {/* Filters row */}
                <div className="grid gap-4 lg:grid-cols-[1fr_1fr_1fr_1fr_auto] lg:items-end">

                    <CustomSelect
                        label="Ubicación"
                        options={['Margarita', 'Los Roques', 'Morrocoy', 'Mérida', 'Canaima']}
                        value={ubicacion}
                        onChange={setUbicacion}
                    />

                    <StyledDate />

                    <CustomSelect
                        label="Días"
                        options={['1 Día', '3 Días', '5 Días', '7 Días', '10+ Días']}
                        value={dias}
                        onChange={setDias}
                    />

                    <CustomSelect
                        label="Personas"
                        options={['Individual', 'Pareja', 'Familia', 'Grupo']}
                        value={personas}
                        onChange={setPersonas}
                    />

                    {/* Search button */}
                    <button
                        type="button"
                        aria-label="Buscar"
                        className="mx-auto flex h-11 w-11 items-center justify-center rounded-full bg-[#ed6f00] text-white shadow-md transition-all duration-200 hover:bg-[#ed6f00]/80 hover:scale-105 active:scale-95"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="h-5 w-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                        </svg>
                    </button>
                </div>

                {/* Price range */}
                <div className="mt-5 border-t border-[#001f6c]/10 pt-4">
                    <div className="flex items-center justify-between mb-3">
                        <p className="text-xs font-bold uppercase tracking-wide text-[#001f6c]/70">
                            Rango de precio
                        </p>
                        <div className="flex items-center gap-3 text-sm font-bold text-[#001f6c]">
                            <span className="flex items-center gap-1">
                                <span className="text-[10px] text-[#ed6f00] font-semibold uppercase">Desde</span>
                                ${minPrice}
                            </span>
                            <span className="text-[#001f6c]/30">—</span>
                            <span className="flex items-center gap-1">
                                <span className="text-[10px] text-[#ed6f00] font-semibold uppercase">Hasta</span>
                                ${maxPrice}
                            </span>
                        </div>
                    </div>

                    <div className="relative mx-auto h-2 w-full max-w-md">
                        <div className="absolute inset-0 rounded-full bg-[#001f6c]/15" />
                        <div
                            className="absolute h-2 rounded-full bg-[#ed6f00]"
                            style={{ left: `${minPercent}%`, right: `${100 - maxPercent}%` }}
                        />
                        <input
                            type="range" min={minLimit} max={maxLimit} value={minPrice}
                            onChange={(e) => setMinPrice(Math.min(Number(e.target.value), maxPrice - 10))}
                            className="price-range price-range-min"
                        />
                        <input
                            type="range" min={minLimit} max={maxLimit} value={maxPrice}
                            onChange={(e) => setMaxPrice(Math.max(Number(e.target.value), minPrice + 10))}
                            className="price-range price-range-max"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FilterBar;
