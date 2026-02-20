import React, { useState } from 'react';
import AdminTable from '../../components/dashboard/AdminTable';
import FormCard, { FormInput, FormSelect, FormTextarea, FormCheckbox, ImageSlot } from '../../components/dashboard/FormCard';

const Thumb = ({ color = '#001f6c', initials = '' }) => (
    <div className="flex items-center justify-center">
        <div className="w-16 h-12 rounded-lg flex items-center justify-center text-white text-[10px] font-bold leading-tight text-center"
            style={{ background: `linear-gradient(135deg, ${color}, ${color}cc)` }}>
            {initials}
        </div>
    </div>
);

const DATA = [
    { id: 1, thumb: { color: '#1565c0', initials: 'Hotel\nSol' }, nombre: 'Hotel Sol Caribe', ubicacion: 'Margarita', categoria: '4 ★', precio: '$120/noche', habitaciones: 45, consultas: 30, editado: '30/01/26 8:00AM' },
    { id: 2, thumb: { color: '#00695c', initials: 'Hotel\nPlaya' }, nombre: 'Hotel Playa Mar', ubicacion: 'Margarita', categoria: '5 ★', precio: '$220/noche', habitaciones: 80, consultas: 25, editado: '30/01/26 9:00AM' },
    { id: 3, thumb: { color: '#7b1fa2', initials: 'Hotel\nVista' }, nombre: 'Hotel Vista al Mar', ubicacion: 'Los Roques', categoria: '4 ★', precio: '$180/noche', habitaciones: 32, consultas: 18, editado: '31/01/26 10:00AM' },
    { id: 4, thumb: { color: '#e65100', initials: 'Pos.\nCol.' }, nombre: 'Posada Colonial', ubicacion: 'Mérida', categoria: '3 ★', precio: '$65/noche', habitaciones: 20, consultas: 10, editado: '01/02/26 11:00AM' },
    { id: 5, thumb: { color: '#2e7d32', initials: 'Hotel\nTrop.' }, nombre: 'Hotel Tropical Suites', ubicacion: 'Barquisimeto', categoria: '4 ★', precio: '$95/noche', habitaciones: 60, consultas: 14, editado: '02/02/26 12:00PM' },
    { id: 6, thumb: { color: '#c62828', initials: 'Hotel\nPrem.' }, nombre: 'Hotel Premium Caracas', ubicacion: 'Caracas', categoria: '5 ★', precio: '$300/noche', habitaciones: 120, consultas: 22, editado: '03/02/26 1:00PM' },
];

const COLUMNS = [
    { key: 'thumb', label: 'Portada', render: (v) => <Thumb color={v.color} initials={v.initials} /> },
    { key: 'nombre', label: 'Nombre' },
    { key: 'ubicacion', label: 'Ubicación' },
    { key: 'categoria', label: 'Categoría' },
    { key: 'precio', label: 'Precio' },
    { key: 'habitaciones', label: 'Habitaciones' },
    { key: 'consultas', label: 'Consultas' },
    { key: 'editado', label: 'Editado' },
];

const HotelForm = () => {
    const [form, setForm] = useState({
        nombre: '', ubicacion: '', categoria: '', precioNoche: '',
        habitaciones: '', descripcion: '', servicios: '', activo: false,
    });
    const set = (k) => (e) =>
        setForm((f) => ({ ...f, [k]: e.target.type === 'checkbox' ? e.target.checked : e.target.value }));

    return (
        <FormCard title="Crear un Nuevo Hotel" onSubmit={(e) => { e.preventDefault(); console.log(form); alert('Hotel creado'); }} submitLabel="Crear Hotel">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="space-y-4">
                    <FormInput label="Nombre del Hotel" id="ht-nombre" value={form.nombre} onChange={set('nombre')} />
                    <FormInput label="Ubicación / Ciudad" id="ht-ubicacion" value={form.ubicacion} onChange={set('ubicacion')} />
                    <div className="grid grid-cols-2 gap-3">
                        <FormSelect label="Categoría (★)" id="ht-categoria"
                            options={['1 ★', '2 ★', '3 ★', '4 ★', '5 ★']}
                            value={form.categoria} onChange={set('categoria')}
                        />
                        <FormInput label="Precio / Noche ($)" id="ht-precio" type="number" min="0" step="0.01"
                            value={form.precioNoche} onChange={set('precioNoche')}
                        />
                    </div>
                    <FormInput label="N° de Habitaciones" id="ht-habitaciones" type="number" min="1"
                        value={form.habitaciones} onChange={set('habitaciones')}
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
            <FormTextarea label="Descripción del Hotel" id="ht-desc" rows={4} value={form.descripcion} onChange={set('descripcion')} />
            <FormTextarea label="Servicios y Amenidades" id="ht-servicios" rows={4} value={form.servicios} onChange={set('servicios')} />
            <div className="flex gap-6">
                <FormCheckbox label="Hotel Activo" id="ht-activo" checked={form.activo} onChange={set('activo')} />
            </div>
        </FormCard>
    );
};

const Hoteles = () => (
    <div className="p-6 space-y-8">
        <AdminTable
            title="Hoteles"
            newLabel="+ Nuevo Hotel"
            columns={COLUMNS}
            data={DATA}
            pageSize={5}
            onNew={() => document.getElementById('form-hotel')?.scrollIntoView({ behavior: 'smooth' })}
            onView={(row) => alert(`Ver: ${row.nombre}`)}
            onEdit={(row) => alert(`Editar: ${row.nombre}`)}
            onArchive={(row) => alert(`Archivar: ${row.nombre}`)}
        />
        <div id="form-hotel"><HotelForm /></div>
    </div>
);

export default Hoteles;
