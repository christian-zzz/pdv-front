import React from 'react';

// ─── Shared form primitives ───────────────────────────────────────────────────

export const FormMultiSelect = ({ label, id, options = [], value = [], onChange, onCreateOption, ...rest }) => {
    const [newOptionUrl, setNewOptionUrl] = React.useState('');
    const [isCreating, setIsCreating] = React.useState(false);

    const handleCreate = async () => {
        if (!newOptionUrl.trim() || !onCreateOption) return;
        try {
            setIsCreating(true);
            await onCreateOption(newOptionUrl.trim());
            setNewOptionUrl('');
        } catch (e) {
            console.error('Error creating option', e);
        } finally {
            setIsCreating(false);
        }
    };
    // A simple multi-select using checkboxes styled like a select box area
    return (
        <div className="flex flex-col gap-1">
            {label && <label className="text-xs font-semibold text-[#001f6c]">{label}</label>}
            <div className="w-full rounded-lg border border-[#ed6f00]/50 bg-white p-3 text-sm flex flex-col gap-2 max-h-32 overflow-y-auto">
                {options.map((o) => {
                    const optValue = o.value ?? o;
                    const optLabel = o.label ?? o;
                    return (
                        <label key={optValue} className="flex items-center gap-2 cursor-pointer select-none">
                            <input
                                type="checkbox"
                                className="w-4 h-4 accent-[#ed6f00] cursor-pointer"
                                checked={value.includes(optValue)}
                                onChange={(e) => {
                                    if (e.target.checked) {
                                        onChange([...value, optValue]);
                                    } else {
                                        onChange(value.filter(v => v !== optValue));
                                    }
                                }}
                            />
                            <span className="text-[#001f6c]">{optLabel}</span>
                        </label>
                    );
                })}
            </div>
            {onCreateOption && (
                <div className="flex gap-2 items-center mt-1">
                    <input
                        type="text"
                        placeholder="Añadir nueva opción..."
                        value={newOptionUrl}
                        onChange={(e) => setNewOptionUrl(e.target.value)}
                        onKeyDown={(e) => { if (e.key === 'Enter') { e.preventDefault(); handleCreate(); } }}
                        className="flex-1 rounded-lg border border-[#ed6f00]/50 bg-white px-3 py-1.5 text-xs text-[#001f6c] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#ed6f00]/40 transition"
                    />
                    <button
                        type="button"
                        onClick={handleCreate}
                        disabled={isCreating}
                        className="bg-[#ed6f00] hover:bg-[#ed6f00]/80 text-white font-bold text-xs px-3 py-1.5 rounded-lg shadow disabled:opacity-50 transition-colors"
                    >
                        {isCreating ? '...' : '+'}
                    </button>
                </div>
            )}
        </div>
    );
};

