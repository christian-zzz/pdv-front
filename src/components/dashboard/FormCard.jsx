import React from 'react';

// ─── Shared form primitives ───────────────────────────────────────────────────

export const FormInput = ({ label, id, type = 'text', placeholder = '', ...rest }) => (
    <div className="flex flex-col gap-1">
        {label && <label htmlFor={id} className="text-xs font-semibold text-[#001f6c]">{label}</label>}
        <input
            id={id}
            type={type}
            placeholder={placeholder}
            className="w-full rounded-lg border border-[#ed6f00]/50 bg-white px-3 py-2 text-sm text-[#001f6c] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#ed6f00]/40 transition"
            {...rest}
        />
    </div>
);

export const FormSelect = ({ label, id, options = [], ...rest }) => (
    <div className="flex flex-col gap-1">
        {label && <label htmlFor={id} className="text-xs font-semibold text-[#001f6c]">{label}</label>}
        <select
            id={id}
            className="w-full rounded-lg border border-[#ed6f00]/50 bg-white px-3 py-2 text-sm text-[#001f6c] focus:outline-none focus:ring-2 focus:ring-[#ed6f00]/40 transition appearance-none cursor-pointer"
            {...rest}
        >
            <option value="">Seleccionar…</option>
            {options.map((o) => (
                <option key={o.value ?? o} value={o.value ?? o}>{o.label ?? o}</option>
            ))}
        </select>
    </div>
);

export const FormTextarea = ({ label, id, rows = 4, placeholder = '', ...rest }) => (
    <div className="flex flex-col gap-1">
        {label && <label htmlFor={id} className="text-xs font-semibold text-[#001f6c]">{label}</label>}
        <textarea
            id={id}
            rows={rows}
            placeholder={placeholder}
            className="w-full rounded-lg border border-[#ed6f00]/50 bg-white px-3 py-2 text-sm text-[#001f6c] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#ed6f00]/40 transition resize-y"
            {...rest}
        />
    </div>
);

export const FormCheckbox = ({ label, id, ...rest }) => (
    <label htmlFor={id} className="flex items-center gap-2 cursor-pointer select-none">
        <input
            id={id}
            type="checkbox"
            className="w-4 h-4 accent-[#ed6f00] cursor-pointer"
            {...rest}
        />
        <span className="text-sm text-[#001f6c]">{label}</span>
    </label>
);

/** Single image upload placeholder slot */
export const ImageSlot = ({ label, large = false }) => (
    <label className={`flex flex-col items-center justify-center rounded-xl border-2 border-dashed border-gray-300 bg-[#f4f7fb] cursor-pointer hover:border-[#ed6f00] transition-colors group ${large ? 'h-32 w-full' : 'h-20 w-20'}`}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7 text-[#ed6f00] group-hover:scale-110 transition-transform">
            <path fillRule="evenodd" d="M1.5 6a2.25 2.25 0 012.25-2.25h16.5A2.25 2.25 0 0122.5 6v12a2.25 2.25 0 01-2.25 2.25H3.75A2.25 2.25 0 011.5 18V6zM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0021 18v-1.94l-2.69-2.689a1.5 1.5 0 00-2.12 0l-.88.879.97.97a.75.75 0 11-1.06 1.06l-5.16-5.159a1.5 1.5 0 00-2.12 0L3 16.061zm10.125-7.81a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0z" clipRule="evenodd" />
        </svg>
        {label && <span className="text-[10px] text-gray-400 mt-1">{label}</span>}
        <input type="file" accept="image/*" className="hidden" />
    </label>
);

/** Styled form card wrapper */
const FormCard = ({ title, onSubmit, submitLabel = 'Guardar', children }) => (
    <div className="bg-white rounded-2xl border border-[#ed6f00] shadow-sm overflow-hidden">
        <div className="bg-[#f4f7fb] border-b border-[#ed6f00]/30 px-6 py-4">
            <h2 className="text-lg font-extrabold text-[#001f6c]">{title}</h2>
        </div>
        <form onSubmit={onSubmit} className="p-6 space-y-5">
            {children}
            <div className="flex justify-center pt-2">
                <button
                    type="submit"
                    className="bg-[#ed6f00] hover:bg-[#ed6f00]/80 text-white font-bold text-sm px-10 py-2.5 rounded-full shadow transition-colors duration-200"
                >
                    {submitLabel}
                </button>
            </div>
        </form>
    </div>
);

export default FormCard;
