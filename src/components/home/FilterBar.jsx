import React, { useState, useRef, useEffect } from 'react';
import CustomSelect from './CustomSelect';
import { MagnifyingGlassIcon, CalendarIcon, UsersIcon, PlusIcon, MinusIcon, CaretDownIcon } from '@phosphor-icons/react';

// ── Helpers ──────────────────────────────────────────────────────────────────
const Counter = ({ label, value, onChange, min = 0 }) => (
    <div className="flex items-center justify-between py-2 border-b border-gray-100 last:border-0">
        <span className="text-sm font-semibold text-[#001f6c]">{label}</span>
        <div className="flex items-center gap-3">
            <button type="button" onClick={() => onChange(Math.max(min, value - 1))} className="w-7 h-7 rounded-full border border-gray-300 flex items-center justify-center text-gray-500 hover:border-[#ed6f00] hover:text-[#ed6f00] transition-colors"><MinusIcon weight="bold" className="w-3 h-3" /></button>
            <span className="text-sm font-bold text-[#001f6c] w-4 text-center">{value}</span>
            <button type="button" onClick={() => onChange(value + 1)} className="w-7 h-7 rounded-full border border-gray-300 flex items-center justify-center text-gray-500 hover:border-[#ed6f00] hover:text-[#ed6f00] transition-colors"><PlusIcon weight="bold" className="w-3 h-3" /></button>
        </div>
    </div>
);

const GuestsDropdown = ({ value, onChange }) => {
    const [open, setOpen] = useState(false);
    const ref = useRef(null);
    const { adults = 2, children = 0, rooms = 1 } = value || {};

    useEffect(() => {
        const handler = (e) => { if (ref.current && !ref.current.contains(e.target)) setOpen(false); };
        document.addEventListener('mousedown', handler);
        return () => document.removeEventListener('mousedown', handler);
    }, []);

    const handleUpdate = (k, v) => onChange({ ...value, [k]: v });

    return (
        <div ref={ref} className="relative flex flex-col gap-1.5 w-full">
            <span className="text-xs font-bold uppercase tracking-wide text-[#001f6c]/70 pl-1">Personas</span>
            <button 
                type="button" 
                onClick={() => setOpen(!open)} 
                className={`
                    flex items-center justify-between h-11 rounded-full border-2 bg-white px-4 
                    text-sm font-semibold text-[#001f6c] shadow-sm cursor-pointer transition-all duration-200
                    ${open ? 'border-[#ed6f00] ring-2 ring-[#ed6f00]/20' : 'border-[#001f6c]/20 hover:border-[#ed6f00]/60'}
                `}
            >
                <div className="flex items-center gap-2 truncate">
                    <UsersIcon className="w-5 h-5 text-gray-400 shrink-0" />
                    <span>{adults} ad · {children} niñ · {rooms} hab</span>
                </div>
                <CaretDownIcon className={`shrink-0 w-4 h-4 text-[#ed6f00] transition-transform duration-200 ${open ? 'rotate-180' : ''}`} />
            </button>
            {open && (
                <div className="absolute top-full right-0 left-0 mt-2 p-4 bg-white border-2 border-[#ed6f00]/30 rounded-2xl shadow-xl shadow-[#001f6c]/10 z-50 animate-in fade-in zoom-in-95 duration-150">
                    <Counter label="Adultos" value={adults} onChange={(v) => handleUpdate('adults', v)} min={1} />
                    <Counter label="Niños" value={children} onChange={(v) => handleUpdate('children', v)} />
                    <Counter label="Habitaciones" value={rooms} onChange={(v) => handleUpdate('rooms', v)} min={1} />
                </div>
            )}
        </div>
    );
};

