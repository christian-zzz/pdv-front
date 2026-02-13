import React, { useState } from 'react';

const FilterBar = () => {
    const [minPrice, setMinPrice] = useState(50);
    const [maxPrice, setMaxPrice] = useState(200);
    const minLimit = 0;
    const maxLimit = 300;

    const minPercent = ((minPrice - minLimit) / (maxLimit - minLimit)) * 100;
    const maxPercent = ((maxPrice - minLimit) / (maxLimit - minLimit)) * 100;

    return (
        <section className="px-4 sm:px-6 py-4">
            <div className="mx-auto w-full max-w-5xl rounded-2xl bg-white/90 p-4 shadow-lg backdrop-blur-md">
                <div className="grid gap-4 lg:grid-cols-[1fr_1fr_1fr_1fr_auto] lg:items-end">
                    <label className="flex flex-col gap-2 text-sm font-semibold text-[#001f6c]">
                        Ubicación
                        <select className="h-10 rounded-full border border-[#001f6c] bg-transparent px-4 text-sm text-[#001f6c] outline-none">
                            <option>Margarita</option>
                            <option>Los Roques</option>
                            <option>Morrocoy</option>
                        </select>
                    </label>

                    <label className="flex flex-col gap-2 text-sm font-semibold text-[#001f6c]">
                        Fecha
                        <input
                            type="date"
                            className="h-10 rounded-full border border-[#001f6c] bg-transparent px-4 text-sm text-[#001f6c] outline-none"
                        />
                    </label>

                    <label className="flex flex-col gap-2 text-sm font-semibold text-[#001f6c]">
                        Días
                        <select className="h-10 rounded-full border border-[#001f6c] bg-transparent px-4 text-sm text-[#001f6c] outline-none">
                            <option>3 Días</option>
                            <option>5 Días</option>
                            <option>7 Días</option>
                        </select>
                    </label>

                    <label className="flex flex-col gap-2 text-sm font-semibold text-[#001f6c]">
                        Personas
                        <select className="h-10 rounded-full border border-[#001f6c] bg-transparent px-4 text-sm text-[#001f6c] outline-none">
                            <option>Individual</option>
                            <option>Pareja</option>
                            <option>Familia</option>
                        </select>
                    </label>

                    <button
                        type="button"
                        className="mx-auto flex h-10 w-10 items-center justify-center rounded-full border border-[#ed6f00] text-[#ed6f00] shadow-sm transition-transform duration-200 hover:scale-105"
                        aria-label="Buscar"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                        </svg>
                    </button>
                </div>

                <div className="mt-4">
                    <p className="text-center text-sm font-semibold text-[#001f6c]">Precios</p>
                    <div className="mt-2 flex items-center justify-center gap-4 text-xs font-semibold text-[#ed6f00]">
                        <span className="flex items-center gap-1">
                            Desde
                            <span className="text-[#001f6c]">${minPrice}</span>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-3 w-3">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m8 9 4-4 4 4M8 15l4 4 4-4" />
                            </svg>
                        </span>
                        <span className="flex items-center gap-1">
                            Hasta
                            <span className="text-[#001f6c]">${maxPrice}</span>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-3 w-3">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m8 9 4-4 4 4M8 15l4 4 4-4" />
                            </svg>
                        </span>
                    </div>

                    <div className="relative mx-auto mt-3 h-2 w-full max-w-md">
                        <div className="absolute inset-0 rounded-full bg-[#001f6c]/20" />
                        <div
                            className="absolute h-2 rounded-full bg-[#001f6c]"
                            style={{ left: `${minPercent}%`, right: `${100 - maxPercent}%` }}
                        />
                        <input
                            type="range"
                            min={minLimit}
                            max={maxLimit}
                            value={minPrice}
                            onChange={(event) =>
                                setMinPrice(
                                    Math.min(Number(event.target.value), maxPrice - 10),
                                )
                            }
                            className="price-range price-range-min"
                        />
                        <input
                            type="range"
                            min={minLimit}
                            max={maxLimit}
                            value={maxPrice}
                            onChange={(event) =>
                                setMaxPrice(
                                    Math.max(Number(event.target.value), minPrice + 10),
                                )
                            }
                            className="price-range price-range-max"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FilterBar;
