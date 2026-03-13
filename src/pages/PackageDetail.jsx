import React from 'react';
import { useParams } from 'react-router-dom';
import DetailBanner from '../components/detail/DetailBanner';
import DetailHero from '../components/detail/DetailHero';
import PackageInfo from '../components/detail/PackageInfo';
import BookingForm from '../components/detail/BookingForm';
import LocationMap from '../components/detail/LocationMap';
import PromoCardCarousel from '../components/home/PromoCardCarousel';
import mgtathmb from '../assets/mgtathmb.jpg';
import canthmb from '../assets/canthmb.jpg';
import merthmb from '../assets/merthmb.jpg';
import lrqthmb from '../assets/lrqthmb.jpg';
import cocthmb from '../assets/cocthmb.jpg';
import detail1 from '../assets/detail1.jpg';
import detail2 from '../assets/detail2.jpg';
import detail3 from '../assets/detail3.jpg';
import detail4 from '../assets/detail4.jpg';
import detail5 from '../assets/detail5.jpg';
import detail6 from '../assets/detail6.jpg';

// ── Demo data (will come from API later) ──────────────────────────────────────
const DEMO_PACKAGE = {
    title: 'Escapada Tropical en Isla de Margarita',
    price: '$250',
    priceLabel: '/ persona',
    badges: [
        {
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                </svg>
            ),
            text: 'Isla de Margarita, Venezuela'
        },
        {
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-amber-500">
                    <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
                </svg>
            ),
            text: '4'
        },
    ],
    images: [detail1, detail2, detail3, detail4, detail5, detail6],
    details: {
        accommodation: 'Hesperia Isla Margarita',
        days: '4 Días / 3 Noches',
        guestType: 'Pareja / Familiar',
        boardType: 'Todo Incluido',
        description: 'Disfruta de una experiencia inolvidable en la perla del Caribe. Este paquete exclusivo incluye estancia en habitación de lujo con vista al mar, acceso ilimitado a restaurantes gourmet, bebidas nacionales e internacionales, y actividades recreativas diarias. Ideal para quienes buscan relax y diversión en un entorno paradisíaco. Ubicado en una de las zonas más exclusivas de la isla, el hotel ofrece piscinas infinity, acceso directo a la playa y un servicio excepcional de primera clase.',
        amenities: [
            { icon: 'wifi', label: 'WiFi Libre' },
            { icon: 'pool', label: 'Piscina' },
            { icon: 'spa', label: 'Spa' },
            { icon: 'gym', label: 'Gimnasio' },
            { icon: 'restaurant', label: 'Bar y Restaurante' },
            { icon: 'clock', label: 'Servicio 24h' },
            { icon: 'ac', label: 'Aire Acondicionado' },
            { icon: 'beach', label: 'Acceso Directo a la Playa' },
        ],
    },
};

const PackageDetail = () => {
    const { id } = useParams();

    // In future: fetch package by `id` from the API
    const pkg = DEMO_PACKAGE;

    return (
        <div className="pb-6">
            <DetailBanner />

            <DetailHero
                title={pkg.title}
                badges={pkg.badges}
                images={pkg.images}
            />

            <section className="mx-auto w-full max-w-7xl px-6 sm:px-10 mt-8">
                <div className="flex flex-col lg:flex-row gap-4 lg:gap-8">
                    {/* Left side: Information (8/12 approx) */}
                    <div className="lg:w-8/12">
                        <PackageInfo {...pkg.details} />
                    </div>

                    {/* Right side: Booking form (4/12 approx) */}
                    <div className="lg:w-4/12">
                        <BookingForm
                            price={pkg.price}
                            priceLabel={pkg.priceLabel}
                        />
                    </div>
                </div>
            </section>

            <LocationMap query={`${pkg.details.accommodation}, Isla de Margarita, Venezuela`} />

            {/* ── Related Packages ──────────────────────────────── */}
            <section className="px-4 sm:px-6 py-10">
                <PromoCardCarousel
                    title="Otros paquetes populares"
                    subtitle="Descubre más destinos increíbles"
                    verMasHref="/packages"
                    items={[
                        {
                            id: 2,
                            image: canthmb,
                            title: 'Aventura en Canaima',
                            subtitle: 'Explora majestuosos tepuyes y el Salto Ángel',
                            priceLabel: 'Desde',
                            priceValue: '$320',
                            ctaLabel: 'Ver Paquete',
                            onCtaClick: () => { },
                        },
                        {
                            id: 3,
                            image: merthmb,
                            title: 'Magia en Mérida',
                            subtitle: 'Descubre los Andes y su clima encantador',
                            priceLabel: 'Desde',
                            priceValue: '$165',
                            ctaLabel: 'Ver Paquete',
                            onCtaClick: () => { },
                        },
                        {
                            id: 4,
                            image: lrqthmb,
                            title: 'Paraíso Los Roques',
                            subtitle: 'Playas de arena blanca y aguas cristalinas',
                            priceLabel: 'Desde',
                            priceValue: '$450',
                            ctaLabel: 'Ver Paquete',
                            onCtaClick: () => { },
                        },
                        {
                            id: 5,
                            image: cocthmb,
                            title: 'Relax en Coche',
                            subtitle: 'Desconéctate en un ambiente de total tranquilidad',
                            priceLabel: 'Desde',
                            priceValue: '$80',
                            ctaLabel: 'Ver Paquete',
                            onCtaClick: () => { },
                        },
                        {
                            id: 6,
                            image: mgtathmb,
                            title: 'Aventura en Margarita',
                            subtitle: 'Disfruta de la Perla del Caribe al máximo',
                            priceLabel: 'Desde',
                            priceValue: '$190',
                            ctaLabel: 'Ver Paquete',
                            onCtaClick: () => { },
                        },
                    ]}
                />
            </section>
        </div>
    );
};

export default PackageDetail;
