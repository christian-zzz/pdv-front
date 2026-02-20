import React, { useState } from 'react';
import AdminTable from '../../components/dashboard/AdminTable';
import FormCard, { FormSelect } from '../../components/dashboard/FormCard';

const Badge = ({ label }) => {
    const colors = {
        'Pendiente': 'bg-yellow-400 text-yellow-900',
        'Respondida': 'bg-green-500 text-white',
        'Archivada': 'bg-gray-400 text-white',
    };
    return (
        <span className={`inline-block px-2.5 py-0.5 rounded-full text-[10px] font-bold ${colors[label] ?? 'bg-gray-300 text-gray-700'}`}>
            {label}
        </span>
    );
};

const DATA = [
    { id: 1, nombre: 'María López', email: 'maria@mail.com', telefono: '+58 412-111-2233', asunto: 'Consulta sobre paquetes', fecha: '30/01/26 9:00AM', estado: 'Pendiente' },
    { id: 2, nombre: 'Carlos Pérez', email: 'carlos@mail.com', telefono: '+58 414-222-3344', asunto: 'Disponibilidad vuelos Cancún', fecha: '30/01/26 10:30AM', estado: 'Respondida' },
    { id: 3, nombre: 'Ana García', email: 'ana@mail.com', telefono: '+58 416-333-4455', asunto: 'Precio hotel Margarita', fecha: '31/01/26 11:00AM', estado: 'Pendiente' },
    { id: 4, nombre: 'Luis Martínez', email: 'luis@mail.com', telefono: '+58 424-444-5566', asunto: 'Paquetes familiares', fecha: '31/01/26 2:00PM', estado: 'Respondida' },
    { id: 5, nombre: 'Sofía Rodríguez', email: 'sofia@mail.com', telefono: '+58 426-555-6677', asunto: 'Fechas disponibles Canaima', fecha: '01/02/26 8:30AM', estado: 'Pendiente' },
    { id: 6, nombre: 'José Hernández', email: 'jose@mail.com', telefono: '+58 412-666-7788', asunto: 'Modificar reserva', fecha: '01/02/26 3:15PM', estado: 'Archivada' },
    { id: 7, nombre: 'Laura Sánchez', email: 'laura@mail.com', telefono: '+58 414-777-8899', asunto: 'Vuelos nacionales disponibles', fecha: '02/02/26 9:00AM', estado: 'Pendiente' },
    { id: 8, nombre: 'Pedro Gómez', email: 'pedro@mail.com', telefono: '+58 416-888-9900', asunto: 'Paquete todo incluido', fecha: '02/02/26 4:45PM', estado: 'Respondida' },
];

const COLUMNS = [
    { key: 'nombre', label: 'Nombre' },
    { key: 'email', label: 'Email' },
    { key: 'telefono', label: 'Teléfono' },
    { key: 'asunto', label: 'Asunto' },
    { key: 'fecha', label: 'Fecha' },
    { key: 'estado', label: 'Estado', render: (v) => <Badge label={v} /> },
];

// ── Respond / update form ─────────────────────────────────────────────────────
const ConsultaForm = () => {
    const [form, setForm] = useState({ nombre: '', email: '', asunto: '', respuesta: '', estado: '' });
    const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

    return (
        <FormCard
            title="Responder Consulta"
            onSubmit={(e) => { e.preventDefault(); console.log(form); alert('Respuesta enviada'); }}
            submitLabel="Enviar Respuesta"
        >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Read-only info fields */}
                <div className="flex flex-col gap-1">
                    <label className="text-xs font-semibold text-[#001f6c]">Cliente</label>
                    <input readOnly placeholder="Nombre del cliente…"
                        className="w-full rounded-lg border border-[#ed6f00]/30 bg-[#f4f7fb] px-3 py-2 text-sm text-[#001f6c] placeholder-gray-400 cursor-not-allowed"
                        value={form.nombre} onChange={set('nombre')}
                    />
                </div>
                <div className="flex flex-col gap-1">
                    <label className="text-xs font-semibold text-[#001f6c]">Email</label>
                    <input readOnly placeholder="Email del cliente…"
                        className="w-full rounded-lg border border-[#ed6f00]/30 bg-[#f4f7fb] px-3 py-2 text-sm text-[#001f6c] placeholder-gray-400 cursor-not-allowed"
                        value={form.email} onChange={set('email')}
                    />
                </div>
                <div className="flex flex-col gap-1 sm:col-span-2">
                    <label className="text-xs font-semibold text-[#001f6c]">Asunto</label>
                    <input readOnly placeholder="Asunto de la consulta…"
                        className="w-full rounded-lg border border-[#ed6f00]/30 bg-[#f4f7fb] px-3 py-2 text-sm text-[#001f6c] placeholder-gray-400 cursor-not-allowed"
                        value={form.asunto} onChange={set('asunto')}
                    />
                </div>
            </div>

            <div className="flex flex-col gap-1">
                <label htmlFor="cs-respuesta" className="text-xs font-semibold text-[#001f6c]">Respuesta</label>
                <textarea
                    id="cs-respuesta"
                    rows={6}
                    placeholder="Escribe tu respuesta aquí…"
                    className="w-full rounded-lg border border-[#ed6f00]/50 bg-white px-3 py-2 text-sm text-[#001f6c] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#ed6f00]/40 transition resize-y"
                    value={form.respuesta}
                    onChange={set('respuesta')}
                />
            </div>

            <FormSelect label="Actualizar Estado" id="cs-estado"
                options={['Pendiente', 'Respondida', 'Archivada']}
                value={form.estado} onChange={set('estado')}
            />
        </FormCard>
    );
};

const Consultas = () => (
    <div className="p-6 space-y-8">
        <AdminTable
            title="Consultas"
            columns={COLUMNS}
            data={DATA}
            pageSize={5}
            onView={(row) => alert(`Ver consulta de: ${row.nombre}`)}
            onEdit={(row) => {
                alert(`Respondiendo a: ${row.nombre}`);
                document.getElementById('form-consulta')?.scrollIntoView({ behavior: 'smooth' });
            }}
            onArchive={(row) => alert(`Archivar consulta de: ${row.nombre}`)}
        />
        <div id="form-consulta"><ConsultaForm /></div>
    </div>
);

export default Consultas;
