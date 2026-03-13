import React from 'react';
import FilterBar from '../components/home/FilterBar';
import HeroSlider from '../components/home/HeroSlider';
import PromoCardCarousel from '../components/home/PromoCardCarousel';
import TestimonialCarousel from '../components/home/TestimonialCarousel';
import bogthmb from '../assets/bogthmb.jpg';
import bolthmb from '../assets/bolthmb.jpg';
import miathmb from '../assets/miathmb.jpg';
import mgtathmb from '../assets/mgtathmb.jpg';
import canthmb from '../assets/canthmb.jpg';
import merthmb from '../assets/merthmb.jpg';
import lrqthmb from '../assets/lrqthmb.jpg';
import cocthmb from '../assets/cocthmb.jpg';
import methmb from '../assets/methmb.jpg';
import testimonial1 from '../assets/testimonial1.jpg';
import testimonial2 from '../assets/testimonial2.jpg';
import testimonial3 from '../assets/testimonial3.jpg';

const TESTIMONIALS = [
    {
        image: testimonial1,
        name: 'María G.',
        stars: 5,
        quote: 'Excelente servicio en todo. Tanto los hoteles, transporte y atención. Gracias a usted por sus servicios.',
    },
    {
        image: testimonial2,
        name: 'Carlos R.',
        stars: 5,
        quote: 'Excelente servicio en todo. Excelente las habitaciones, piscina, buena comida y muy buena atención.',
    },
    {
        image: testimonial3,
        name: 'Andrea P.',
        stars: 5,
        quote: 'La atención de mi bella Leodalbis increíble, como siempre la mejor en todo desde hace ya 3 años.',
    },
    // Repeated so the carousel loops nicely
    {
        image: testimonial1,
        name: 'María G.',
        stars: 5,
        quote: 'Excelente servicio en todo. Tanto los hoteles, transporte y atención. Gracias a usted por sus servicios.',
    },
    {
        image: testimonial2,
        name: 'Carlos R.',
        stars: 5,
        quote: 'Excelente servicio en todo. Excelente las habitaciones, piscina, buena comida y muy buena atención.',
    },
    {
        image: testimonial3,
        name: 'Andrea P.',
        stars: 5,
        quote: 'La atención de mi bella Leodalbis increíble, como siempre la mejor en todo desde hace ya 3 años.',
    },
];

const Home = () => {
    return (
        <div>
            <HeroSlider />
            <FilterBar />

            <section className="px-4 sm:px-6 py-10">
                <PromoCardCarousel
                    title="Paquetes irresistibles"
                    subtitle="Viaja pagando en comodas cuotas"
                    items={[
                        {
                            id: 1,
                            image: mgtathmb,
                            title: 'Paquete a Margarita',
                            subtitle: 'Vive la experiencia todo incluido en la Perla del Caribe',
                            priceLabel: 'Desde',
                            priceValue: '$54',
                            ctaLabel: 'Ver Paquetes',
                            onCtaClick: () => alert('Reservar clicked'),
                        },
                        {
                            id: 2,
                            image: canthmb,
                            title: 'Aventura en Canaima',
                            subtitle: 'Descubre la magia del Salto Ángel y sus tepuyes',
                            priceLabel: 'Desde',
                            priceValue: '$320',
                            ctaLabel: 'Ver Paquetes',
                            onCtaClick: () => alert('Reservar clicked'),
                        },
                        {
                            id: 3,
                            image: merthmb,
                            title: 'Paraíso en Mérida',
                            subtitle: 'Conecta con la naturaleza y el clima de los Andes',
                            priceLabel: 'Desde',
                            priceValue: '$165',
                            ctaLabel: 'Ver Paquetes',
                            onCtaClick: () => alert('Reservar clicked'),
                        },
                        {
                            id: 4,
                            image: lrqthmb,
                            title: 'Descanso en Los Roques',
                            subtitle: 'Relájate en las aguas cristalinas del archipiélago',
                            priceLabel: 'Desde',
                            priceValue: '$450',
                            ctaLabel: 'Ver Paquetes',
                            onCtaClick: () => alert('Reservar clicked'),
                        },
                        {
                            id: 5,
                            image: cocthmb,
                            title: 'Escapada a Isla de Coche',
                            subtitle: 'Sol, arena y pura diversión',
                            priceLabel: 'Desde',
                            priceValue: '$80',
                            ctaLabel: 'Ver Paquetes',
                            onCtaClick: () => alert('Reservar clicked'),
                        },
                        {
                            id: 6,
                            image: mgtathmb,
                            title: 'Escapadas Románticas',
                            subtitle: 'Momentos inolvidables en destinos seleccionados',
                            priceLabel: 'Desde',
                            priceValue: '$190',
                            ctaLabel: 'Ver Paquetes',
                            onCtaClick: () => alert('Reservar clicked'),
                        },
                    ]}
                />
            </section>

            <section className="px-4 sm:px-6 py-10">
                <PromoCardCarousel
                    title="Oferta en Boleteria Aerea"
                    subtitle="Boleteria nacional e internacional"
                    items={[
                        {
                            id: 1,
                            image: bogthmb,
                            title: 'Viajes a la medida',
                            subtitle: 'Conecta con los mejores destinos de Sudamérica',
                            priceLabel: 'Desde',
                            priceValue: '$190',
                            ctaLabel: 'Ver Vuelos',
                            onCtaClick: () => alert('Ver Vuelos clicked'),
                        },
                        {
                            id: 2,
                            image: bolthmb,
                            title: 'Vuelo a Bolivia',
                            subtitle: 'Explora la magia de los Andes, desde el Salar de Uyuni hasta La Paz.',
                            priceLabel: 'Desde',
                            priceValue: '$210',
                            ctaLabel: 'Ver Vuelos',
                            onCtaClick: () => alert('Ver Vuelos clicked'),
                        },
                        {
                            id: 3,
                            image: miathmb,
                            title: 'Destinos Internacionales',
                            subtitle: 'Vuela seguro con equipaje incluido',
                            priceLabel: 'Desde',
                            priceValue: '$480',
                            ctaLabel: 'Ver Vuelo',
                            onCtaClick: () => alert('Ver Vuelos clicked'),
                        },
                        {
                            id: 4,
                            image: methmb,
                            title: 'Vuelo a Cancún',
                            subtitle: 'Disfruta de las mejores playas del Caribe con paquetes todo incluido.',
                            priceLabel: 'Desde',
                            priceValue: '$150',
                            ctaLabel: 'Ver Vuelos',
                            onCtaClick: () => alert('Ver Vuelos clicked'),
                        },
                        {
                            id: 5,
                            image: bogthmb,
                            title: 'Destinos sorpresa',
                            subtitle: 'Descubre nuevas ciudades a precios increíbles',
                            priceLabel: 'Desde',
                            priceValue: '$290',
                            ctaLabel: 'Ver Vuelos',
                            onCtaClick: () => alert('Ver Vuelos clicked'),
                        },
                        {
                            id: 6,
                            image: miathmb,
                            title: 'Conexión garantizada',
                            subtitle: 'La forma más rápida de llegar a tu destino',
                            priceLabel: 'Desde',
                            priceValue: '$390',
                            ctaLabel: 'Ver Vuelos',
                            onCtaClick: () => alert('Ver Vuelos clicked'),
                        },
                    ]}
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

