import React from 'react';
import { useParams } from 'react-router-dom';
import DetailBanner from '../components/detail/DetailBanner';
import DetailHero from '../components/detail/DetailHero';
import AccommodationInfo from '../components/detail/AccommodationInfo';
import BookingForm from '../components/detail/BookingForm';
import LocationMap from '../components/detail/LocationMap';
import PromoCardCarousel from '../components/home/PromoCardCarousel';

// Import images
import detail1 from '../assets/detail1.jpg';
import detail2 from '../assets/detail2.jpg';
import detail3 from '../assets/detail3.jpg';
import detail4 from '../assets/detail4.jpg';
import detail5 from '../assets/detail5.jpg';
import detail6 from '../assets/detail6.jpg';
import lrqthmb from '../assets/lrqthmb.jpg';
import mgtathmb from '../assets/mgtathmb.jpg';
import cocthmb from '../assets/cocthmb.jpg';

// ── Demo data (will come from API later) ──────────────────────────────────────
const DEMO_ACCOMMODATION = {
    title: 'Hesperia Isla Margarita',
    price: 'Desde $120',
    priceLabel: '/ noche',
    badges: [
        {
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                </svg>
            ),
            text: 'Isla de Margarita, Venezuela',
        },
    ],
    images: [detail1, detail2, detail3, detail4, detail5, detail6],
    details: {
        destination: 'Isla de Margarita, Nueva Esparta',
        stars: 5,
        boardType: 'Todo Incluido',
        description: 'Construido en una franja de playa a la cual está directamente asomado, el hotel Hesperia Isla Margarita es sinónimo de elegancia y sofisticación. Rodeado por un paisaje idílico de exuberante vegetación y un mar de aguas cristalinas, este resort 5 estrellas es el lugar perfecto para quienes buscan un descanso exclusivo y un servicio impecable. Sus habitaciones, amplias y confortables, garantizan el máximo bienestar de cada huésped. A solo minutos del pintoresco poblado de Juan Griego en el norte de la Isla, este paraíso goza del innegable encanto del Caribe Venezolano.',
        amenities: [
            { icon: 'wifi', label: 'WiFi Libre' },
            { icon: 'pool', label: 'Piscina Inmensa' },
            { icon: 'spa', label: 'Spa y Masajes' },
            { icon: 'gym', label: 'Gimnasio' },
            { icon: 'restaurant', label: 'Bares y Restaurantes' },
            { icon: 'clock', label: 'Servicio 24h' },
            { icon: 'ac', label: 'Aire Acondicionado' },
            { icon: 'tennis', label: 'Cancha de Pádel / Tenis' },
            { icon: 'beach', label: 'Acceso Directo a la Playa' },
            { icon: 'parking', label: 'Estacionamiento' },
        ],
    },
    rooms: [
        { id: '1', name: 'Habitación Doble Estándar' },
        { id: '2', name: 'Habitación Doble Superior con vista al mar' },
        { id: '3', name: 'Suite Junior' },
        { id: '4', name: 'Suite Familiar' },
    ]
};

const AccommodationDetail = () => {
    const { id } = useParams();

    // In future: fetch accommodation by `id` from the API
    const accommodation = DEMO_ACCOMMODATION;

    return (
        <div className="pb-6">
            <DetailBanner />

            <DetailHero
                title={accommodation.title}
                badges={accommodation.badges}
                images={accommodation.images}
            />

            <section className="mx-auto w-full max-w-7xl px-6 sm:px-10 mt-8">
                <div className="flex flex-col lg:flex-row gap-4 lg:gap-8">
                    {/* Left side: Information (8/12 approx) */}
                    <div className="lg:w-8/12">
                        <AccommodationInfo {...accommodation.details} />
                    </div>

                    {/* Right side: Booking form (4/12 approx) */}
                    <div className="lg:w-4/12">
                        <BookingForm
                            price={accommodation.price}
                            priceLabel={accommodation.priceLabel}
                            isAccommodation={true}
                            roomTypes={accommodation.rooms}
                        />
                    </div>
                </div>
            </section>

            <LocationMap query={`${accommodation.title}, ${accommodation.details.destination}`} />

            {/* ── Related Accommodations ──────────────────────────────── */}
            <section className="px-4 sm:px-6 py-10">
                <PromoCardCarousel
                    title="Otros alojamientos populares"
                    subtitle="Explora las mejores opciones de estadía"
                    verMasHref="/hoteles"
                    items={[
                        {
                            id: 2,
                            image: mgtathmb,
                            title: 'Sunsol Isla Caribe',
                            subtitle: 'Un paraíso familiar con todo incluido',
                            priceLabel: 'Desde',
                            priceValue: '$90',
                            ctaLabel: 'Ver Hotel',
                            onCtaClick: () => { },
                        },
                        {
                            id: 3,
                            image: cocthmb,
                            title: 'Sunsol Punta Blanca',
                            subtitle: 'Exclusividad de primera frente al mar Caribe',
                            priceLabel: 'Desde',
                            priceValue: '$110',
                            ctaLabel: 'Ver Hotel',
                            onCtaClick: () => { },
                        },
                        {
                            id: 4,
                            image: lrqthmb,
                            title: 'Posada Macanao Lodge',
                            subtitle: 'Conexión total con la belleza de Los Roques',
                            priceLabel: 'Desde',
                            priceValue: '$250',
                            ctaLabel: 'Ver Hotel',
                            onCtaClick: () => { },
                        },
                    ]}
                />
            </section>
        </div>
    );
};

export default AccommodationDetail;
