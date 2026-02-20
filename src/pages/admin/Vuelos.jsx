import React, { useState } from 'react';
import AdminTable from '../../components/dashboard/AdminTable';
import FormCard, { FormInput, FormSelect, FormTextarea, FormCheckbox } from '../../components/dashboard/FormCard';

const DATA = [
    { id: 1, origen: 'Caracas', destino: 'Bogotá', aerolinea: 'Avianca', fecha: '15/03/26', salida: '08:00', llegada: '10:30', precio: '$180', consultas: 34, editado: '30/01/26 9:00AM' },
    { id: 2, origen: 'Caracas', destino: 'Cancún', aerolinea: 'InselAir', fecha: '20/03/26', salida: '11:00', llegada: '15:45', precio: '$320', consultas: 28, editado: '30/01/26 9:30AM' },
    { id: 3, origen: 'Caracas', destino: 'Santa Lucía', aerolinea: 'LASER', fecha: '22/03/26', salida: '14:00', llegada: '16:00', precio: '$95', consultas: 17, editado: '31/01/26 10:00AM' },
    { id: 4, origen: 'Caracas', destino: 'Medellín', aerolinea: 'Avianca', fecha: '01/04/26', salida: '07:30', llegada: '09:45', precio: '$210', consultas: 12, editado: '01/02/26 8:00AM' },
    { id: 5, origen: 'Caracas', destino: 'Barbados', aerolinea: 'Caribbean', fecha: '10/04/26', salida: '09:00', llegada: '11:15', precio: '$250', consultas: 21, editado: '02/02/26 11:00AM' },
    { id: 6, origen: 'Maracaibo', destino: 'Bogotá', aerolinea: 'Avianca', fecha: '18/03/26', salida: '06:00', llegada: '08:30', precio: '$195', consultas: 8, editado: '03/02/26 4:00PM' },
    { id: 7, origen: 'Caracas', destino: 'Panamá', aerolinea: 'Copa', fecha: '25/03/26', salida: '10:00', llegada: '12:00', precio: '$280', consultas: 11, editado: '04/02/26 2:00PM' },
];

const COLUMNS = [
    { key: 'origen', label: 'Origen' },
    { key: 'destino', label: 'Destino' },
    { key: 'aerolinea', label: 'Aerolínea' },
    { key: 'fecha', label: 'Fecha' },
    { key: 'salida', label: 'Salida' },
    { key: 'llegada', label: 'Llegada' },
    { key: 'precio', label: 'Precio' },
    { key: 'consultas', label: 'Consultas' },
    { key: 'editado', label: 'Editado' },
];

const VueloForm = () => {
    const [form, setForm] = useState({
        origen: '', destino: '', aerolinea: '', fecha: '',
        salida: '', llegada: '', precio: '', descripcion: '', activo: false,
    });
    const set = (k) => (e) =>
        setForm((f) => ({ ...f, [k]: e.target.type === 'checkbox' ? e.target.checked : e.target.value }));

    return (
        <FormCard title="Crear un Nuevo Vuelo" onSubmit={(e) => { e.preventDefault(); console.log(form); alert('Vuelo creado'); }} submitLabel="Crear Vuelo">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <FormInput label="Origen" id="vl-origen" value={form.origen} onChange={set('origen')} />
                <FormInput label="Destino" id="vl-destino" value={form.destino} onChange={set('destino')} />
                <FormSelect label="Aerolínea" id="vl-aerolinea"
                    options={['Avianca', 'Copa', 'InselAir', 'LASER', 'Caribbean Airlines', 'Conviasa']}
                    value={form.aerolinea} onChange={set('aerolinea')}
                />
                <FormInput label="Fecha de Vuelo" id="vl-fecha" type="date" value={form.fecha} onChange={set('fecha')} />
                <FormInput label="Hora de Salida" id="vl-salida" type="time" value={form.salida} onChange={set('salida')} />
                <FormInput label="Hora de Llegada" id="vl-llegada" type="time" value={form.llegada} onChange={set('llegada')} />
                <FormInput label="Precio ($)" id="vl-precio" type="number" min="0" step="0.01" value={form.precio} onChange={set('precio')} />
                <FormSelect label="Clase" id="vl-clase"
                    options={['Económica', 'Ejecutiva', 'Primera Clase']}
                    value={form.clase} onChange={set('clase')}
                />
            </div>
            <FormTextarea label="Descripción / Notas" id="vl-desc" rows={4} value={form.descripcion} onChange={set('descripcion')} />
            <div className="flex gap-6">
                <FormCheckbox label="Vuelo Activo" id="vl-activo" checked={form.activo} onChange={set('activo')} />
                <FormCheckbox label="Vuelo de Ida y Vuelta" id="vl-roundtrip" checked={form.roundtrip} onChange={set('roundtrip')} />
            </div>
        </FormCard>
    );
};

const Vuelos = () => (
    <div className="p-6 space-y-8">
        <AdminTable
            title="Vuelos"
            newLabel="+ Nuevo Vuelo"
            columns={COLUMNS}
            data={DATA}
            pageSize={5}
            onNew={() => document.getElementById('form-vuelo')?.scrollIntoView({ behavior: 'smooth' })}
            onView={(row) => alert(`Ver: ${row.origen} → ${row.destino}`)}
            onEdit={(row) => alert(`Editar: ${row.origen} → ${row.destino}`)}
            onArchive={(row) => alert(`Archivar: ${row.origen} → ${row.destino}`)}
        />
        <div id="form-vuelo"><VueloForm /></div>
    </div>
);

export default Vuelos;
