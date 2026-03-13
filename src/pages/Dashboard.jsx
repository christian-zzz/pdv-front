import React from 'react';
import StatsCard from '../components/dashboard/StatsCard';
import ConsultasChart from '../components/dashboard/ConsultasChart';
import TopListCard from '../components/dashboard/TopListCard';

// ─── Mock data (replace with API calls later) ────────────────────────────────
const STATS = [
    { label: 'Paquetes Activos', value: 8, to: '/dashboard/paquetes' },
    { label: 'Vuelos', value: 5, to: '/dashboard/vuelos' },
    { label: 'Hoteles', value: 10, to: '/dashboard/hoteles' },
    { label: 'Posts Blog', value: 20, to: '/dashboard/blog' },
    { label: 'Consultas Realizadas', value: 35, to: '/dashboard/consultas' },
];

const CONSULTAS_WEEKLY = [4, 7, 5, 9, 6, 12, 8]; // Lun–Dom

const TOP_PACKAGES = [
    'Vacaciones de Verano – Margarita',
    'Plan Romántico Tem Baja – Margarita',
    'Fin de Semana en Morrocoy',
    'Aventura en Canaima',
    'Fin de Semana en Mérida',
];

const TOP_FLIGHTS = [
    'Bogotá',
    'Cancún',
    'Santa Lucía',
    'Medellín',
    'Barbados',
];

const TOP_POSTS = [
    'Conoce la Isla de Margarita',
    'Top 10 Mejores Playas de Isla de Margarita',
    'Hoteles más Exclusivos de Margarita',
];
// ─────────────────────────────────────────────────────────────────────────────

const Dashboard = () => {
    return (
        <div className="p-6 space-y-6">
            {/* Page title */}
            <div id="tour-dashboard-card">
                <h1 className="text-2xl font-extrabold text-[#001f6c]">Dashboard</h1>
                <p className="text-sm text-[#8898aa] mt-0.5">
                    Resumen general del sitio web
                </p>
            </div>

            {/* ── Row 1: All Stats (5 cards) ───────────────────────────── */}
            <div id="tour-stats-row" className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
                {STATS.map((s) => (
                    <StatsCard
                        key={s.label}
                        label={s.label}
                        value={s.value}
                        accent={s.accent}
                        to={s.to}
                    />
                ))}
            </div>

            {/* ── Row 2: Chart (full width, card height) ───────────────── */}
            <div id="tour-consultas-chart">
                <ConsultasChart
                    data={CONSULTAS_WEEKLY}
                    to="/dashboard/consultas"
                />
            </div>

            {/* ── Row 3: Top lists ─────────────────────────────────────── */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <TopListCard
                    title="Paquete más consultado"
                    items={TOP_PACKAGES}
                    to="/dashboard/paquetes"
                />
                <TopListCard
                    title="Vuelos más consultado"
                    items={TOP_FLIGHTS}
                    to="/dashboard/vuelos"
                />
                <TopListCard
                    title="Post más visitado"
                    items={TOP_POSTS}
                    to="/dashboard/blog"
                />
            </div>
        </div>
    );
};

export default Dashboard;
