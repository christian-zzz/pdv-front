import React, { useState, useEffect } from 'react';
import api from '../../api/axios';
import AdminTable from '../../components/dashboard/AdminTable';
import FormCard, { FormInput, FormSelect, FormMultiSelect, FormDynamicList, FormPlaceSearch, FormTextarea, FormCheckbox, ImageSlot } from '../../components/dashboard/FormCard';

const Thumb = ({ image, initials = '' }) => (
    <div className="flex items-center justify-center">
        <div className="w-16 h-12 rounded-lg flex items-center justify-center text-white text-[10px] font-bold leading-tight text-center"
            style={{ background: `linear-gradient(135deg, #001f6c, #001f6ccc)` }}>
            {image ? <img src={image} alt="Thumbnail" className="w-full h-full object-cover rounded-lg" /> : initials}
        </div>
    </div>
);

// DATA array is removed as per the instruction's implied new data structure and API usage.
// If mock data is still needed, it should be provided in the new format.

const COLUMNS = [
    { key: 'thumb', label: 'Portada', render: (v, item) => <Thumb image={item.post?.thumbnail || item.post?.banner} initials="HT" /> },
    { key: 'post.name', label: 'Nombre' },
    { key: 'destination', label: 'Ubicación' },
    { key: 'stars', label: 'Categoría', render: (v) => `${v} ★` },
    { key: 'starting_price', label: 'Precio ($)' },
    { key: 'roomTypes', label: 'Habitaciones', render: (v, item) => item.roomTypes?.map(r => r.type).join(', ') || 'N/A' },
    { key: 'isActive', label: 'Activo', render: (v) => v ? 'Sí' : 'No' },
];

const HotelForm = ({ lookups, onCreated }) => {
    const defaultForm = {
        name: '',
        destination: '',
        map_location: '',
        stars: '',
        starting_price: '',
        board_type_FK: '',
        room_types: [], // Now an array for many-to-many
        overview: '',
        information: '',
        features: '',
        banner: '',
        thumbnail: '',
        imagesString: '', // comma-separated
        isActive: true,
    };
    const [form, setForm] = useState(defaultForm);

    const set = (k) => (e) =>
        setForm((f) => ({ ...f, [k]: e.target.type === 'checkbox' ? e.target.checked : e.target.value }));

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await api.post('/accommodations', form);
            alert('Alojamiento creado exitosamente!');
            setForm(defaultForm);
            if (onCreated) onCreated();
        } catch (error) {
            console.error('Error creating accommodation:', error);
            alert('Error al crear el alojamiento.');
        }
    };

    const handleCreateRoomType = async (newType) => {
        try {
            const res = await api.post('/lookups/room-types', { type: newType });
            // Let the parent re-fetch lookups, or we can Optimistically update
            if (onCreated) onCreated();
            // Also select it immediately
            setForm(f => ({ ...f, room_types: [...f.room_types, res.data.room_type_ID] }));
        } catch (err) {
            console.error('Error creating room type', err);
            alert('Error al crear tipo de habitación.');
        }
    };

    return (
        <FormCard title="Crear un Nuevo Hotel" onSubmit={handleSubmit} submitLabel="Crear Hotel">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="space-y-4">
                    <FormInput label="Nombre del Hotel" id="ht-nombre" value={form.name} onChange={set('name')} required />
                    <FormInput label="Ubicación / Ciudad" id="ht-ubicacion" value={form.destination} onChange={set('destination')} required />
                    <div className="grid grid-cols-2 gap-3">
                        <FormSelect label="Categoría (★)" id="ht-categoria"
                            options={[
                                { value: '1', label: '1 ★' },
                                { value: '2', label: '2 ★' },
                                { value: '3', label: '3 ★' },
                                { value: '4', label: '4 ★' },
                                { value: '5', label: '5 ★' }
                            ]}
                            value={form.stars} onChange={set('stars')} required
                        />
                        <FormInput label="Precio / Noche ($)" id="ht-precio" type="number" min="0" step="0.01" value={form.starting_price} onChange={set('starting_price')} required />
                    </div>

                    <div className="mt-3">
                        <FormPlaceSearch
                            label="Ubicación Maps (Ej. Hesperia Isla Margarita)"
                            id="ht-map_location"
                            value={form.map_location}
                            onChange={set('map_location')}
                            category="hotel"
                        />
                    </div>

                    <div className="mt-3">
                        <FormSelect label="Régimen (Opcional)" id="ht-board"
                            options={lookups.boardTypes.map(b => ({ value: b.board_type_ID, label: b.type }))}
                            value={form.board_type_FK} onChange={set('board_type_FK')}
                        />
                    </div>

                    <FormMultiSelect
                        label="Tipos de Habitación (Múltiple)" id="ht-room"
                        options={lookups.roomTypes.map(r => ({ value: r.room_type_ID, label: r.type }))}
                        value={form.room_types}
                        onChange={(selectedArray) => setForm(f => ({ ...f, room_types: selectedArray }))}
                        onCreateOption={handleCreateRoomType}
                    />
                </div>

                <div className="space-y-4">
                    <div>
                        <p className="text-xs font-semibold text-[#001f6c] mb-2">Banner del Hotel</p>
                        <ImageSlot large />
                    </div>
                    <div className="flex gap-4">
                        <div>
                            <p className="text-xs font-semibold text-[#001f6c] mb-2">Thumbnail</p>
                            <ImageSlot />
                        </div>
                        <div>
                            <p className="text-xs font-semibold text-[#001f6c] mb-2">Galería</p>
                            <div className="grid grid-cols-2 gap-1.5">
                                <ImageSlot /><ImageSlot /><ImageSlot />
                                <label className="h-20 w-20 flex items-center justify-center rounded-xl border-2 border-dashed border-[#ed6f00]/50 bg-[#f4f7fb] cursor-pointer hover:border-[#ed6f00] transition-colors text-2xl text-[#ed6f00] font-bold">
                                    +<input type="file" accept="image/*" multiple className="hidden" />
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-4">
                <div className="space-y-4">
                    <FormTextarea label="Descripción del Hotel (Overview)" id="ht-desc" rows={4} value={form.overview} onChange={set('overview')} />
                    <FormTextarea label="Información Completa" id="ht-info" rows={4} value={form.information} onChange={set('information')} />
                </div>
                <div>
                    <FormDynamicList
                        label="Servicios y Amenidades"
                        id="ht-servicios"
                        value={form.features}
                        onChange={(val) => setForm(f => ({ ...f, features: val }))}
                        placeholder="Ej: Wi-Fi Gratis, Piscina, Desayuno..."
                    />
                </div>
            </div>
            <div className="flex gap-6">
                <FormCheckbox label="Hotel Activo" id="ht-activo" checked={form.isActive} onChange={set('isActive')} />
            </div>
        </FormCard>
    );
};

