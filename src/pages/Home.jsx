import React from 'react';
import FilterBar from '../components/home/FilterBar';
import HeroSlider from '../components/home/HeroSlider';
import PromoCardCarousel from '../components/home/PromoCardCarousel';
import TestimonialCarousel from '../components/home/TestimonialCarousel';
import cardimg from '../assets/card.jpg';
import cardimg1 from '../assets/card1.jpg';
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
                            image: cardimg,
                            title: 'Hoteles en la Isla de Margarita',
                            subtitle: 'Vive la experiencia todo incluido en la isla de Margarita',
                            priceLabel: 'Desde',
                            priceValue: '$54',
                            ctaLabel: 'Reservar',
                            onCtaClick: () => alert('Reservar clicked'),
                        },
                        {
                            id: 2,
                            image: cardimg,
                            title: 'Escapadas frente al mar',
                            subtitle: 'Relájate con paquetes pensados para ti y tu familia',
                            priceLabel: 'Desde',
                            priceValue: '$72',
                            ctaLabel: 'Reservar',
                            onCtaClick: () => alert('Reservar clicked'),
                        },
                        {
                            id: 3,
                            image: cardimg,
                            title: 'Aventuras todo incluido',
                            subtitle: 'Disfruta experiencias únicas con servicios premium',
                            priceLabel: 'Desde',
                            priceValue: '$65',
                            ctaLabel: 'Reservar',
                            onCtaClick: () => alert('Reservar clicked'),
                        },
                        {
                            id: 4,
                            image: cardimg,
                            title: 'Hoteles boutique',
                            subtitle: 'Encuentra tu lugar ideal con atención personalizada',
                            priceLabel: 'Desde',
                            priceValue: '$58',
                            ctaLabel: 'Reservar',
                            onCtaClick: () => alert('Reservar clicked'),
                        },
                        {
                            id: 5,
                            image: cardimg,
                            title: 'Paquetes familiares',
                            subtitle: 'Promociones especiales para viajes en grupo',
                            priceLabel: 'Desde',
                            priceValue: '$80',
                            ctaLabel: 'Reservar',
                            onCtaClick: () => alert('Reservar clicked'),
                        },
                        {
                            id: 6,
                            image: cardimg,
                            title: 'Escapadas románticas',
                            subtitle: 'Momentos inolvidables en destinos seleccionados',
                            priceLabel: 'Desde',
                            priceValue: '$90',
                            ctaLabel: 'Reservar',
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
                            image: cardimg1,
                            title: 'Hoteles en la Isla de Margarita',
                            subtitle: 'Vive la experiencia todo incluido en la isla de Margarita',
                            priceLabel: 'Desde',
                            priceValue: '$54',
                            ctaLabel: 'Reservar',
                            onCtaClick: () => alert('Reservar clicked'),
                        },
                        {
                            id: 2,
                            image: cardimg1,
                            title: 'Escapadas frente al mar',
                            subtitle: 'Relájate con paquetes pensados para ti y tu familia',
                            priceLabel: 'Desde',
                            priceValue: '$72',
                            ctaLabel: 'Reservar',
                            onCtaClick: () => alert('Reservar clicked'),
                        },
                        {
                            id: 3,
                            image: cardimg1,
                            title: 'Aventuras todo incluido',
                            subtitle: 'Disfruta experiencias únicas con servicios premium',
                            priceLabel: 'Desde',
                            priceValue: '$65',
                            ctaLabel: 'Reservar',
                            onCtaClick: () => alert('Reservar clicked'),
                        },
                        {
                            id: 4,
                            image: cardimg1,
                            title: 'Hoteles boutique',
                            subtitle: 'Encuentra tu lugar ideal con atención personalizada',
                            priceLabel: 'Desde',
                            priceValue: '$58',
                            ctaLabel: 'Reservar',
                            onCtaClick: () => alert('Reservar clicked'),
                        },
                        {
                            id: 5,
                            image: cardimg1,
                            title: 'Paquetes familiares',
                            subtitle: 'Promociones especiales para viajes en grupo',
                            priceLabel: 'Desde',
                            priceValue: '$80',
                            ctaLabel: 'Reservar',
                            onCtaClick: () => alert('Reservar clicked'),
                        },
                        {
                            id: 6,
                            image: cardimg1,
                            title: 'Escapadas románticas',
                            subtitle: 'Momentos inolvidables en destinos seleccionados',
                            priceLabel: 'Desde',
                            priceValue: '$90',
                            ctaLabel: 'Reservar',
                            onCtaClick: () => alert('Reservar clicked'),
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

