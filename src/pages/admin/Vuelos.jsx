import React, { useState, useEffect } from 'react';
import api from '../../api/axios';
import AdminTable from '../../components/dashboard/AdminTable';
import FormCard, { FormInput, FormSelect, FormPlaceSearch, FormTextarea, FormCheckbox, ImageSlot } from '../../components/dashboard/FormCard';

const Thumb = ({ image, initials = '' }) => (
    <div className="flex items-center justify-center">
        <div className="w-16 h-12 rounded-lg flex items-center justify-center text-white text-[10px] font-bold leading-tight text-center"
            style={{ background: `linear-gradient(135deg, #001f6c, #001f6ccc)` }}>
            {image ? <img src={image} alt="Thumbnail" className="w-full h-full object-cover rounded-lg" /> : initials}
        </div>
    </div>
);

const COLUMNS = [
    { key: 'thumb', label: 'Portada', render: (v, item) => <Thumb image={item.post?.thumbnail || item.post?.banner} initials="VL" /> },
    { key: 'post.name', label: 'Nombre' },
    { key: 'destination', label: 'Destino' },
    { key: 'country.name', label: 'País' },
    { key: 'starting_price', label: 'Precio ($)' },
    { key: 'guest_type.name', label: 'Huéspedes', render: (v) => v || 'N/A' },
    { key: 'board_type.name', label: 'Régimen', render: (v) => v || 'N/A' },
    { key: 'isActive', label: 'Activo', render: (v) => v ? 'Sí' : 'No' },
];

const VueloForm = ({ lookups, onCreated }) => {
    const defaultForm = {
        name: '',
        destination: '',
        country_FK: '',
        map_location: '',
        starting_price: '',
        guest_type_FK: '',
        board_type_FK: '',
        features: '',
        requirements: '',
        overview: '',
        information: '',
        banner: '',
        thumbnail: '',
        imagesString: '', // comma-separated
        isActive: true, // we added this in the migration
    };

    const [form, setForm] = useState(defaultForm);
    const [loading, setLoading] = useState(false);

    const set = (k) => (e) =>
        setForm((f) => ({ ...f, [k]: e.target.type === 'checkbox' ? e.target.checked : e.target.value }));

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            setLoading(true);
            const payload = {
                ...form,
                images: form.imagesString ? form.imagesString.split(',').map(u => u.trim()).filter(Boolean) : []
            };

            await api.post('/flights', payload);
            alert('Vuelo / Destino creado exitosamente!');
            setForm(defaultForm);
            if (onCreated) onCreated();
        } catch (error) {
            console.error('Error creating flight:', error);
            alert('Error al crear el vuelo/destino.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <FormCard title="Crear un Nuevo Vuelo / Destino" onSubmit={handleSubmit} submitLabel={loading ? "Creando..." : "Crear Vuelo"}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="space-y-4">
                    <FormInput label="Nombre del Vuelo/Destino" id="vl-name" value={form.name} onChange={set('name')} required />

                    <div className="grid grid-cols-2 gap-3">
                        <FormInput label="Ciudad Destino" id="vl-destino" value={form.destination} onChange={set('destination')} required />
                        <FormSelect label="País" id="vl-country"
                            options={lookups.countries.map(c => ({ value: c.country_ID, label: c.name }))}
                            value={form.country_FK} onChange={set('country_FK')} required
                        />
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                        <FormInput label="Precio ($)" id="vl-precio" type="number" min="0" step="0.01" value={form.starting_price} onChange={set('starting_price')} required />
                    </div>

                    <div className="mt-3">
                        <FormPlaceSearch
                            label="Ubicación Maps (Ej. Aeropuerto JFK)"
                            id="vl-map_location"
                            value={form.map_location}
                            onChange={set('map_location')}
                            category="aeropuerto"
                        />
                    </div>

                    <div className="grid grid-cols-2 gap-3 mt-3">
                        <FormSelect label="Tipo de Huésped (Opcional)" id="vl-guest"
                            options={lookups.guestTypes.map(g => ({ value: g.guest_type_ID, label: g.type }))}
                            value={form.guest_type_FK} onChange={set('guest_type_FK')}
                        />
                        <FormSelect label="Régimen (Opcional)" id="vl-board"
                            options={lookups.boardTypes.map(b => ({ value: b.board_type_ID, label: b.type }))}
                            value={form.board_type_FK} onChange={set('board_type_FK')}
                        />
                    </div>
                </div>

                <div className="space-y-4">
                    <FormInput label="URL de la Imagen Banner" id="vl-banner" value={form.banner} onChange={set('banner')} placeholder="https://ejemplo.com/banner.jpg" />
                    <FormInput label="URL de la Imagen Thumbnail" id="vl-thumb" value={form.thumbnail} onChange={set('thumbnail')} placeholder="https://ejemplo.com/thumb.jpg" />
                    <FormTextarea label="URLs de Galería (separadas por coma)" id="vl-images" rows={3} value={form.imagesString} onChange={set('imagesString')} placeholder="https://img1.jpg, https://img2.jpg" />
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-2">
                <div className="space-y-4">
                    <FormTextarea label="Descripción Corta (Overview)" id="vl-overview" rows={3} value={form.overview} onChange={set('overview')} required />
                    <FormTextarea label="Características destacadas" id="vl-features" rows={3} value={form.features} onChange={set('features')} />
                </div>
                <div className="space-y-4">
                    <FormTextarea label="Información Completa" id="vl-information" rows={3} value={form.information} onChange={set('information')} />
                    <FormTextarea label="Requisitos de Viaje" id="vl-requirements" rows={3} value={form.requirements} onChange={set('requirements')} />
                </div>
            </div>

            <div className="flex gap-6 mt-4">
                <FormCheckbox label="Vuelo Activo" id="vl-activo" checked={form.isActive} onChange={set('isActive')} />
            </div>
        </FormCard>
    );
};

const Vuelos = () => {
    const [flights, setFlights] = useState([]);
    const [lookups, setLookups] = useState({ countries: [], guestTypes: [], boardTypes: [] });
    const [loading, setLoading] = useState(true);

    const fetchData = async () => {
        try {
            setLoading(true);
            const [flightsRes, lookupsRes] = await Promise.all([
                api.get('/flights'),
                api.get('/lookups')
            ]);

            const flatFlights = flightsRes.data.map(flight => ({
                ...flight,
                'post.name': flight.post?.name,
                'country.name': flight.country?.name,
                'guest_type.name': flight.guestType?.type,
                'board_type.name': flight.boardType?.type,
            }));

            setFlights(flatFlights);

            setLookups({
                countries: lookupsRes.data.countries || [],
                guestTypes: lookupsRes.data.guest_types || [],
                boardTypes: lookupsRes.data.board_types || []
            });
        } catch (err) {
            console.error('Error fetching data:', err);
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
                    title="Vuelos / Destinos API"
                    newLabel="+ Nuevo Vuelo"
                    columns={COLUMNS}
                    data={flights}
                    pageSize={10}
                    onNew={() => document.getElementById('form-vuelo')?.scrollIntoView({ behavior: 'smooth' })}
                    onView={(row) => alert(`Vista previa: ${row['post.name']}`)}
                    onEdit={(row) => alert(`Editar funcionalidad en proceso: ${row['post.name']}`)}
                    onArchive={(row) => alert(`Archivar funcionalidad en proceso: ${row['post.name']}`)}
                />
            )}
            <div id="form-vuelo"><VueloForm lookups={lookups} onCreated={fetchData} /></div>
        </div>
    );
};

export default Vuelos;
