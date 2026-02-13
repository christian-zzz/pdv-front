import React from 'react';
import FilterBar from '../components/home/FilterBar';
import HeroSlider from '../components/home/HeroSlider';
import PromoCardCarousel from '../components/home/PromoCardCarousel';
import cardimg from '../assets/card.jpg';
import cardimg1 from '../assets/card1.jpg';

const Home = () => {
    return (
        <div>
            <HeroSlider />
            <FilterBar />

            <section className="px-4 sm:px-6 py-6">
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
                            ctaLabel: 'Ver más',
                            onCtaClick: () => alert('Ver más clicked'),
                        },
                        {
                            id: 2,
                            image: cardimg,
                            title: 'Escapadas frente al mar',
                            subtitle: 'Relájate con paquetes pensados para ti y tu familia',
                            priceLabel: 'Desde',
                            priceValue: '$72',
                            ctaLabel: 'Ver más',
                            onCtaClick: () => alert('Ver más clicked'),
                        },
                        {
                            id: 3,
                            image: cardimg,
                            title: 'Aventuras todo incluido',
                            subtitle: 'Disfruta experiencias únicas con servicios premium',
                            priceLabel: 'Desde',
                            priceValue: '$65',
                            ctaLabel: 'Ver más',
                            onCtaClick: () => alert('Ver más clicked'),
                        },
                        {
                            id: 4,
                            image: cardimg,
                            title: 'Hoteles boutique',
                            subtitle: 'Encuentra tu lugar ideal con atención personalizada',
                            priceLabel: 'Desde',
                            priceValue: '$58',
                            ctaLabel: 'Ver más',
                            onCtaClick: () => alert('Ver más clicked'),
                        },
                        {
                            id: 5,
                            image: cardimg,
                            title: 'Paquetes familiares',
                            subtitle: 'Promociones especiales para viajes en grupo',
                            priceLabel: 'Desde',
                            priceValue: '$80',
                            ctaLabel: 'Ver más',
                            onCtaClick: () => alert('Ver más clicked'),
                        },
                        {
                            id: 6,
                            image: cardimg,
                            title: 'Escapadas románticas',
                            subtitle: 'Momentos inolvidables en destinos seleccionados',
                            priceLabel: 'Desde',
                            priceValue: '$90',
                            ctaLabel: 'Ver más',
                            onCtaClick: () => alert('Ver más clicked'),
                        },
                    ]}
                />
            </section>

            <section className="px-4 sm:px-6 py-6">
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
                            ctaLabel: 'Ver más',
                            onCtaClick: () => alert('Ver más clicked'),
                        },
                        {
                            id: 2,
                            image: cardimg1,
                            title: 'Escapadas frente al mar',
                            subtitle: 'Relájate con paquetes pensados para ti y tu familia',
                            priceLabel: 'Desde',
                            priceValue: '$72',
                            ctaLabel: 'Ver más',
                            onCtaClick: () => alert('Ver más clicked'),
                        },
                        {
                            id: 3,
                            image: cardimg1,
                            title: 'Aventuras todo incluido',
                            subtitle: 'Disfruta experiencias únicas con servicios premium',
                            priceLabel: 'Desde',
                            priceValue: '$65',
                            ctaLabel: 'Ver más',
                            onCtaClick: () => alert('Ver más clicked'),
                        },
                        {
                            id: 4,
                            image: cardimg1,
                            title: 'Hoteles boutique',
                            subtitle: 'Encuentra tu lugar ideal con atención personalizada',
                            priceLabel: 'Desde',
                            priceValue: '$58',
                            ctaLabel: 'Ver más',
                            onCtaClick: () => alert('Ver más clicked'),
                        },
                        {
                            id: 5,
                            image: cardimg1,
                            title: 'Paquetes familiares',
                            subtitle: 'Promociones especiales para viajes en grupo',
                            priceLabel: 'Desde',
                            priceValue: '$80',
                            ctaLabel: 'Ver más',
                            onCtaClick: () => alert('Ver más clicked'),
                        },
                        {
                            id: 6,
                            image: cardimg1,
                            title: 'Escapadas románticas',
                            subtitle: 'Momentos inolvidables en destinos seleccionados',
                            priceLabel: 'Desde',
                            priceValue: '$90',
                            ctaLabel: 'Ver más',
                            onCtaClick: () => alert('Ver más clicked'),
                        },
                    ]}
                />
            </section>
        </div>
    );
};

export default Home;
