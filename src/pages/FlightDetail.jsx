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

// ── Demo data (will come from API later) ──────────────────────────────────────
const DEMO_FLIGHT = {
    title: 'Conoce Bogotá',
    price: 'Desde $406',
    priceLabel: '',
    badges: [
        {
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                </svg>
            ),
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
            { icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.018-.39.035-.586.051m-12.5-1.8m0 0a2.18 2.18 0 0 1-.75-1.661V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z" /></svg>, label: 'Incluye 1 maleta de 23 kilos' },
            { icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" /></svg>, label: 'Tarifa para febrero 2026' },
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
