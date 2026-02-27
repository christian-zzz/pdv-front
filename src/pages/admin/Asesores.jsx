import React, { useState, useEffect } from 'react';
import api from '../../api/axios';

const Asesores = () => {
    const [consultants, setConsultants] = useState([]);
    const [loading, setLoading] = useState(true);
    const [formData, setFormData] = useState({
        name: '',
        img: '',
        phone: ''
    });
    const [submitting, setSubmitting] = useState(false);
    const [message, setMessage] = useState({ type: '', text: '' });

    useEffect(() => {
        fetchConsultants();
    }, []);

    const fetchConsultants = async () => {
        try {
            const response = await api.get('/consultants');
            setConsultants(response.data);
        } catch (error) {
            console.error('Error fetching consultants:', error);
            setMessage({ type: 'error', text: 'Error al cargar asesores.' });
        } finally {
            setLoading(false);
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSubmitting(true);
        setMessage({ type: '', text: '' });

        try {
            await api.post('/consultants', formData);
            setMessage({ type: 'success', text: 'Asesor creado exitosamente.' });
            setFormData({ name: '', img: '', phone: '' });
            fetchConsultants();
        } catch (error) {
            console.error('Error creating consultant:', error);
            setMessage({
                type: 'error',
                text: error.response?.data?.message || 'Error al crear el asesor.'
            });
        } finally {
            setSubmitting(false);
        }
    };

    const handleDelete = async (id) => {
        if (!window.confirm('¿Está seguro de eliminar este asesor?')) return;
        try {
            await api.delete(`/consultants/${id}`);
            setMessage({ type: 'success', text: 'Asesor eliminado correctamente.' });
            fetchConsultants();
        } catch (error) {
            console.error('Error deleting consultant:', error);
            setMessage({ type: 'error', text: 'Error al eliminar el asesor.' });
        }
    };

    return (
        <div className="p-6 max-w-7xl mx-auto space-y-8">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-2xl font-bold text-[#001f6c]">Gestión de Asesores</h1>
                    <p className="text-sm text-gray-500 mt-1">Crea nuevos asesores para asignarles consultas.</p>
                </div>
            </div>

            {message.text && (
                <div className={`p-4 rounded-xl text-sm font-medium ${message.type === 'success' ? 'bg-green-50 text-green-700 border border-green-200' : 'bg-red-50 text-red-700 border border-red-200'}`}>
                    {message.text}
                </div>
            )}

            {/* List of Consultants */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="px-6 py-4 border-b border-gray-100 bg-gray-50">
                    <h2 className="text-lg font-bold text-[#001f6c]">Asesores Existentes</h2>
                </div>
                {loading ? (
                    <div className="p-10 flex justify-center">
                        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#ed6f00]"></div>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
                        {consultants.map(consultant => (
                            <div key={consultant.id} className="border border-gray-200 rounded-xl p-5 flex flex-col items-center text-center hover:shadow-md transition-shadow">
                                <div className="w-20 h-20 rounded-full bg-gray-100 mb-4 overflow-hidden border-2 border-white shadow-sm flex items-center justify-center">
                                    {consultant.img ? (
                                        <img src={consultant.img} alt={consultant.name} className="w-full h-full object-cover" />
                                    ) : (
                                        <svg className="w-10 h-10 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                                        </svg>
                                    )}
                                </div>
                                <h3 className="font-bold text-gray-900 text-lg mb-1">{consultant.name}</h3>
                                <div className="flex items-center gap-1.5 text-gray-500 text-sm mb-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                                        <path fillRule="evenodd" d="M2 3.5A1.5 1.5 0 013.5 2h1.148a1.5 1.5 0 011.465 1.175l.716 3.223a1.5 1.5 0 01-1.052 1.767l-.933.267c-.41.117-.643.555-.48.95a11.542 11.542 0 006.254 6.254c.395.163.833-.07.95-.48l.267-.933a1.5 1.5 0 011.767-1.052l3.223.716A1.5 1.5 0 0118 15.352V16.5a1.5 1.5 0 01-1.5 1.5H15c-1.149 0-2.263-.15-3.326-.43A13.022 13.022 0 012.43 8.326 13.019 13.019 0 012 5V3.5z" clipRule="evenodd" />
                                    </svg>
                                    {consultant.phone}
                                </div>
                                <button
                                    onClick={() => handleDelete(consultant.id)}
                                    className="px-4 py-1.5 text-sm text-red-600 hover:bg-red-50 rounded-lg transition-colors border border-transparent hover:border-red-200 mt-auto"
                                >
                                    Eliminar
                                </button>
                            </div>
                        ))}
                        {consultants.length === 0 && (
                            <div className="col-span-full py-8 text-center text-gray-500">
                                No hay asesores registrados.
                            </div>
                        )}
                    </div>
                )}
            </div>

            {/* Create Consultant Form */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="px-6 py-4 border-b border-gray-100 bg-gray-50">
                    <h2 className="text-lg font-bold text-[#001f6c]">Nuevo Asesor</h2>
                </div>
                <div className="p-6">
                    <form onSubmit={handleSubmit} className="space-y-6 max-w-2xl">
                        <div className="grid grid-cols-1 gap-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Nombre Completo</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    required
                                    className="w-full px-4 py-2 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#ed6f00] focus:border-transparent outline-none transition-all"
                                    placeholder="Ej. María Sánchez"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Celular / WhatsApp</label>
                                <input
                                    type="text"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleInputChange}
                                    required
                                    className="w-full px-4 py-2 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#ed6f00] focus:border-transparent outline-none transition-all"
                                    placeholder="Ej. +1234567890 (Incluir código de país)"
                                />
                                <p className="text-xs text-gray-500 mt-1">El número debe incluir el código de país para que el botón de WhatsApp funcione.</p>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">URL de Imagen (Opcional)</label>
                                <input
                                    type="url"
                                    name="img"
                                    value={formData.img}
                                    onChange={handleInputChange}
                                    className="w-full px-4 py-2 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#ed6f00] focus:border-transparent outline-none transition-all"
                                    placeholder="https://ejemplo.com/foto.jpg"
                                />
                            </div>
                        </div>

                        <div className="flex justify-end pt-4">
                            <button
                                type="submit"
                                disabled={submitting}
                                className="px-6 py-2.5 bg-[#ed6f00] hover:bg-[#d86500] text-white rounded-xl font-medium transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
                            >
                                {submitting ? (
                                    <>
                                        <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                        </svg>
                                        Guardando...
                                    </>
                                ) : (
                                    'Guardar Asesor'
                                )}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Asesores;
