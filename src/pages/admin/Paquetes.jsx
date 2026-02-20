import React, { useState } from 'react';
import AdminTable from '../../components/dashboard/AdminTable';
import FormCard, {
    FormInput, FormSelect, FormTextarea, FormCheckbox, ImageSlot,
} from '../../components/dashboard/FormCard';

// ── Thumbnail helper ──────────────────────────────────────────────────────────
const Thumb = ({ color = '#001f6c', initials = '' }) => (
    <div className="flex items-center justify-center">
        <div
            className="w-16 h-12 rounded-lg flex items-center justify-center text-white text-[10px] font-bold leading-tight text-center"
            style={{ background: `linear-gradient(135deg, ${color}, ${color}cc)` }}
        >
            {initials}
        </div>
    </div>
);

// ── Static data ───────────────────────────────────────────────────────────────
const DATA = [
    { id: 1, thumb: { color: '#1a56a0', initials: 'Temp.\nBaja' }, nombre: 'Temporada Baja', ubicacion: 'Margarita', dias: 'Por Noche', personas: 'Por Persona', precio: 'Desde 54$', consultas: 20, editado: '30/01/26 2:13PM' },
    { id: 2, thumb: { color: '#e8960a', initials: 'Vac.\nVerano' }, nombre: 'Vacaciones de Verano', ubicacion: 'Margarita', dias: '3 Días 2 Noches', personas: 'Por Persona', precio: 'Desde 118$', consultas: 15, editado: '30/01/26 2:14PM' },
    { id: 3, thumb: { color: '#2e7d32', initials: 'Vac.\nFamil.' }, nombre: 'Vacaciones Familiares', ubicacion: 'Margarita', dias: '3 Días 2 Noches', personas: 'Por Pareja', precio: 'Desde 236$', consultas: 12, editado: '30/01/26 2:15PM' },
    { id: 4, thumb: { color: '#7b1fa2', initials: 'Plan\nRom.' }, nombre: 'Plan Romántico Temp. Baja', ubicacion: 'Margarita', dias: 'Por Noche', personas: 'Por Pareja', precio: 'Desde 340$', consultas: 18, editado: '30/01/26 2:16PM' },
    { id: 5, thumb: { color: '#c0392b', initials: 'Fin\nSem.' }, nombre: 'Fin de Semana en Mérida', ubicacion: 'Mérida', dias: '2 Días 1 Noche', personas: 'Por Persona', precio: 'Desde 75$', consultas: 9, editado: '31/01/26 9:00AM' },
    { id: 6, thumb: { color: '#00695c', initials: 'Aven.\nCana.' }, nombre: 'Aventura en Canaima', ubicacion: 'Bolívar', dias: '4 Días 3 Noches', personas: 'Por Persona', precio: 'Desde 290$', consultas: 22, editado: '01/02/26 10:30AM' },
    { id: 7, thumb: { color: '#37474f', initials: 'Fin\nMorr.' }, nombre: 'Fin de Semana en Morrocoy', ubicacion: 'Falcón', dias: '2 Días 1 Noche', personas: 'Por Pareja', precio: 'Desde 160$', consultas: 7, editado: '02/02/26 3:45PM' },
];

const COLUMNS = [
    { key: 'thumb', label: 'Portada', render: (v) => <Thumb color={v.color} initials={v.initials} /> },
    { key: 'nombre', label: 'Nombre' },
    { key: 'ubicacion', label: 'Ubicación' },
    { key: 'dias', label: 'Días' },
    { key: 'personas', label: 'Personas' },
    { key: 'precio', label: 'Precio' },
    { key: 'consultas', label: 'Consultas' },
    { key: 'editado', label: 'Editado' },
];