const Hoteles = () => {
    const [accommodations, setAccommodations] = useState([]);
    const [lookups, setLookups] = useState({ guestTypes: [], boardTypes: [], roomTypes: [] });
    const [loading, setLoading] = useState(true);

    const fetchData = async () => {
        try {
            setLoading(true);
            const [accRes, lookupsRes] = await Promise.all([
                api.get('/accommodations'),
                api.get('/lookups')
            ]);

            const flatAccs = accRes.data.map(acc => ({
                ...acc,
                'post.name': acc.post?.name,
                'board_type.name': acc.boardType?.type,
            }));

            setAccommodations(flatAccs);

            setLookups({
                guestTypes: lookupsRes.data.guest_types || [],
                boardTypes: lookupsRes.data.board_types || [],
                roomTypes: lookupsRes.data.room_types || []
            });
        } catch (err) {
            console.error('Error fetching accommodations:', err);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div className="p-6 space-y-8 animate-in fade-in duration-300">
            {loading ? (
                <div className="flex justify-center p-10"><div className="animate-spin h-8 w-8 border-b-2 border-[#ed6f00] rounded-full"></div></div>
            ) : (
                <AdminTable
                    title="Alojamientos API"
                    newLabel="+ Nuevo Alojamiento"
                    columns={COLUMNS}
                    data={accommodations}
                    pageSize={10}
                    onNew={() => document.getElementById('form-hotel')?.scrollIntoView({ behavior: 'smooth' })}
                    onView={(row) => alert(`Vista previa: ${row['post.name']}`)}
                    onEdit={(row) => alert(`Editar funcionalidad en proceso: ${row['post.name']}`)}
                    onArchive={(row) => alert(`Archivar funcionalidad en proceso: ${row['post.name']}`)}
                />
            )}
            <div id="form-hotel"><HotelForm lookups={lookups} onCreated={fetchData} /></div>
        </div>
    );
};

export default Hoteles;
