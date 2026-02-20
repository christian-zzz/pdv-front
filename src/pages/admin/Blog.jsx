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

const Badge = ({ label, color }) => (
    <span className={`inline-block px-2.5 py-0.5 rounded-full text-[10px] font-bold text-white ${color}`}>{label}</span>
);

const DATA = [
    { id: 1, thumb: { color: '#0277bd', initials: 'Isle\nMarg.' }, titulo: 'Conoce la Isla de Margarita', categoria: 'Destinos', fecha: '15/01/26', consultas: 88, estado: 'Publicado', editado: '30/01/26 8:00AM' },
    { id: 2, thumb: { color: '#00695c', initials: 'Top\n10' }, titulo: 'Top 10 Mejores Playas de Margarita', categoria: 'Playas', fecha: '18/01/26', consultas: 65, estado: 'Publicado', editado: '30/01/26 9:00AM' },
    { id: 3, thumb: { color: '#7b1fa2', initials: 'Hot.\nExcl.' }, titulo: 'Hoteles más Exclusivos de Margarita', categoria: 'Hoteles', fecha: '20/01/26', consultas: 52, estado: 'Publicado', editado: '31/01/26 10:00AM' },
    { id: 4, thumb: { color: '#e65100', initials: 'Gast.\nIsla' }, titulo: 'Gastronomía típica de la isla', categoria: 'Cultura', fecha: '22/01/26', consultas: 40, estado: 'Publicado', editado: '01/02/26 11:00AM' },
    { id: 5, thumb: { color: '#2e7d32', initials: 'Vue.\nMarg.' }, titulo: 'Vuelos directos a Margarita 2026', categoria: 'Vuelos', fecha: '25/01/26', consultas: 33, estado: 'Borrador', editado: '02/02/26 12:00PM' },
    { id: 6, thumb: { color: '#37474f', initials: 'Tips\nViaj.' }, titulo: 'Tips para viajar en temporada alta', categoria: 'Consejos', fecha: '28/01/26', consultas: 27, estado: 'Publicado', editado: '03/02/26 1:00PM' },
    { id: 7, thumb: { color: '#c62828', initials: 'Paq.\nFam.' }, titulo: 'Los mejores paquetes para familias', categoria: 'Paquetes', fecha: '01/02/26', consultas: 19, estado: 'Borrador', editado: '04/02/26 2:00PM' },
];

const COLUMNS = [
    { key: 'thumb', label: 'Portada', render: (v) => <Thumb color={v.color} initials={v.initials} /> },
    { key: 'titulo', label: 'Título' },
    { key: 'categoria', label: 'Categoría' },
    { key: 'fecha', label: 'Publicado' },
    { key: 'consultas', label: 'Consultas' },
    { key: 'estado', label: 'Estado', render: (v) => <Badge label={v} color={v === 'Publicado' ? 'bg-green-500' : 'bg-gray-400'} /> },
    { key: 'editado', label: 'Editado' },
];

const BlogForm = () => {
    const [form, setForm] = useState({
        titulo: '', categoria: '', contenido: '', descripcion: '', publicado: false,
    });
    const set = (k) => (e) =>
        setForm((f) => ({ ...f, [k]: e.target.type === 'checkbox' ? e.target.checked : e.target.value }));

    return (
        <FormCard title="Crear un Nuevo Post" onSubmit={(e) => { e.preventDefault(); console.log(form); alert('Post creado'); }} submitLabel="Crear Post">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="space-y-4">
                    <FormInput label="Título del Post" id="bl-titulo" value={form.titulo} onChange={set('titulo')} />
                    <FormSelect label="Categoría" id="bl-categoria"
                        options={['Destinos', 'Playas', 'Hoteles', 'Vuelos', 'Cultura', 'Consejos', 'Paquetes', 'Gastronomía']}
                        value={form.categoria} onChange={set('categoria')}
                    />
                    <FormTextarea label="Descripción breve" id="bl-desc" rows={4} value={form.descripcion} onChange={set('descripcion')} />
                </div>
                <div className="space-y-4">
                    <div>
                        <p className="text-xs font-semibold text-[#001f6c] mb-2">Banner del Post</p>
                        <ImageSlot large />
                    </div>
                    <div>
                        <p className="text-xs font-semibold text-[#001f6c] mb-2">Thumbnail</p>
                        <ImageSlot />
                    </div>
                </div>
            </div>
            <FormTextarea label="Contenido del Post" id="bl-contenido" rows={8}
                placeholder="Escribe el contenido completo aquí…"
                value={form.contenido} onChange={set('contenido')}
            />
            <div className="flex gap-6">
                <FormCheckbox label="Publicar inmediatamente" id="bl-pub" checked={form.publicado} onChange={set('publicado')} />
            </div>
        </FormCard>
    );
};

const Blog = () => (
    <div className="p-6 space-y-8">
        <AdminTable
            title="Blog"
            newLabel="+ Nuevo Post"
            columns={COLUMNS}
            data={DATA}
            pageSize={5}
            onNew={() => document.getElementById('form-blog')?.scrollIntoView({ behavior: 'smooth' })}
            onView={(row) => alert(`Ver: ${row.titulo}`)}
            onEdit={(row) => alert(`Editar: ${row.titulo}`)}
            onArchive={(row) => alert(`Archivar: ${row.titulo}`)}
        />
        <div id="form-blog"><BlogForm /></div>
    </div>
);

export default Blog;
