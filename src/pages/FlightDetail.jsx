import React from 'react';
import { useParams } from 'react-router-dom';
import DetailBanner from '../components/detail/DetailBanner';
import DetailHero from '../components/detail/DetailHero';
import FlightInfo from '../components/detail/FlightInfo';
import BookingForm from '../components/detail/BookingForm';
import LocationMap from '../components/detail/LocationMap';
import PromoCardCarousel from '../components/home/PromoCardCarousel';

// Import images (assuming we re-use some or use placeholders)
import bannerflight from '../assets/bannerflight.jpg';
import bog1 from '../assets/bog1.jpg';
import bog2 from '../assets/bog2.jpg';
import bog3 from '../assets/bog3.jpg';
import bog4 from '../assets/bog4.jpg';
import bog5 from '../assets/bog5.jpg';
import bolthmb from '../assets/bolthmb.jpg';
import miathmb from '../assets/miathmb.jpg';
import methmb from '../assets/methmb.jpg';

import { MapPin, SuitcaseRolling, CurrencyDollar } from '@phosphor-icons/react';

// ── Demo data (will come from API later) ──────────────────────────────────────
const DEMO_FLIGHT = {
    title: 'Conoce Bogotá',
    price: 'Desde $406',
    priceLabel: '',
    badges: [
        {
            icon: <MapPin className="w-5 h-5" />,
            text: 'Bogotá, Colombia',
        },
    ],
    images: [bog1, bog2, bog3, bog4, bog5],
    details: {
        destination: 'Bogotá, Colombia',
        requirementsShort: '6 Documentos',
        guestType: 'Por Persona',
        boardType: 'Solo Vuelo',
        description: 'Bogotá te espera para una gran aventura. Conoce lugares increíbles como el Museo del Oro, la Catedral de Sal o la Montaña de Monserrate.',
        requirements: [
            'Pasaporte vigente o con hasta 10 años de haber perdido su vigencia',
            'Cédula de identidad venezolana',
            'Permiso Especial de Permanencia (PEP) o Permiso por Protección Temporal (PPT)',
            'Tarjeta de Movilidad Fronteriza (TMF)',
            'Acta de nacimiento para menores de edad',
            'Se debe diligenciar el Check-Mig en la página de Migración Colombia'
        ],
        amenities: [
            { icon: <SuitcaseRolling className="w-5 h-5" />, label: 'Incluye 1 maleta de 23 kilos' },
            { icon: <CurrencyDollar className="w-5 h-5" />, label: 'Tarifa para febrero 2026' },
        ],
    },
};

const FlightDetail = () => {
    const { id } = useParams();

    // In future: fetch flight by `id` from the API
    const flight = DEMO_FLIGHT;

    return (
        <div className="pb-6">
            <DetailBanner image={bannerflight} />

            <DetailHero
                title={flight.title}
                badges={flight.badges}
                images={flight.images}
            />

            <section className="mx-auto w-full max-w-7xl px-6 sm:px-10 mt-8">
                <div className="flex flex-col lg:flex-row gap-4 lg:gap-8">
                    {/* Left side: Information (7/12 approx) */}
                    <div className="lg:w-8/12">
                        <FlightInfo {...flight.details} />
                    </div>

                    {/* Right side: Booking form (5/12 approx) */}
                    <div className="lg:w-4/12">
                        <BookingForm
                            price={flight.price}
                            priceLabel={flight.priceLabel}
                            isFlight={true}
                        />
                    </div>
                </div>
            </section>

            <LocationMap query={`${flight.details.destination}`} />

            {/* ── Related Flights ──────────────────────────────── */}
            <section className="px-4 sm:px-6 py-10">
                <PromoCardCarousel
                    title="Otros vuelos populares"
                    subtitle="Descubre más destinos desde tu ciudad"
                    verMasHref="/vuelos"
                    items={[
                        {
                            id: 2,
                            image: bolthmb,
                            title: 'Vuelo a Bolivia',
                            subtitle: 'Explora el asombroso Salar de Uyuni',
                            priceLabel: 'Desde',
                            priceValue: '$550',
                            ctaLabel: 'Ver Vuelo',
                            onCtaClick: () => { },
                        },
                        {
                            id: 3,
                            image: miathmb,
                            title: 'Vuelo a Miami',
                            subtitle: 'Conexión rápida y 2 maletas incluidas',
                            priceLabel: 'Desde',
                            priceValue: '$480',
                            ctaLabel: 'Ver Vuelo',
                            onCtaClick: () => { },
                        },
                        {
                            id: 4,
                            image: methmb,
                            title: 'Vuelo a Cancún',
                            subtitle: 'Disfruta un paraíso en el Caribe mexicano',
                            priceLabel: 'Desde',
                            priceValue: '$210',
                            ctaLabel: 'Ver Vuelo',
                            onCtaClick: () => { },
                        },
                    ]}
                />
            </section>
        </div>
    );
};

export default FlightDetail;