// ── Form ──────────────────────────────────────────────────────────────────────
const PaqueteForm = () => {
    const [form, setForm] = useState({
        nombre: '', hotel: '', personas: '', dias: '', noches: '',
        tipoServicio: '', precioInicial: '', descripcion: '',
        informacion: '', caracteristicas: '', activo: false, fechaFin: false,
    });

    const set = (k) => (e) =>
        setForm((f) => ({ ...f, [k]: e.target.type === 'checkbox' ? e.target.checked : e.target.value }));

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Paquete creado (datos en consola)');
        console.log(form);
    };

    return (
        <FormCard title="Crear un Nuevo Paquete" onSubmit={handleSubmit} submitLabel="Crear Paquete">
            {/* Two columns: fields | images */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Left: fields */}
                <div className="space-y-4">
                    <FormInput label="Nombre del Paquete" id="pkg-nombre" value={form.nombre} onChange={set('nombre')} />
                    <FormSelect label="Hotel · Posada · Campamento" id="pkg-hotel"
                        options={['Hotel Sol Caribe', 'Hotel Playa Mar', 'Hotel Vista al Mar', 'Posada Colonial']}
                        value={form.hotel} onChange={set('hotel')}
                    />
                    <div className="grid grid-cols-3 gap-3">
                        <FormSelect label="Personas" id="pkg-personas"
                            options={['1', '2', '3', '4', '5', '6+']}
                            value={form.personas} onChange={set('personas')}
                        />
                        <FormInput label="Días" id="pkg-dias" type="number" min="1" value={form.dias} onChange={set('dias')} />
                        <FormInput label="Noches" id="pkg-noches" type="number" min="0" value={form.noches} onChange={set('noches')} />
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                        <FormSelect label="Tipo de Servicio" id="pkg-servicio"
                            options={['Todo Incluido', 'Solo Alojamiento', 'Desayuno Incluido', 'Media Pensión']}
                            value={form.tipoServicio} onChange={set('tipoServicio')}
                        />
                        <FormInput label="Precio Inicial ($)" id="pkg-precio" type="number" min="0" step="0.01"
                            value={form.precioInicial} onChange={set('precioInicial')}
                        />
                    </div>
                </div>

                {/* Right: images */}
                <div className="space-y-4">
                    <div>
                        <p className="text-xs font-semibold text-[#001f6c] mb-2">Banner</p>
                        <ImageSlot large />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <p className="text-xs font-semibold text-[#001f6c] mb-2">Thumbnail</p>
                            <ImageSlot />
                        </div>
                        <div>
                            <p className="text-xs font-semibold text-[#001f6c] mb-2">Galería de Imágenes</p>
                            <div className="grid grid-cols-3 gap-1.5">
                                <ImageSlot /><ImageSlot /><ImageSlot />
                                <ImageSlot /><ImageSlot />
                                <label className="h-20 w-20 flex items-center justify-center rounded-xl border-2 border-dashed border-[#ed6f00]/50 bg-[#f4f7fb] cursor-pointer hover:border-[#ed6f00] transition-colors text-2xl text-[#ed6f00] font-bold">
                                    +<input type="file" accept="image/*" multiple className="hidden" />
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Textareas */}
            <FormTextarea label="Descripción breve del Paquete" id="pkg-desc" rows={3} value={form.descripcion} onChange={set('descripcion')} />
            <FormTextarea label="Información" id="pkg-info" rows={5} value={form.informacion} onChange={set('informacion')} />
            <FormTextarea label="Características del Paquete" id="pkg-caract" rows={5} value={form.caracteristicas} onChange={set('caracteristicas')} />

            {/* Checkboxes */}
            <div className="flex flex-wrap items-center gap-6">
                <FormCheckbox label="Paquete Activo" id="pkg-activo" checked={form.activo} onChange={set('activo')} />
                <FormCheckbox label="Tiene Fecha de Finalización" id="pkg-fechafin" checked={form.fechaFin} onChange={set('fechaFin')} />
            </div>
        </FormCard>
    );
};

// ── Page ──────────────────────────────────────────────────────────────────────
const Paquetes = () => (
    <div className="p-6 space-y-8">
        <AdminTable
            title="Paquetes"
            newLabel="+ Nuevo Paquete"
            columns={COLUMNS}
            data={DATA}
            pageSize={5}
            onNew={() => document.getElementById('form-paquete')?.scrollIntoView({ behavior: 'smooth' })}
            onView={(row) => alert(`Ver: ${row.nombre}`)}
            onEdit={(row) => alert(`Editar: ${row.nombre}`)}
            onArchive={(row) => alert(`Archivar: ${row.nombre}`)}
        />
        <div id="form-paquete">
            <PaqueteForm />
        </div>
    </div>
);

export default Paquetes;