const StyledDateRange = ({ label, startDate, endDate, onStartChange, onEndChange }) => (
    <div className="flex flex-col gap-1.5 w-full">
        <span className="text-xs font-bold uppercase tracking-wide text-[#001f6c]/70 pl-1">{label}</span>
        <div className="flex items-center gap-2 h-11 rounded-full border-2 border-[#001f6c]/20 bg-white px-4 shadow-sm transition-all focus-within:border-[#ed6f00] focus-within:ring-2 focus-within:ring-[#ed6f00]/20 hover:border-[#ed6f00]/60 relative">
            <CalendarIcon className="w-5 h-5 text-[#ed6f00] shrink-0" />
            <div className="relative flex-1">
                <input type="date" value={startDate} onChange={onStartChange} className="w-full bg-transparent text-sm font-semibold text-[#001f6c] focus:outline-none cursor-pointer [&::-webkit-calendar-picker-indicator]:opacity-0 [&::-webkit-calendar-picker-indicator]:absolute [&::-webkit-calendar-picker-indicator]:inset-0 [&::-webkit-calendar-picker-indicator]:w-full [&::-webkit-calendar-picker-indicator]:h-full" />
            </div>
            <span className="text-gray-400 font-bold">—</span>
            <div className="relative flex-1">
                <input type="date" value={endDate} onChange={onEndChange} className="w-full bg-transparent text-sm font-semibold text-[#001f6c] focus:outline-none cursor-pointer [&::-webkit-calendar-picker-indicator]:opacity-0 [&::-webkit-calendar-picker-indicator]:absolute [&::-webkit-calendar-picker-indicator]:inset-0 [&::-webkit-calendar-picker-indicator]:w-full [&::-webkit-calendar-picker-indicator]:h-full" />
            </div>
        </div>
    </div>
);

// ── FilterBar ─────────────────────────────────────────────────────────────────
const FilterBar = ({ onSearch }) => {
    const [ubicacion, setUbicacion] = useState('Margarita');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [guests, setGuests] = useState({ adults: 2, children: 0, rooms: 1 });
    const [selectedPrice, setSelectedPrice] = useState(null);

    const BUCKETS = [
        { label: 'Económico (< $100)', min: 0, max: 100 },
        { label: 'Estándar ($100 - $300)', min: 100, max: 300 },
        { label: 'Premium ($300+)', min: 300, max: 99999 },
    ];

    const handleSearchClick = () => {
        if (onSearch) {
            onSearch({
                ubicacion,
                startDate,
                endDate,
                guests,
                priceRange: selectedPrice ? { min: selectedPrice.min, max: selectedPrice.max } : null
            });
        }
    };

    return (
        <section className="px-4 sm:px-6 py-4">
            <div className="mx-auto w-full max-w-5xl rounded-2xl bg-white/90 p-5 shadow-lg backdrop-blur-md border border-[#001f6c]/10">

                {/* Filters row */}
                <div className="grid gap-4 lg:grid-cols-[1.2fr_1.8fr_1.2fr_auto] lg:items-end">

                    <CustomSelect
                        label="Ubicación"
                        options={['Margarita', 'Los Roques', 'Morrocoy', 'Mérida', 'Canaima']}
                        value={ubicacion}
                        onChange={setUbicacion}
                    />

                    <StyledDateRange 
                        label="Fecha Estancia" 
                        startDate={startDate} 
                        endDate={endDate} 
                        onStartChange={(e) => setStartDate(e.target.value)} 
                        onEndChange={(e) => setEndDate(e.target.value)} 
                    />

                    <GuestsDropdown value={guests} onChange={setGuests} />

                    {/* Search button */}
                    <div className="flex justify-center">
                        <button
                            type="button"
                            onClick={handleSearchClick}
                            aria-label="Buscar"
                            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#ed6f00] text-white shadow-md transition-all duration-200 hover:bg-[#d96200] hover:scale-105 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ed6f00] focus-visible:ring-offset-2"
                        >
                            <MagnifyingGlassIcon className="h-5 w-5" />
                        </button>
                    </div>
                </div>

                {/* Price range buckets */}
                <div className="mt-5 border-t border-[#001f6c]/10 pt-4">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                        <p className="text-xs font-bold uppercase tracking-wide text-[#001f6c]/70">
                            Rango de precio
                        </p>
                        <div className="flex flex-wrap gap-2">
                            {BUCKETS.map((b) => {
                                const active = selectedPrice?.label === b.label;
                                return (
                                    <button
                                        key={b.label}
                                        type="button"
                                        onClick={() => setSelectedPrice(active ? null : b)}
                                        className={`px-4 py-1.5 rounded-full text-xs font-semibold border transition-all select-none
                                            ${active 
                                                ? 'bg-[#ed6f00] border-[#ed6f00] text-white shadow-sm' 
                                                : 'bg-[#f4f7fb] border-[#001f6c]/10 text-[#001f6c]/70 hover:border-[#ed6f00]/40'}`}
                                    >
                                        {b.label}
                                    </button>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FilterBar;
