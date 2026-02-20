import React, { useState, useRef, useEffect } from 'react';

/**
 * CustomSelect — fully-styled dropdown replacing native <select>.
 *
 * @param {string}   label     - Float label above the trigger
 * @param {string[]} options   - Array of option strings
 * @param {string}   value     - Controlled value
 * @param {function} onChange  - (newValue) => void
 * @param {string}   placeholder
 */
const CustomSelect = ({ label, options = [], value, onChange, placeholder = 'Seleccionar…' }) => {
    const [open, setOpen] = useState(false);
    const ref = useRef(null);

    // Close on outside click
    useEffect(() => {
        const handler = (e) => { if (ref.current && !ref.current.contains(e.target)) setOpen(false); };
        document.addEventListener('mousedown', handler);
        return () => document.removeEventListener('mousedown', handler);
    }, []);

    const selected = value || options[0] || placeholder;

    return (
        <div ref={ref} className="relative flex flex-col gap-1.5">
            {label && (
                <span className="text-xs font-bold uppercase tracking-wide text-[#001f6c]/70 pl-1">
                    {label}
                </span>
            )}

            {/* Trigger */}
            <button
                type="button"
                onClick={() => setOpen((o) => !o)}
                className={`
                    w-full h-11 flex items-center justify-between
                    rounded-full px-4
                    border-2 bg-white
                    text-sm font-semibold text-[#001f6c]
                    shadow-sm cursor-pointer
                    transition-all duration-200
                    ${open
                        ? 'border-[#ed6f00] ring-2 ring-[#ed6f00]/20'
                        : 'border-[#001f6c]/20 hover:border-[#ed6f00]/60'
                    }
                `}
            >
                <span>{selected}</span>
                {/* Arrow icon — rotates when open */}
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className={`w-4 h-4 text-[#ed6f00] transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
                >
                    <path fillRule="evenodd" d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06z" clipRule="evenodd" />
                </svg>
            </button>

            {/* Dropdown panel */}
            {open && (
                <ul className="
                    absolute top-full left-0 right-0 z-50
                    mt-2
                    bg-white
                    border-2 border-[#ed6f00]/30
                    rounded-2xl
                    shadow-xl shadow-[#001f6c]/10
                    overflow-hidden
                ">
                    {options.map((opt) => (
                        <li key={opt}>
                            <button
                                type="button"
                                onClick={() => { onChange(opt); setOpen(false); }}
                                className={`
                                    w-full text-left px-5 py-2.5
                                    text-sm font-semibold
                                    transition-colors duration-150
                                    ${opt === selected
                                        ? 'bg-[#ed6f00] text-white'
                                        : 'text-[#001f6c] hover:bg-[#ed6f00]/10 hover:text-[#ed6f00]'
                                    }
                                `}
                            >
                                {opt}
                            </button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default CustomSelect;
