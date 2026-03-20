import React, { useState, useEffect } from 'react';
import FilterBar from '../components/home/FilterBar';
import HeroSlider from '../components/home/HeroSlider';
import PromoCardCarousel from '../components/home/PromoCardCarousel';
import TestimonialCarousel from '../components/home/TestimonialCarousel';
import api from '../api/axios';

import mgtathmb from '../assets/mgtathmb.jpg';
import testimonial1 from '../assets/testimonial1.jpg';
import testimonial2 from '../assets/testimonial2.jpg';
import testimonial3 from '../assets/testimonial3.jpg';

const TESTIMONIALS = [
    { image: testimonial1, name: 'María G.', stars: 5, quote: 'Excelente servicio en todo. Tanto los hoteles, transporte y atención. Gracias a usted por sus servicios.' },
    { image: testimonial2, name: 'Carlos R.', stars: 5, quote: 'Excelente servicio en todo. Excelente las habitaciones, piscina, buena comida y muy buena atención.' },
    { image: testimonial3, name: 'Andrea P.', stars: 5, quote: 'La atención de mi bella Leodalbis increíble, como siempre la mejor en todo desde hace ya 3 años.' },
    { image: testimonial1, name: 'María G.', stars: 5, quote: 'Excelente servicio en todo. Tanto los hoteles, transporte y atención. Gracias a usted por sus servicios.' },
    { image: testimonial2, name: 'Carlos R.', stars: 5, quote: 'Excelente servicio en todo. Excelente las habitaciones, piscina, buena comida y muy buena atención.' },
    { image: testimonial3, name: 'Andrea P.', stars: 5, quote: 'La atención de mi bella Leodalbis increíble, como siempre la mejor en todo desde hace ya 3 años.' },
];

const Home = () => {
    const [packages, setPackages] = useState([]);
    const [flights, setFlights] = useState([]);
    const [filters, setFilters] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const [pRes, fRes] = await Promise.all([api.get('/packages'), api.get('/flights')]);
                setPackages(pRes.data || []);
                setFlights(fRes.data || []);
            } catch (err) {
                console.error('Error loading home data:', err);
            }
        };
        fetchData();
    }, []);

    const filterItems = (items) => {
        if (!filters) return items;
        return items.filter(item => {
            const locMatch = !filters.ubicacion || 
                (item.destination && item.destination.toLowerCase().includes(filters.ubicacion.toLowerCase())) ||
                (item.accommodation?.post?.name && item.accommodation.post.name.toLowerCase().includes(filters.ubicacion.toLowerCase())) ||
                (item.post?.name && item.post.name.toLowerCase().includes(filters.ubicacion.toLowerCase()));

            const price = Number(item.starting_price);
            const priceMatch = !filters.priceRange || (price >= filters.priceRange.min && price <= filters.priceRange.max);

            // Date match for packages with end_date
            let dateMatch = true;
            if (filters.startDate && item.end_date) {
                dateMatch = new Date(item.end_date) >= new Date(filters.startDate);
            }

            return locMatch && priceMatch && dateMatch;
        });
    };

    const mapPackageToCard = (p) => ({
        id: p.packages_ID,
        image: p.post?.thumbnail ? `http://localhost:8000/storage/${p.post.thumbnail}` : mgtathmb,
        title: p.post?.name || 'Paquete',
        subtitle: p.post?.overview || 'Detalle del paquete',
        priceLabel: 'Desde',
        priceValue: `$${p.starting_price}`,
        ctaLabel: 'Ver Paquetes',
        onCtaClick: () => alert(`Ver paquete ${p.packages_ID}`),
    });

    const mapFlightToCard = (f) => ({
        id: f.flights_ID,
        image: f.post?.thumbnail ? `http://localhost:8000/storage/${f.post.thumbnail}` : mgtathmb,
        title: f.post?.name || `Vuelo a ${f.destination || 'Destino'}`,
        subtitle: f.post?.overview || 'Boletería aérea disponible',
        priceLabel: 'Desde',
        priceValue: `$${f.starting_price}`,
        ctaLabel: 'Ver Vuelo',
        onCtaClick: () => alert(`Ver Vuelo ${f.flights_ID}`),
    });

    const filteredPackages = filterItems(packages);
    const filteredFlights = filterItems(flights);

    return (
        <div>
            <HeroSlider />
            <FilterBar onSearch={setFilters} />

            <section className="px-4 sm:px-6 py-10">
                <PromoCardCarousel
                    title="Paquetes irresistibles"
                    subtitle="Viaja pagando en comodas cuotas"
                    items={filteredPackages.map(mapPackageToCard)}
                />
            </section>

            <section className="px-4 sm:px-6 py-10">
                <PromoCardCarousel
                    title="Oferta en Boleteria Aerea"
                    subtitle="Boleteria nacional e internacional"
                    items={filteredFlights.map(mapFlightToCard)}
                />
            </section>

            {/* ── Testimonials ────────────────────────────────────── */}
            <section className="px-4 sm:px-6 py-10">
                <TestimonialCarousel
                    title="Lo que dicen nuestros viajeros"
                    subtitle="Experiencias reales de quienes confiaron en nosotros"
                    items={TESTIMONIALS}
                />
            </section>
        </div>
    );
};

export default Home;
