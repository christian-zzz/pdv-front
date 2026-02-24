import React, { useState } from 'react';

/**
 * BookingForm — price display + consultation form.
 *
 * @param {string} price          — formatted price, e.g. "$2,499"
 * @param {string} priceLabel     — e.g. "/ persona"
 */
const BookingForm = ({ price = '$0', priceLabel = '/ persona' }) => {
    const [form, setForm] = useState({
        name: '',
        email: '',
        phone: '',
        dateFrom: '',
        dateTo: '',
        guests: 1,
        children: false,
    });

    const update = (field) => (e) => {
        const val = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
        setForm((prev) => ({ ...prev, [field]: val }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // TODO: send to API
        console.log('Consulta enviada:', form);
    };

    return (
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 sm:p-6 sticky top-20">
            {/* ── Price ───────────────────────────────────────────── */}
            <div className="mb-1 pb-1 border-b border-gray-100">
                <div className="flex items-baseline gap-1.5">
                    <span className="text-3xl font-extrabold text-[#ed6f00]">{price}</span>
                    <span className="text-sm font-medium text-gray-400">{priceLabel}</span>
                </div>
            </div>

            {/* ── Form ────────────────────────────────────────────── */}
            <h3 className="text-2xl font-bold text-[#ed6f00] mb-2 text-center">Consulta</h3>

            <form onSubmit={handleSubmit} className="space-y-3.5">
                {/* Name */}
                <div>
                    <label className="block text-xs font-bold uppercase tracking-wide text-[#001f6c]/60 mb-1 pl-0.5">
                        Nombre y Apellido
                    </label>
                    <input
                        type="text"
                        value={form.name}
                        onChange={update('name')}
                        className="w-full rounded-xl border border-gray-200 bg-gray-50/60 px-4 py-2.5 text-sm text-[#001f6c] placeholder-gray-400 outline-none focus:border-[#3b82f6] focus:ring-2 focus:ring-[#3b82f6]/20 transition-all"
                        placeholder="Juan Pérez"
                        required
                    />
                </div>

                {/* Email */}
                <div>
                    <label className="block text-xs font-bold uppercase tracking-wide text-[#001f6c]/60 mb-1 pl-0.5">
                        Correo Electrónico
                    </label>
                    <input
                        type="email"
                        value={form.email}
                        onChange={update('email')}
                        className="w-full rounded-xl border border-gray-200 bg-gray-50/60 px-4 py-2.5 text-sm text-[#001f6c] placeholder-gray-400 outline-none focus:border-[#3b82f6] focus:ring-2 focus:ring-[#3b82f6]/20 transition-all"
                        placeholder="correo@ejemplo.com"
                        required
                    />
                </div>

                {/* Phone */}
                <div>
                    <label className="block text-xs font-bold uppercase tracking-wide text-[#001f6c]/60 mb-1 pl-0.5">
                        Número de Teléfono
                    </label>
                    <input
                        type="tel"
                        value={form.phone}
                        onChange={update('phone')}
                        className="w-full rounded-xl border border-gray-200 bg-gray-50/60 px-4 py-2.5 text-sm text-[#001f6c] placeholder-gray-400 outline-none focus:border-[#3b82f6] focus:ring-2 focus:ring-[#3b82f6]/20 transition-all"
                        placeholder="+58 412 123 4567"
                    />
                </div>

                {/* Dates */}
                <div className="grid grid-cols-2 gap-3">
                    <div>
                        <label className="block text-xs font-bold uppercase tracking-wide text-[#001f6c]/60 mb-1 pl-0.5">
                            Desde
                        </label>
                        <input
                            type="date"
                            value={form.dateFrom}
                            onChange={update('dateFrom')}
                            className="w-full rounded-xl border border-gray-200 bg-gray-50/60 px-3 py-2.5 text-sm text-[#001f6c] outline-none focus:border-[#3b82f6] focus:ring-2 focus:ring-[#3b82f6]/20 transition-all"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-xs font-bold uppercase tracking-wide text-[#001f6c]/60 mb-1 pl-0.5">
                            Hasta
                        </label>
                        <input
                            type="date"
                            value={form.dateTo}
                            onChange={update('dateTo')}
                            className="w-full rounded-xl border border-gray-200 bg-gray-50/60 px-3 py-2.5 text-sm text-[#001f6c] outline-none focus:border-[#3b82f6] focus:ring-2 focus:ring-[#3b82f6]/20 transition-all"
                            required
                        />
                    </div>
                </div>

                {/* Guests + Children */}
                <div className="grid grid-cols-2 gap-3 items-end">
                    <div>
                        <label className="block text-xs font-bold uppercase tracking-wide text-[#001f6c]/60 mb-1 pl-0.5">
                            Nº de Personas
                        </label>
                        <input
                            type="number"
                            min="1"
                            max="20"
                            value={form.guests}
                            onChange={update('guests')}
                            className="w-full rounded-xl border border-gray-200 bg-gray-50/60 px-4 py-2.5 text-sm text-[#001f6c] outline-none focus:border-[#3b82f6] focus:ring-2 focus:ring-[#3b82f6]/20 transition-all"
                        />
                    </div>
                    <label className="flex items-center gap-2 pb-2.5 cursor-pointer select-none">
                        <input
                            type="checkbox"
                            checked={form.children}
                            onChange={update('children')}
                            className="h-4 w-4 rounded border-gray-300 text-[#3b82f6] focus:ring-[#3b82f6]/30"
                        />
                        <span className="text-sm font-medium text-[#001f6c]/70">Incluye niños</span>
                    </label>
                </div>

                {/* Submit */}
                <button
                    type="submit"
                    className="w-full mt-2 rounded-xl bg-[#ed6f00] text-white font-semibold py-3 text-sm shadow-md hover:bg-[#ed6f00]/90 hover:shadow-lg active:scale-[0.98] transition-all duration-200 flex items-center justify-center gap-2"
                >
                    Enviar Consulta
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                    </svg>
                </button>

                {/* Cancellation note */}
                <p className="hidden text-xs text-center text-gray-400 flex items-center justify-center gap-1 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-3.5 h-3.5 text-green-500">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                    Cancelación gratuita hasta 48 horas antes
                </p>
            </form>
        </div>
    );
};

export default BookingForm;