export const FormDynamicList = ({ label, id, value = '', onChange, placeholder = 'Añadir ítem...', ...rest }) => {
    const list = value ? value.split(',').map(item => item.trim()).filter(Boolean) : [];
    const [newItem, setNewItem] = React.useState('');

    const handleAdd = () => {
        if (!newItem.trim()) return;
        const newList = [...list, newItem.trim()];
        onChange(newList.join(', '));
        setNewItem('');
    };

    const handleRemove = (index) => {
        const newList = list.filter((_, i) => i !== index);
        onChange(newList.join(', '));
    };

    return (
        <div className="flex flex-col gap-1">
            {label && <label htmlFor={id} className="text-xs font-semibold text-[#001f6c]">{label}</label>}
            <div className="w-full rounded-lg border border-[#ed6f00]/50 bg-white p-3 text-sm flex flex-col gap-3 min-h-[100px]">
                <div className="flex gap-2">
                    <input
                        id={id}
                        type="text"
                        value={newItem}
                        onChange={(e) => setNewItem(e.target.value)}
                        onKeyDown={(e) => { if (e.key === 'Enter') { e.preventDefault(); handleAdd(); } }}
                        placeholder={placeholder}
                        className="flex-1 border-b border-gray-300 px-2 py-1 text-sm focus:outline-none focus:border-[#ed6f00]"
                        {...rest}
                    />
                    <button type="button" onClick={handleAdd} className="text-[#ed6f00] font-bold text-xl leading-none px-2 hover:scale-110 transition-transform">
                        +
                    </button>
                </div>
                {list.length > 0 && (
                    <ul className="flex flex-wrap gap-2">
                        {list.map((item, index) => (
                            <li key={index} className="flex items-center gap-1.5 bg-[#f4f7fb] text-[#001f6c] px-3 py-1 rounded-full text-xs font-semibold border border-[#ed6f00]/20 shadow-sm">
                                <span>{item}</span>
                                <button type="button" onClick={() => handleRemove(index)} className="text-gray-400 hover:text-red-500 font-bold ml-1 transition-colors">
                                    ×
                                </button>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
};


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


export const FormPlaceSearch = ({ label, id, value = '', onChange, placeholder = 'Ej: Hesperia Isla Margarita', category = '' }) => {
    const [query, setQuery] = React.useState(value || '');
    const [results, setResults] = React.useState([]);
    const [loading, setLoading] = React.useState(false);
    const [selected, setSelected] = React.useState(value || '');
    const [showDropdown, setShowDropdown] = React.useState(false);
    const debounceRef = React.useRef(null);
    const wrapperRef = React.useRef(null);

    // Sync internal query with incoming value
    React.useEffect(() => {
        if (value !== query) {
            setQuery(value || '');
            if (value) setSelected(value);
        }
    }, [value]);

    // Close dropdown on outside click
    React.useEffect(() => {
        const handleOutside = (e) => { if (wrapperRef.current && !wrapperRef.current.contains(e.target)) setShowDropdown(false); };
        document.addEventListener('mousedown', handleOutside);
        return () => document.removeEventListener('mousedown', handleOutside);
    }, []);

    const search = (q) => {
        if (q.length < 3) { setResults([]); return; }
        setLoading(true);
        clearTimeout(debounceRef.current);
        debounceRef.current = setTimeout(async () => {
            const doFetch = async (searchTerm, params) => {
                try {
                    const res = await fetch(`https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(searchTerm)}&format=json&limit=10&addressdetails=1${params}`, {
                        headers: { 'Accept-Language': 'es' }
                    });
                    return await res.json();
                } catch (e) {
                    return [];
                }
            };

            // Build both queries: raw + with category
            const rawQuery = q;
            const catQuery = (category && !q.toLowerCase().includes(category.toLowerCase()))
                ? `${category} ${q}` : q;

            let data = [];

            // 1. Try raw query in Nueva Esparta first
            data = await doFetch(rawQuery, '&viewbox=-64.4,11.2,-63.7,10.7&bounded=1');

            // 2. If few results, also try with category in Nueva Esparta and merge
            if (data.length < 3 && catQuery !== rawQuery) {
                const catData = await doFetch(catQuery, '&viewbox=-64.4,11.2,-63.7,10.7&bounded=1');
                const ids = new Set(data.map(d => d.place_id));
                data = [...data, ...catData.filter(d => !ids.has(d.place_id))];
            }

            // 3. If still empty, try Venezuela (raw first, then category)
            if (data.length === 0) {
                data = await doFetch(rawQuery, '&countrycodes=ve');
                if (data.length < 3 && catQuery !== rawQuery) {
                    const catData = await doFetch(catQuery, '&countrycodes=ve');
                    const ids = new Set(data.map(d => d.place_id));
                    data = [...data, ...catData.filter(d => !ids.has(d.place_id))];
                }
            }

            // 4. If still empty, try global
            if (data.length === 0) {
                data = await doFetch(rawQuery, '');
            }

            setResults(data);
            setShowDropdown(true);
            setLoading(false);
        }, 400);
    };

    const handleSelect = (place) => {
        const displayName = place.display_name;
        setQuery(displayName);
        setSelected(displayName);
        setShowDropdown(false);
        setResults([]);
        // Bubble up as a synthetic event - pass the display name plus coordinates
        const mapQuery = `${place.display_name}`;
        onChange({ target: { value: mapQuery } });
    };

    const handleChange = (e) => {
        const q = e.target.value;
        setQuery(q);
        setSelected('');
        onChange({ target: { value: q } });
        search(q);
    };

    return (
        <div className="flex flex-col gap-1 relative" ref={wrapperRef}>
            {label && <label htmlFor={id} className="text-xs font-semibold text-[#001f6c]">{label}</label>}
            <div className="relative">
                <input
                    id={id}
                    type="text"
                    value={query}
                    onChange={handleChange}
                    onFocus={() => results.length > 0 && setShowDropdown(true)}
                    placeholder={placeholder}
                    autoComplete="off"
                    className="w-full rounded-lg border border-[#ed6f00]/50 bg-white px-3 py-2 text-sm text-[#001f6c] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#ed6f00]/40 transition pr-8"
                />
                {loading && (
                    <div className="absolute right-2 top-1/2 -translate-y-1/2">
                        <div className="w-4 h-4 border-2 border-[#ed6f00] border-t-transparent rounded-full animate-spin" />
                    </div>
                )}
                {selected && !loading && (
                    <div className="absolute right-2 top-1/2 -translate-y-1/2 text-green-500">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                            <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                        </svg>
                    </div>
                )}
            </div>

            {showDropdown && results.length > 0 && (
                <ul className="absolute top-full left-0 right-0 z-50 mt-1 bg-white border border-gray-200 rounded-xl shadow-xl overflow-hidden max-h-60 overflow-y-auto">
                    {results.map((place) => (
                        <li
                            key={place.place_id}
                            onClick={() => handleSelect(place)}
                            className="flex items-start gap-2 px-3 py-2.5 cursor-pointer hover:bg-[#f4f7fb] text-sm border-b border-gray-50 last:border-0 transition-colors"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="#ed6f00" className="w-4 h-4 shrink-0 mt-0.5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                            </svg>
                            <span className="text-[#001f6c] leading-tight">{place.display_name}</span>
                        </li>
                    ))}
                </ul>
            )}

            {showDropdown && results.length === 0 && query.length >= 3 && !loading && (
                <div className="absolute top-full left-0 right-0 z-50 mt-1 bg-white border border-gray-200 rounded-xl shadow-xl px-4 py-3 text-sm text-gray-400">
                    Sin resultados para &ldquo;{query}&rdquo;
                </div>
            )}
        </div>
    );
};

export default FormCard;
